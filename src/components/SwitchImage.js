import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import '../style/App.css';

const SwitchImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="image-container">
      {showConfetti && (
        <Confetti
          width={450}  // Adjust the values as needed
          height={450} // Adjust the values as needed
        />
      )}
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
