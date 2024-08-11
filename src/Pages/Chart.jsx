import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import ExpandArrow from "../assets/expandArrow.svg?react";
import Circle from "../assets/circle.svg?react";

import "./index.css";
export const ChartCom = () => {
  const [isFullScreen, setIsFullscreen] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Sample Data",
            data: [64000, 64850.35, 64600, 64500, 64000, 63700, 63179.71],
            borderColor: "#4B40EE",
            backgroundColor: "rgba(78, 121, 167, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            backgroundColor: "#4B40EE",
            titleColor: "#fff",
            bodyColor: "#fff",
            borderColor: "#4B40EE",
            borderWidth: 1,
          },
        },
        maintainAspectRatio: isFullScreen,
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [isFullScreen]);

  return (
    <div style={{ height: "400px" }}>
      <div className="controller-bar flex">
        <div className="left-container flex">
          <div className="flex" onClick={() => setIsFullscreen(!isFullScreen)}>
            <ExpandArrow />
            <span>Full Screen</span>
          </div>
          <div className="flex">
            <Circle />
            <span>Compare</span>
          </div>
        </div>
        <div className="right-container navbar">
          <button className="nav-item">1d</button>
          <button className="nav-item">3d</button>
          <button className="nav-item active">1w</button>
          <button className="nav-item">1m</button>
          <button className="nav-item">6m</button>
          <button className="nav-item">1y</button>
          <button className="nav-item">max</button>
        </div>
        <div></div>
      </div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};
