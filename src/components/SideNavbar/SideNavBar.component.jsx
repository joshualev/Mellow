import "./SideNavBar.styles.scss";
import {
  BsFillPlusSquareFill,
  BsMoon,
  BsSun,
  BsHouse,
  BsCheckSquare,
  BsTrophy,
  BsThreeDots,
  BsFillCircleFill,
} from "react-icons/bs";

import { MdOutlinePeople } from "react-icons/md";

const SideNavBar = () => {
  return (
    <div className="side-navbar-container">
      <div className="navigation-container">
        <div>
          <BsHouse className="nav-logo" />
          Home
        </div>
        <div>
          <BsCheckSquare className="nav-logo" />
          My Tasks
        </div>
        <div>
          <BsTrophy className="nav-logo" />
          Goals
        </div>
        <div>
          <MdOutlinePeople className="nav-logo" />
          Members
        </div>
      </div>

      <div className="workspace-container">
        <div className="workspace-title">
          <h5>Workspace</h5>
          <BsFillPlusSquareFill className="add-workspace-button" />
        </div>

        <div className="workspace-item-container">
          <BsFillCircleFill className="workspace-item-circle" />
          <h4>Website Design</h4>

          <BsThreeDots className="option-button" />
        </div>

        <div className="workspace-item-container">
          <BsFillCircleFill className="workspace-item-circle" />
          <h4>Mobile Design</h4>
        </div>
      </div>

      <div className="toggle-mode-container">
        <div className="dark-mode-container">
          <BsMoon className="dark-logo" />
          <span>Dark</span>
        </div>
        <div className="light-mode-container selected">
          <BsSun className="light-logo" />
          <span>Light</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
