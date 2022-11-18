import BoardSection from "../BoardSection/BoardSection.component";

import "./Board.styles.scss";

const Board = ({ cardData }) => {
  cardData.sections.map((section) => console.log(section));
  return (
    <div className="board-container">
      {cardData.sections.map(({ id, name }) => (
        <BoardSection cardData={cardData} key={id} title={name} />
      ))}
    </div>
  );
};
export default Board;
