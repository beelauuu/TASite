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
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSix.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>
          {/* Discussion 7*/}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 7:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/22024')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSeven.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

          {/* Discussion 8*/}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 8:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/22224')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/Quiz 2_removed.pdf')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

          {/* Discussion 9*/}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 9:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/22724')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionNine.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>
          
          {/* Discussion 10 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 10:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/22924')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTen.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

          {/* Discussion 11 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 11:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/30524')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div>

          {/* Discussion 12 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 12:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/30724')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwelve.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

           {/* Discussion 13 */}
           <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 13:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/31224')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThirteenAndFourteen.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

          {/* Discussion 14 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 14:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/31424')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionThirteenAndFourteen.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

          {/* Discussion 15 */}
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 15:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/32624')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionFifteen.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Code
            </button>
          </div>

            {/* Discussion 16*/}
            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 16:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/32824')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

            {/* Discussion 17 */}
            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 17:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/40224')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
              <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionSeventeen.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
              Code
              </button>
            </div>

            {/* Discussion 18*/}
            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 18:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/40424')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

              {/* Discussion 19*/}
              <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 19:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/40924')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 20:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/41124')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div> 

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 21:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/41624')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div> 

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 22:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/41824')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div> 

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 23:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/42324')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
              <button
              type="button"
              onClick={() => handleButtonClick('https://github.com/beelauuu/TASite/raw/main/public/discussion/DiscussionTwentyThree.zip')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
              Code
              </button>
            </div> 

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 24:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/42524')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div> 

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 25:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/43024')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 26:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/50224')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 27:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/50724')}
                style={{ marginLeft: '10px' }}
                className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
              >
                Slides
              </button>
            </div>

            <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
                Discussion 28:
              </p>
              <button
                type="button"
                onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/50924')}
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
