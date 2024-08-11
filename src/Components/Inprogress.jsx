import React from "react";
import Progress from "../assets/inprogress.svg?react";

const Inprogress = () => {
  return (
    <div className="flex" style={{ alignItems: "center" }}>
      <h1>InProgress</h1>
      <Progress />
    </div>
  );
};

export default Inprogress;
