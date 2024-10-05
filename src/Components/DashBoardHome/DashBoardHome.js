import axios from "axios";
import React, { useState } from "react";
import "./DashBoardHome.css";
import CircularProgressBar from "../CommonComponents/CircularProgressBar/CircularProgressBar";

function DashBoardHome({userData}) {
  // const [percentage, setPercentage] = useState(20);

  return (
    <div className="dashBoardHome-main">
      <div className="dashBoardHome-main-content">
        <div className="dashBoardHome-main-content-top">
          <div className="dashBoardHome-main-content-top-ele">
            <div className="dashBoardHome-main-content-top-ele-content">
              <div className="dashBoardHome-main-content-top-ele-heading">
                Reading
              </div>
              <div className="dashBoardHome-main-content-top-ele-score">
                Previous Score: {userData.reading || 0}
              </div>
            </div>
          </div>
          <div className="dashBoardHome-main-content-top-ele">
            <div className="dashBoardHome-main-content-top-ele-content">
              <div className="dashBoardHome-main-content-top-ele-heading">
                Writing
              </div>
              <div className="dashBoardHome-main-content-top-ele-score">
                Previous Score: {userData.writing || 0}
              </div>
            </div>
          </div>
          <div className="dashBoardHome-main-content-top-ele">
            <div className="dashBoardHome-main-content-top-ele-content">
              <div className="dashBoardHome-main-content-top-ele-heading">
                Listening
              </div>
              <div className="dashBoardHome-main-content-top-ele-score">
                Previous Score: {userData.listening || 0}
              </div>
            </div>
          </div>
          <div className="dashBoardHome-main-content-top-ele">
            <div className="dashBoardHome-main-content-top-ele-content">
              <div className="dashBoardHome-main-content-top-ele-heading">
                Speaking
              </div>
              <div className="dashBoardHome-main-content-top-ele-score">
                Previous Score: {userData.speaking || 0}
              </div>
            </div>
          </div>
        </div>
        <div className="dashBoardHome-main-content-middle">
          <div>
            <CircularProgressBar percentage={userData.overAll || 10} circleWidth={230} />
          </div>
          <div className="dashBoardHome-main-content-middle-daysPracticed">
            <div className="dashBoardHome-main-content-middle-daysPracticed-content">
              <p className="dashBoardHome-main-content-middle-daysPracticed-content-p">Days Practiced</p>
              <span className="dashBoardHome-main-content-middle-daysPracticed-content-span">{userData.daysPracticed || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHome;
