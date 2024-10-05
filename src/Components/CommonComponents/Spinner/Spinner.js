import React from "react";
import "./Spinner.css";
function Spinner({message}) {
  return (
    <div className="spinner-main">
      <div className="spinner-content">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{message && ""}</p>
      </div>
    </div>
  );
}

export default Spinner;
