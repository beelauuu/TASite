import React from 'react';
import '../style/App.css';
import TypingEffect from'./TypingEffect';

function Content({ isNightMode }) {
  const items = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    // Container for the main content (discussion slides and code)
    <div className={`col-lg-8 content ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      {/* Typing Effect for Title */}
      <h1 className={`mb-3 text-center ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}><TypingEffect text="Weekly Materials"/></h1>
      {/* Container for my discussion stuff (points to nothing for now) */}
      <div className="container text-center">
        {/* Starting grid for every discussion */}
          <div className="wrapper-grid">
            {/* Map from discussion 1-30 (week 1-15) */}
            {items.map((i) => (
              <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`} key={i}>
                {/* In-line so buttons display after it */}
                <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                  Discussion {i}:
                </p>
                {/* Buttons for slides and code (color depending on the mode) */}
                <button
                  type="button"
                  style={{ marginLeft: '10px' }}
                  className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
                >
                  Slides
                </button>
                <button
                  type="button"
                  style={{ marginLeft: '10px' }}
                  className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
                >
                  Code
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Content;
