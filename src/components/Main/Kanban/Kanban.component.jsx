import { DragDropContext } from "react-beautiful-dnd";

import { useState, useEffect, useRef } from "react";

import Section from "./Section/Section.component";

import "./Kanban.styles.scss";

const Kanban = ({ cardData }) => {
  const [list, setList] = useState(cardData);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    setList(cardData);
  }, [setList, cardData]);

  const dragCard = useRef();
  const dragCardNode = useRef();

  const handleDragStart = (e, card) => {
    dragCardNode.current = e.target;
    dragCardNode.current.addEventListener("dragend", handleDragEnd);
    dragCard.current = card;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, targetCard) => {
    if (dragCardNode.current !== e.currentTarget) {
      setList((oldList) => {
        let newList = JSON.parse(JSON.stringify(oldList));

        newList[targetCard.sectionIndex].cards.splice(
          targetCard.cardIndex,
          0,
          newList[dragCard.current.sectionIndex].cards.splice(
            dragCard.current.cardIndex,
            1
          )[0]
        );

        localStorage.setItem("List", JSON.stringify(newList));

        setTimeout(() => {
          setDragging(false);
        }, 0);
        return newList;
      });
    }
  };

  const handleDragEnd = (e) => {
    setTimeout(() => {
      setDragging(false);
    }, 0);

    dragCard.current = null;
    dragCardNode.current.removeEventListener("dragend", handleDragEnd);
    dragCardNode.current = null;
  };

  const getStyles = (card) => {
    if (
      dragCard.current.sectionIndex === card.sectionIndex &&
      dragCard.current.cardIndex === card.cardIndex
    ) {
      return "current card";
    }
    return "card";
  };

  return (
    <DragDropContext>
      <div className="kanban__container">
        {list.map((section, sectionIndex) => {
          return (
            <Section
              key={section.id}
              sectionIndex={sectionIndex}
              getStyles={getStyles}
              isDragging={dragging}
              section={section}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
              onDragEnter={(e) => handleDragEnter(e, { section, sectionIndex })}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};
export default Kanban;
