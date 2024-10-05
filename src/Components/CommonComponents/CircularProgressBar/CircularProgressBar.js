import React from "react";
import "./CircularProgressBar.css";
function CircularProgressBar({ percentage, circleWidth }) {
  const radius = 105;
  const dashArray = radius * Math.PI * 2;
  const dashOffSet = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2e9"></stop>
            <stop offset="50%" stop-color="#c471ed"></stop>
            <stop offset="100%" stop-color="#f64f59"></stop>
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-Background"
        ></circle>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-Progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffSet,
          }}
          transform={`rotate (-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <text
          x="50%"
          y="45%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text-num"
          fill="url(#gradient)"
        >
          {percentage}
        </text>
        <br/><text
          x="50%"
          y="65%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="url(#gradient)"
        >
          Previous Mock Score
        </text>

      </svg>
    </div>
  );
}

export default CircularProgressBar;
