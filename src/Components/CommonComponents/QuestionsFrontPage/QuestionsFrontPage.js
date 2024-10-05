import React from "react";
import "./QuestionsFrontPage.css";
function QuestionsFrontPage({ startPage }) {
  function startP(params) {
    startPage(false);
  }
  return (
    <div className="questionsFrontPage-main">
      <div className="questionsFrontPage-main-content">
        <button className="questionsFrontPage-main-content-btn" onClick={startP}>Start</button>
      </div>
    </div>
  );
}

export default QuestionsFrontPage;
