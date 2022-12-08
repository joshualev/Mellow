import React from "react";
import { Draggable } from "react-beautiful-dnd";

import { BsChatDots, BsCalendar, BsPersonCircle } from "react-icons/bs";

import "./Card.styles.scss";

const Card = ({ card, index }) => {
  if (card) {
    const { title, description, category, dueDate, messages } = card;

    return (
      <Draggable key={card.id} draggableId={card.id} index={index}>
        {(provided) => (
          <div
            className="kanban__section__cards__card"
            key={card.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card__upper">
              <div className="card__header">{title}</div>
              <div className="card__description">{description}</div>

              <section className="card__section">
                <h5 className="card__category">{category}</h5>
                <BsPersonCircle className="card__user" />
              </section>
            </div>
            <div className="card__lower">
              <div className="card__notification__element">
                <BsChatDots />
                <span>{messages}</span>
              </div>
              <div className="card__notification__element">
                <BsCalendar />
                <span>{dueDate}</span>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  } else {
    return null;
  }
};

export default Card;
