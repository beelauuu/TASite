import React from 'react';
import '../style/App.css';
import './SwitchImage';

function Content({ isNightMode }) {
  const items = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className={`col-lg-8 content ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1 className={`mb-3 text-center ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>Weekly Materials</h1>
      <div className="container text-center">
        <div className="week-div">
          <div className="wrapper-grid">
            {items.map((i) => (
              <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`} key={i}>
                <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                  Discussion {i}:
                </p>
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
    </div>
  );
}

export default Content;
