import React from "react";
import "./styles.css";
import {
  BsHouseFill,
  BsCartFill,
  BsAlignBottom,
  BsSafe2Fill,
  BsPersonFill,
} from "react-icons/bs";

const DashBoard = () => {
  return (
    <div className="body">
      <div className="menu-bar">
        <ul>
          <li>
            <a href="Home_Page.html">
              <BsHouseFill />
            </a>
          </li>
          <li>
            <a href="Shop%20Page.html">
              <BsCartFill />
            </a>
          </li>
          <li>
            <a href="Reel_Page.html">
              <BsAlignBottom />
            </a>
          </li>
          <li>
            <a href="Bank%20Page.html">
              <BsSafe2Fill />
            </a>
          </li>
          <li>
            <a href="DashBoard.html">
              <BsPersonFill />
            </a>
          </li>
        </ul>
      </div>
      {/* Add the rest of the HTML content here, wrapped inside the .body div */}
    </div>
  );
};

export default DashBoard;