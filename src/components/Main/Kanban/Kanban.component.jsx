import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { reorder } from "../../../features/sections/sectionsSlice";

import Card from "./Card/Card.component";
import DropMenu from "../../DropMenu/DropMenu.component";

import "./Kanban.styles.scss";

const Kanban = () => {
  const [enabled, setEnabled] = useState(false);

  const { sectionsData } = useSelector((state) => state.sectionsData);
  const { view } = useSelector((state) => state.view);

  const dispatch = useDispatch();

  useEffect(() => {
    // Enables use of Beautiful-dnd library without turning off strict-mode
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragEnd = (result, section) => {
    dispatch(reorder(result));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {enabled ? (
        <div className={`${view === "list" ? "list" : "kanban"}`}>
          {sectionsData.map((section) => (
            <Droppable
              key={section.id}
              droppableId={section.id}
              direction={`${view === "list" ? "horizontal" : "vertical"}`}
            >
              {(provided) => (
                <section
                  className={`${
                    view === "list" ? "list__section" : "kanban__section"
                  }`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="kanban__section__title">
                    <h4>{section.name}</h4>
                    <DropMenu />
                  </div>

                  <div className="kanban__create__card">
                    <h4>Add new task</h4>
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
