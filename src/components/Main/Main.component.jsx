import Kanban from "./Kanban/Kanban.component";
import CreateCard from "./CreateCard/CreateCard.component";
const Main = ({ listView }) => {
  return (
    <div className="main-container">
      <Kanban />
      {/* <CreateCard /> */}
    </div>
  );
};

export default Main;
