import { useSelector, useDispatch } from "react-redux";
import { toggleView } from "../../features/view/viewSlice";

import "./TopNavBar.styles.scss";

import {
  BsCalendar,
  BsSearch,
  BsChatDots,
  BsBell,
  BsPersonCircle,
  BsViewStacked,
  BsGrid1X2,
} from "react-icons/bs";

import Logo from "../../assets/logo.svg";

const TopNavBar = () => {
  const { view } = useSelector((state) => state.view);
  const dispatch = useDispatch();

  return (
    <div className="top-navbar-container">
      <div className="logo-container">
        <img src={Logo} />
        <h4>Mellow</h4>
      </div>

      <div className="nav-link-container">
        <div
          className={view === "list" ? "nav-item nav__active" : "nav-item"}
          onClick={() => {
            dispatch(toggleView("list"));
          }}
        >
          <BsViewStacked className="navlink-logo" />
          <span>List</span>
        </div>
        <div
          className={view === "board" ? "nav-item nav__active" : "nav-item"}
          onClick={() => {
            dispatch(toggleView("board"));
          }}
        >
          <BsGrid1X2 className="navlink-logo" />
          <span>Board</span>
        </div>

        <div className="nav-item">
          <BsCalendar className="navlink-logo" />
          <span>Timeline</span>
        </div>
      </div>
      <div className="search-container">
        <div className="search-box">
          <BsSearch className="search-icon" />
          <input className="search-input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="social-container">
        <BsChatDots />
        <BsBell />
      </div>
      <div className="user-container">
        <BsPersonCircle className="user-bubble" />
      </div>
    </div>
  );
};

export default TopNavBar;
