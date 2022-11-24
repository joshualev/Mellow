import { useState, useEffect, useRef } from "react";

import BoardSection from "../BoardSection/BoardSection.component";

import "./Board.styles.scss";

const Board = ({ cardData }) => {
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

  const handleDragEnd = (e) => {
    setDragging(false);

    dragCard.current = null;
    dragCardNode.current.removeEventListener("dragend", handleDragEnd);
    dragCardNode.current = null;
  };

  const handleDragEnter = (e, targetCard) => {
    if (dragCardNode.current !== e.target) {
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

        return newList;
      });
    }
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
    <div className="board-container">
      {list.map((section, sectionIndex) => (
        <BoardSection
          key={section.id}
          handleDragStart={handleDragStart}
          handleDragEnter={handleDragEnter}
          onDragEnter={
            dragging && !section.cards.length
              ? (e) => handleDragEnter(e, { sectionIndex, cardIndex: 0 })
              : null
          }
          sectionIndex={sectionIndex}
          getStyles={getStyles}
          dragging={dragging}
          section={section}
        />
      ))}
    </div>
  );
};
export default Board;
