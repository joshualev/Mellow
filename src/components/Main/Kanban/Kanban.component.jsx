import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useEffect, useRef } from "react";

import Card from "./Card/Card.component";
import DropMenu from "../../DropMenu/DropMenu.component";
import "./Kanban.styles.scss";

const Kanban = ({ cardData }) => {
  const [list, setList] = useState(cardData);
  const [openOptions, setOpenOptions] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Enables use of Beautiful-dnd library without turning off strict-mode
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const handleOpenOptions = () => {
    return openOptions ? setOpenOptions(false) : setOpenOptions(true);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // if card is not in the same section where initially selected
    if (source.droppableId !== destination.droppableId) {
      const initialSection = list[source.droppableId]; // section start position
      const destSection = list[destination.droppableId]; // section end position
      const initialCards = [...initialSection.cards]; // initial position section cards
      const destCards = [...destSection.cards]; // end position section destination cards

      const [removed] = initialCards.splice(source.index, 1); // value of the initial selected card
      destCards.splice(destination.index, 0, removed); // add initial card to new destination

      // Set the updated list
      setList({
        ...list,
        [source.droppableId]: { ...initialSection, cards: initialCards },
        [destination.droppableId]: {
          ...destSection,
          cards: initialCards,
        },
      });
    } else {
      // If the card is in the same section where initially selected
      const section = list[source.droppableId]; // initial section
      const copiedCards = [...section.cards]; // sections card contents
      const [removed] = copiedCards.splice(source.index, 1); // equal to removed card index
      copiedCards.splice(destination.index, 0, removed); // insert removed card into updated section index

      // Set the updated list
      setList({
        ...list,
        [source.droppableId]: {
          ...section,
          cards: copiedCards,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {enabled ? (
        <div className="kanban">
          {list.map((section) => (
            <Droppable key={section.id} droppableId={section.id}>
              {(provided) => (
                <section
                  className="kanban__section"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="kanban__section__title">
                    <h4>{section.name}</h4>
                    <DropMenu onClick={handleOpenOptions} />
                  </div>

                  <div className="kanban__section__cards">
                    {section.cards.map((card, index) => (
                      <Card
                        className="kanban__section__cards__card"
                        key={card.id}
                        card={card}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                </section>
              )}
            </Droppable>
          ))}
        </div>
      ) : null}
    </DragDropContext>
  );
};

export default Kanban;
