"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;       // ms entre letras
  startDelay?: number;  // ms antes de empezar
  style?: React.CSSProperties;
  className?: string;
}

export default function Typewriter({ text, delay = 35, startDelay = 0, style, className }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowCursor(true);
      const interval = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayed(text.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(interval);
          setDone(true);
          // cursor parpadea un momento y desaparece
          setTimeout(() => setShowCursor(false), 600);
        }
      }, delay);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, delay, startDelay]);

  return (
    <span style={style} className={className}>
      {displayed}
      {showCursor && !done && (
        <span style={{ display: "inline-block", width: "2px", height: "1em", background: "currentColor", marginLeft: "1px", verticalAlign: "text-bottom", animation: "blink 0.7s step-end infinite" }} />
      )}
      {showCursor && done && (
        <span style={{ display: "inline-block", width: "2px", height: "1em", background: "currentColor", marginLeft: "1px", verticalAlign: "text-bottom", opacity: 0, transition: "opacity 0.3s" }} />
      )}
    </span>
  );
}
