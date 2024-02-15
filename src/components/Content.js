import React from 'react';
import '../style/App.css';
import TypingEffect from './TypingEffect';

function Content({ isNightMode }) {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className={`col-lg-8 content ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1 className={`mb-3 text-center ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
        <TypingEffect text="Weekly Materials" />
      </h1>

      <div className="container text-center">
        <div className="wrapper-grid">
          {/* Discussion 1 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 1:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/13024')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div>
          {/* Discussion 2 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 2:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/20124')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwo.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>
          {/* Discussion 3 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 3:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/20624')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThree.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>
          {/* Discussion 4 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 4:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/20824')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div>
          {/* Discussion 5 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 5:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/21424')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionFive.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>
          {/* Discussion 6*/}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 6:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/21524')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
