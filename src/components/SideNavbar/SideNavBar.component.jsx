import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";

import DropMenu from "../DropMenu/DropMenu.component";

import { MdOutlinePeople } from "react-icons/md";
import {
  BsFillPlusSquareFill,
  BsMoon,
  BsSun,
  BsHouse,
  BsCheckSquare,
  BsTrophy,
  BsFillCircleFill,
} from "react-icons/bs";

import "./SideNavBar.styles.scss";

const SideNavBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

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
          <div className="drop-menu">
            <DropMenu />
          </div>
        </div>

        <div className="workspace-item-container">
          <BsFillCircleFill className="workspace-item-circle" />
          <h4>Mobile Design</h4>
        </div>
      </div>

      <div className="toggle-mode-container">
        <div
          onClick={(e) => {
            dispatch(toggleTheme("dark"));
          }}
          className={`${
            theme === "dark"
              ? "dark-mode-container selected"
              : "dark-mode-container"
          }`}
        >
          <BsMoon className="dark-logo" />
          <span>Dark</span>
        </div>
        <div
          onClick={(e) => {
            dispatch(toggleTheme("light"));
          }}
          className={`${
            theme === "light"
              ? "light-mode-container selected"
              : "light-mode-container"
          }`}
        >
          <BsSun className="light-logo" />
          <span>Light</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
