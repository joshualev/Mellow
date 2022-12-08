import { useState } from "react";

import Card from "../Card/Card.component";
import DropMenu from "../../../DropMenu/DropMenu.component";

import "./Section.styles.scss";

const Section = ({
  isDragging,
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
    <div className="kanban__section">
      <div
        className="kanban__section__title"
        dragging={isDragging}
        key={section.id}
      >
        <h4>{section.name}</h4>
        <DropMenu onClick={handleOpenOptions} />
      </div>

      <div className="kanban__section__cards">
        {section.cards.map((card, cardIndex) => {
          return (
            <Card
              sectionData={section}
              key={cardIndex}
              cardData={card}
              sectionIndex={sectionIndex}
              cardIndex={cardIndex}
              dragging={isDragging}
              getStyles={getStyles}
              handleDragStart={handleDragStart}
              handleDragEnter={handleDragEnter}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
