import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, loop }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else {
          if (loop) {
            setIsDeleting(true);
          }
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [currentIndex, delay, isDeleting, loop, text]);

  return <span className=" italic font-extrabold md:text-2xl text-base">{displayText}</span>;
};

export default Typewriter;
