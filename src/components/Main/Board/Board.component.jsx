import BoardSection from "../BoardSection/BoardSection.component";

import "./Board.styles.scss";

const Board = () => {
  const titles = ["TODO", "IN PROGRESS", "COMPLETE", "QUESTIONS"];

  return (
    <div className="board-container">
      {titles.map((title) => (
        <BoardSection key={title} title={title} />
      ))}
    </div>
  );
};
export default Board;
