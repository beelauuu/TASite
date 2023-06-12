import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../style/App.css';

const SwitchImage = () => {
// Two states (isHovered and showConfetti) are created and initialized to false
  const [isHovered, setIsHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

// useEffect is used to set a timeout for the confetti to show up (triggered by isHovered)
  useEffect(() => {
    let confettiTimeout;

    if (isHovered) {
      setShowConfetti(true);
    }

    confettiTimeout = setTimeout(() => {
      setShowConfetti(false);
    }, 3000); 

    return () => {
      clearTimeout(confettiTimeout);
    };
  }, [isHovered]);

// Two functions are created to handle the mouse enter and leave events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // The image is displayed and the confetti is displayed if showConfetti is true
    <div className="image-container">
      {showConfetti && (
        <Confetti
          width={450}  // Adjust the values as needed
          height={450} // Adjust the values as needed
        />
      )}
    {/* Profile picture is handled here for isHovered */}
      <img
        className="profile-image"
        src={isHovered ? 'taco.jpg' : 'professional.jpg'}
        alt="Selfie"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default SwitchImage;
