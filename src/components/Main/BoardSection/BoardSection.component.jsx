import { useState } from "react";

import { BsThreeDots } from "react-icons/bs";

import Card from "../Card/Card.component";
import DropMenu from "../../DropMenu/DropMenu.component";

import "./BoardSection.styles.scss";

const BoardSection = ({
  dragging,
  getStyles,
  sectionIndex,
  handleDragStart,
  handleDragEnter,

  section,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  const handleOpenOptions = () => {
    return openOptions ? setOpenOptions(false) : setOpenOptions(true);
  };
  return (
    <>
      <div className="section-container">
        <div className="title-container" key={section.id}>
          <h4>{section.name}</h4>
          {/* 
          {!openOptions ? (
            <BsThreeDots
              className="option-button"
              onClick={handleOpenOptions}
            />
          ) : ( */}
          <DropMenu onClick={handleOpenOptions} />
          {/* )} */}
        </div>
        <div className="workspace-cards-container">
          {section.cards.map(
            (card, cardIndex) =>
              card && (
                <Card
                  key={cardIndex}
                  cardData={card}
                  handleDragStart={handleDragStart}
                  handleDragEnter={handleDragEnter}
                  sectionIndex={sectionIndex}
                  cardIndex={cardIndex}
                  dragging={dragging}
                  getStyles={getStyles}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default BoardSection;
