import React, { useEffect } from "react";
import "../style/App.css";
import SwitchImage from "./SwitchImage";
import TypingEffect from "./TypingEffect";
import { useKonami } from "react-konami-code";

// Left side of the page
function SideBar({ isNightMode, toggleMode }) {
// Easter egg for the Konami Code hehe :) 
  useKonami(() => {
    alert("You found the easter egg! Good job :) -Brian");
  });

// Changes the background color outside of the containers depending on the mode 
// Has isNightMode as a dependency so it changes when the mode changes
  useEffect(() => {
    if (isNightMode) {
      document.documentElement.style.backgroundColor = "#232b2b";
    } else {
      document.documentElement.style.backgroundColor = "#F6EEE5";
    }
  }, [isNightMode]);

  return (
    // Div for the sidebar (left side of the page)
    <div className={`col-lg-4 sidebar ${isNightMode ? "night-mode" : "day-mode"}`}>
        {/* Centered container for the profile picture and info */}
        <div className="text-center">
        {/* SwitchImage here */}
        <SwitchImage />
        {/* TypingEffect for my name */}
        <h3><TypingEffect text="Brian Lau"/></h3>
        {/* Misc. information */}
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
        {/* Toggle for the night mode */}
        <label className="toggle-switch">
          {/* Basically just a glorified checkbox, on change toggle the box*/}
          <input type="checkbox" checked={isNightMode} onChange={toggleMode} />
          {/* The slider is the actual toggle */}
          <span className="slider round">
            {/* The span is the icon for the toggle */}
            <span className="toggle-icon">{isNightMode ? "🌙" : "☀️"}</span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default SideBar;
