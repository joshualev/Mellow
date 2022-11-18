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
  return (
    <div className="top-navbar-container">
      <div className="logo-container">
        <img src={Logo} />
        <h4>Mellow</h4>
      </div>

      <div className="nav-link-container">
        <div>
          <BsViewStacked className="navlink-logo" />
          <span>List</span>
        </div>
        <div>
          <BsGrid1X2 className="navlink-logo" />
          <span>Board</span>
        </div>

        <div>
          <BsCalendar className="navlink-logo" />
          <span>Calendar</span>
        </div>
      </div>

      <div className="search-container">
        <div className="search-box">
          <BsSearch className="search-icon" />
          <span>Search</span>
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
