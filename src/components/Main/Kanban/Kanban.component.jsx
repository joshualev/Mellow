import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useEffect, useRef } from "react";

import Card from "./Card/Card.component";
import DropMenu from "../../DropMenu/DropMenu.component";
import "./Kanban.styles.scss";

const Kanban = ({ cardData }) => {
  const [list, setList] = useState(cardData);
  const [openOptions, setOpenOptions] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // ===============================================================
  // Enables use of Beautiful-dnd library without turning off strict-mode
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  // ===============================================================

  const handleOpenOptions = () => {
    return openOptions ? setOpenOptions(false) : setOpenOptions(true);
  };

  const onDragEnd = (result, section) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // if card is not in the same section where initially selected
    if (source.droppableId !== destination.droppableId) {
      // find the source column index
      const sourceColIndex = list.findIndex((e) => e.id === source.droppableId);
      // find the destination column index
      const destinationColIndex = list.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = list[sourceColIndex]; // source column
      const destinationCol = list[destinationColIndex]; // destination column

      const sourceCard = [...sourceCol.cards]; // index of source card position in source column
      const destinationCard = [...destinationCol.cards]; // index of card position in destination column

      const [removed] = sourceCard.splice(source.index, 1); // selected card to be removed from source column
      destinationCard.splice(destination.index, 0, removed); // selected card to be added to destination column

      list[sourceColIndex].cards = sourceCard; // updated source column cards
      list[destinationColIndex].cards = destinationCard; // updated destination column cards

      setList(list); // set updated list values
    } else {
      // SAME COLUMN
      // re-order cards in column according to new card destination
      const sourceColIndex = list.findIndex((e) => e.id === source.droppableId);

      const column = list[source.droppableId - 1]; // column
      const copiedCards = [...column.cards]; // column cards
      const [removed] = copiedCards.splice(source.index, 1); // remove source card from initial column position
      copiedCards.splice(destination.index, 0, removed); // add selected card to new position in column

      list[sourceColIndex].cards = copiedCards; // updated column cards

      setList(list); // set updated list values
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
