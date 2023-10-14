import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, loop }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // If not deleting, add a character
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else {
          // If the entire text is displayed and loop is enabled, start deleting
          if (loop) {
            setIsDeleting(true);
          }
        }
      } else {
        // If deleting, remove a character
        if (currentIndex >= 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // If the text is entirely deleted, stop deleting and reset the index
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentIndex, delay, isDeleting, loop, text]);

  return <span className=" italic font-extrabold text-2xl">{displayText}</span>;
};

export default Typewriter;
