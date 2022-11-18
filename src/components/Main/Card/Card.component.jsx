import { BsChatDots, BsCalendar, BsPersonCircle } from "react-icons/bs";

import "./Card.styles.scss";

const Card = ({ cardData }) => {
  const { title, description, category, section, dueDate, messages } = cardData;

  return (
    <>
      <div className="card">
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
