
import React, { useState } from "react";
import ListView from "../AllTabs/ListView";
import BoardView from "../AllTabs/BoardView";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Tab 1</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tab 2</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <ListView /> : <BoardView />}
      </div>
    </div>
  );
};


export default Tabs;

