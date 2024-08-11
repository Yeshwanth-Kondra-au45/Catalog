import React from "react";
import "./Tabs.css";
const Tabs = ({ components, onTabClick }) => {
  return (
    <>
      <div className="tabs-container flex">
        {components.map((item, index) => {
          return (
            <div
              key={`${index}_${item.title}`}
              className="tab"
              onClick={() => onTabClick(index)}
            >
              <div className={item.active ? "tab-title" : ""}>{item.title}</div>
            </div>
          );
        })}
      </div>
      <div className="border"></div>
      <div>
        {components.map((item, index) => {
          return item.active && item.component;
        })}
      </div>
    </>
  );
};

export default Tabs;
