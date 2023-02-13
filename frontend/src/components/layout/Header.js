import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  // Header of the page
  return (
    <header>
      <div className={classes.header}>
        {/* -------------Home icon---------------- */}
        <ul className={classes.ul}>
          <li>
            <Link to="/" className={classes.a}>
              <h2>HOME</h2>
            </Link>
          </li>
          <li>
            <h2>|</h2>
          </li>
          <li>
            {" "}
            <Link to="/ticket" className={classes.a}>
              <h2>Add Ticket</h2>
            </Link>
          </li>
          <li>
            <h2>|</h2>
          </li>
          <li>
            <Link to="/view-ticket" className={classes.a}>
              <h2>View Ticket</h2>
            </Link>
          </li>
          <li>
            <h2>|</h2>
          </li>
          <li>
            <Link to="/finish-ticket" className={classes.a}>
              <h2>Finish Ticket</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
