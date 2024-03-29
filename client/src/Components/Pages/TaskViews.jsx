import React, { useState, useEffect } from "react";
import ListView from "../TaskViews/ListView";
import BoardView from "../TaskViews/BoardView";
import { GoogleData } from "../Login/LoginAPI";

const TaskViews = () => {
  const [activeTab, setActiveTab] = useState("ListView");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("ListView");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("BoardView");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        let userEmail = localStorage.getItem("email");
        const request = "http://localhost:5200/tasks/".concat(userEmail);
        const response = await fetch(request);

        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the response body as JSON
        const jsonData = await response.json();
        // Update the state with the fetched data
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div className="TaskViews">
      <ul className="nav">
        <li
          className={activeTab === "ListView" ? "active" : ""}
          onClick={handleTab1}
        >
          ListView
        </li>
        <li
          className={activeTab === "BoardView" ? "active" : ""}
          onClick={handleTab2}
        >
          BoardView
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "ListView" ? (
          <ListView data={data} />
        ) : (
          <BoardView tasks={data} />
        )}
      </div>
    </div>
  );
};

export default TaskViews;
