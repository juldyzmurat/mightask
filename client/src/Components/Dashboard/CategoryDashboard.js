import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { GoogleData } from "../Login/LoginAPI";

const CategoryDashboard = () => {
  const [taskData, setData] = useState([]); //The full task data incase we need it

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskRequest = "http://localhost:5200/tasks/".concat(
          GoogleData.profileObj.email,
        );
        const taskResponse = await fetch(taskRequest);
        if (!taskResponse.ok) {
          throw new Error("Failed to fetch task data");
        }
        const taskData = await taskResponse.json();
        setData(taskData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const categoryCount = {};
  taskData.forEach((item) => {
    const categoryId = item.categoryid;
    console.log(item.categoryid);
    categoryCount[categoryId] = (categoryCount[categoryId] || 0) + 1;
  });

  console.log("cc",categoryCount);

  const newJson = Object.entries(categoryCount).map(([categoryId, count]) => ({
    categoryId,
    count,
    
  }));

  
    const pastelColors = ['#FFB6C1', '#FFD700', '#87CEEB', '#98FB98', '#FFA07A', '#DDA0DD'];
  
    const transformedJson = newJson.map((item, index) => ({
      name: `Category ${item.categoryId}`,
      count: item.count,
      color: pastelColors[index % pastelColors.length],
    }));

  

  return (
    <div className="container">
      <div className="chart-container">
        <PieChart
          width={500}
          height={500}
          style={{ backgroundColor: "#fffff" }}
        >
          <Pie
            data={transformedJson}
            dataKey="count"
            outerRadius={200}
            fill="black"
          >
            {transformedJson.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} tasks`} />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default CategoryDashboard;
