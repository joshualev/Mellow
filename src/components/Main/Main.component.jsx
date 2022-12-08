import Kanban from "./Kanban/Kanban.component";

const Main = ({ cardData }) => {
  return (
    <div className="main-container">
      <Kanban cardData={cardData} />
    </div>
  );
};

export default Main;
