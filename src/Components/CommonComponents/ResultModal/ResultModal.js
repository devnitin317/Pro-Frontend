import React from "react";
import "./ResultModal.css";
function ResultModal({ totalScore, outOf,closeFunc }) {
  return (
    <div className="resultModal-main">
      <div className="resultModal-content">
        <div className="resultModal-content-score">
            <p>You've got</p>
          {totalScore}/{outOf}
        </div>
        <div className="resultModal-content-button-div">
          <button onClick={closeFunc} className="resultModal-content-button">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ResultModal;
