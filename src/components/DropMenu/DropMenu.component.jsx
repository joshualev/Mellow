import { useState } from "react";
import "./DropMenu.styles.scss";
import { BsThreeDots } from "react-icons/bs";

const DropMenu = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const handleOpenOptions = () =>
    openOptions ? setOpenOptions(false) : setOpenOptions(true);
  return (
    <div
      className={`${
        openOptions ? "drop-menu-container open" : "drop-menu-container"
      }`}
    >
      <BsThreeDots className="option-button" onClick={handleOpenOptions} />
      <div className="menu-items-container">
        <div className="menu-item">
          <h5>Update</h5>
        </div>
        <div className="menu-item">
          <h5>Remove</h5>
        </div>
      </div>
    </div>
  );
};
export default DropMenu;
