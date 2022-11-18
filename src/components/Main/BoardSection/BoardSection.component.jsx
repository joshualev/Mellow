import { BsThreeDots } from "react-icons/bs";

import Card from "../Card/Card.component";

import "./BoardSection.styles.scss";

const BoardSection = ({ cardData, title, id }) => {
  return (
    <>
      <div className="title-container" key={id}>
        <h4>{title}</h4>
        <BsThreeDots className="option-button" />
      </div>
      <div className="workspace-cards-container">
        {cardData.cards.map((card) => (
          <Card key={card.id} cardData={card} />
        ))}
      </div>
    </>
  );
};

export default BoardSection;
