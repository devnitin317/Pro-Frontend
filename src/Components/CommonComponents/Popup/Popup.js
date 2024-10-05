import React, { useEffect, useState } from "react";
import "./Popup.css";
import greenTick from "../../../Images/greenTick-icon.png";
import crossIcon from "../../../Images/cross-icon.png";

function Popup({ message, duration,popType }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show the popup
    setVisible(true);

    // Set a timer to hide the popup after the specified duration
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    // Cleanup the timer on unmount or when duration changes
    return () => clearTimeout(timer);
  }, [duration]);
  return (
    <div className={`popup-main ${visible ? '' : 'hide'}`}>
      <div className="popup-content">
        <div className="popup-content-left">
          <img className="popup-content-img" src={greenTick} />
          <div className="popup-content-left-content">
            <p className="popup-content-left-content-p1">{popType}</p>
            <p className="popup-content-left-content-p2">{message}</p>
          </div>
        </div>
        <div className="popup-content-right">
          <img className="popup-content-img" src={crossIcon}/>
        </div>
      </div>
    </div>
  );
}

export default Popup;
