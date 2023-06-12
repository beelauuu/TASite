import { useEffect, useState } from "react";

function TypingEffect({ text }) {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeoutId = setTimeout(() => {
          setTypedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100);
  
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }, [currentIndex, text]);
  
    return typedText;
  }

export default TypingEffect;