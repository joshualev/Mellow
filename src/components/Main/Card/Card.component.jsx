import { useRef, useState } from "react";

import { BsChatDots, BsCalendar, BsPersonCircle } from "react-icons/bs";

import "./Card.styles.scss";

const Card = ({
  cardData,
  handleDragStart,
  handleDragEnter,
  sectionIndex,
  cardIndex,
  getStyles,
  dragging,
}) => {
  const { title, description, category, dueDate, messages } = cardData;

  return (
    <>
      <div
        draggable
        className={`${
          dragging ? getStyles({ sectionIndex, cardIndex }) : "card"
        }`}
        onDragStart={(e) => handleDragStart(e, { sectionIndex, cardIndex })}
        onDragEnter={(e) => handleDragEnter(e, { sectionIndex, cardIndex })}
      >
        <div className="upper-card">
          <div className="header">{title}</div>
          <div className="description">{description}</div>
          <section>
            <h5 className="category">{category}</h5>
            <BsPersonCircle className="user-icon" />
          </section>
        </div>
        <div className="lower-card">
          <div className="element">
            <BsChatDots />
            <span>{messages}</span>
          </div>
          <div className="element">
            <BsCalendar />
            <span>{dueDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
