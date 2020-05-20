import React, { useState } from "react";
import "../../style/menu.scss";
import { Link, useHistory } from "react-router-dom";
import { deleteSession } from "../../reducers/actions/index";
import { useSelector, useDispatch, connect } from "react-redux";

function Menu() {
  const [menuFlag, setMenuFlag] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const openMenu = () => {
    setMenuFlag(!menuFlag);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(deleteSession());
    history.push("/");
  };
  return (
    <div className="menu-main">
      <button className="menu-button" onClick={openMenu}>
        MENU
      </button>

      <div className={menuFlag ? "menu-open" : "menu-hidden"}>
        <button className="menu-button-x" onClick={openMenu}>
          X
        </button>
        <ul className="menu-list">
          <li className="menu-list-item">
            <Link to="/dashboard" onClick={openMenu} className="menu-list-link">
              Home
            </Link>
          </li>
          <li className="menu-list-item">
            <Link
              to="/displayhours"
              onClick={openMenu}
              className="menu-list-link"
            >
              Display Hours
            </Link>
          </li>
          <li className="menu-list-item">
            <Link
              to="/inserthours"
              onClick={openMenu}
              className="menu-list-link"
            >
              Insert Hours
            </Link>
          </li>
          <li className="menu-list-item">
            <Link to="/myhours" onClick={openMenu} className="menu-list-link">
              Edit Hours
            </Link>
          </li>
          <li className="menu-list-item">
            <Link to="/upload" onClick={openMenu} className="menu-list-link">
              Upload Document
            </Link>
          </li>
          <li className="menu-list-item">
            <Link
              to="/display-images"
              onClick={openMenu}
              className="menu-list-link"
            >
              Display Your Documents
            </Link>
          </li>
        </ul>

        <button
          data-testid="test-logout"
          className="btn-logout-menu"
          onClick={handleLogOut}
        >
          {" "}
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Menu;
