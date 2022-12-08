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
  if (cardData) {
    const { title, description, category, dueDate, messages } = cardData;

    return (
      <div
        draggable
        key={cardData.id}
        className={`${
          dragging ? getStyles({ sectionIndex, cardIndex }) : "card"
        }`}
        onDragStart={(e) => handleDragStart(e, { sectionIndex, cardIndex })}
        onDragEnter={
          dragging
            ? (e) => handleDragEnter(e, { sectionIndex, cardIndex })
            : null
        }
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
    );
  } else {
    return null;
  }
};

export default Card;
