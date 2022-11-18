import Board from "./Board/Board.component";

const Main = ({ cardData }) => {
  return (
    <div className="main-container">
      <Board cardData={cardData} />
    </div>
  );
};

export default Main;
