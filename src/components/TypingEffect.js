import { useEffect, useState } from "react";

// TypingEffect is a component that simulates a typing effect to gradually display the given text.
function TypingEffect({ text }) {
    // Declare state variables using the useState hook.
    const [typedText, setTypedText] = useState(""); // Stores the currently typed text.
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the index of the current character being typed.
  
    // Use the useEffect hook to control the typing effect.
    useEffect(() => {
      // Check if the current index is within the length of the text.
      if (currentIndex < text.length) {
        // Set a timeout to gradually add the next character to the typed text.
        const timeoutId = setTimeout(() => {
          setTypedText((prevText) => prevText + text[currentIndex]); // Append the next character to the typed text.
          setCurrentIndex((prevIndex) => prevIndex + 1); // Increment the current index.
        }, 100); // Delay between each character being typed.
  
        // Clean up the timeout when the component unmounts or when currentIndex or text changes.
        return () => {
          clearTimeout(timeoutId); // Clear the timeout to avoid memory leaks.
        };
      }
    }, [currentIndex, text]); // Dependencies that trigger the useEffect when changed.
  
    // Return the currently typed text.
    return typedText;
}

// Export the TypingEffect component as the default export of this module.
export default TypingEffect;
