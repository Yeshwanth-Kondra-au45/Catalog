import React from "react";

const Tabs = ({ components, onTabClick }) => {
  return (
    <div className="flex">
      {components.map((item, index) => {
        return (
          <div key={`${index}_${item.title}`} onClick={() => onTabClick(index)}>
            <div>{item.title}</div>
            {item.active && item.component}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
