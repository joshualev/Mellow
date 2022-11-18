import { BsThreeDots } from "react-icons/bs";

import Card from "../Card/Card.component";

import "./BoardSection.styles.scss";

const BoardSection = ({ title }) => {
  return (
    <>
      <div className="title-container">
        <h4>{title}</h4>
        <BsThreeDots className="option-button" />
      </div>

      <div className="workspace-cards-container">
        <Card />
      </div>
    </>
  );
};

export default BoardSection;
