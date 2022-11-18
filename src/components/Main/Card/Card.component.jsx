import { BsChatDots, BsCalendar, BsPersonCircle } from "react-icons/bs";

import "./Card.styles.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="upper-card">
        <div className="header">UX Adjustments</div>
        <div className="description">Description goes here</div>
        <section>
          <h5 className="category">Research</h5>
          <BsPersonCircle className="user-icon" />
        </section>
      </div>

      <div className="lower-card">
        <div className="element">
          <BsChatDots />
          <span>2</span>
        </div>
        <div className="element">
          <BsCalendar />
          <span> Nov 20</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
