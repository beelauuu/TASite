import React, { useEffect } from "react";
import "../style/App.css";
import SwitchImage from "./SwitchImage";
import TypingEffect from "./TypingEffect";
import { useKonami } from "react-konami-code";

function SideBar({ isNightMode, toggleMode }) {
  useKonami(() => {
    alert("You found the easter egg! Good job :) -Brian");
  });
  useEffect(() => {
    if (isNightMode) {
      document.documentElement.style.backgroundColor = "#232b2b";
    } else {
      document.documentElement.style.backgroundColor = "#F6EEE5";
    }
  }, [isNightMode]);

  return (
    <div
      className={`col-lg-4 sidebar ${isNightMode ? "night-mode" : "day-mode"}`}
    >
      <div className="text-center">
        <SwitchImage />
        <h3><TypingEffect text="Brian Lau"/></h3>
        <h6 className="mb-1">CMSC132 Lead TA (Summer 2023)</h6>
        <p className="mb-1">blau1[at]umd[dot]edu</p>
        <a href="https://www.cs.umd.edu/class/summer2023/cmsc132/">
          Class Website
        </a>
        <br />
        <a href="google.com">Feedback</a>
        <p className="mb-0">
          <b className="bold-text">Discussion:</b> T,Th 12:30-1:20pm @{" "}
          <b className="bold-text">CSI 3130</b>
        </p>
        <p>
          <b className="bold-text">OH:</b> TBD @{" "}
          <b className="bold-text">TBD</b>
        </p>
        <label className="toggle-switch">
          <input type="checkbox" checked={isNightMode} onChange={toggleMode} />
          <span className="slider round">
            <span className="toggle-icon">{isNightMode ? "🌙" : "☀️"}</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default SideBar;
