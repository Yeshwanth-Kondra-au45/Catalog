import React, { useState } from "react";
import { Analysis, ChartCom, Settings, Statistics, Summary } from "../../Pages";
import Tabs from "../Tabs/Tabs.jsx";
import { Header } from "./Header.jsx";
import "./Layout.css";

export const Layout = () => {
  const [tabs, setTabs] = useState([
    {
      title: "Summary",
      component: <Summary />,
      active: true,
    },

    {
      title: "Chart",
      component: <ChartCom />,
      active: false,
    },
    {
      title: "Statistics",
      component: <Statistics />,
      active: false,
    },
    {
      title: "Analysis",
      component: <Analysis />,
      active: false,
    },
    {
      title: "Settings",
      component: <Settings />,
      active: false,
    },
  ]);

  const onTabClick = (index) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab, i) =>
        i === index ? { ...tab, active: true } : { ...tab, active: false }
      )
    );
  };
  return (
    <main className="layout-container">
      <Header />
      <Tabs components={tabs} onTabClick={onTabClick} />
    </main>
  );
};
