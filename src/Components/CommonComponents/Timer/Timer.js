// SimpleTimer.js
import React, { useState, useEffect } from "react";

const Timer = ({ id }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    resetTimer();
  }, [id]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    // setIsActive(false);
    setSeconds(0);
  };

  return (
    <div>
      {/* <span>{Math.floor(seconds / 3600).toString().padStart(2, '0')}:</span> */}
      <span>
        {Math.floor((seconds % 3600) / 60)
          .toString()
          .padStart(2, "0")}
        :
      </span>
      <span>{(seconds % 60).toString().padStart(2, "0")}</span>
      {/* <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
};

export default Timer;
