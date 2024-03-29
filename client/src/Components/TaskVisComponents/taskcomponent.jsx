import React, { useState, useEffect } from "react";
import { GoogleData } from "../Login/LoginAPI";

const TaskComponent = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const request = "http://localhost:5200/tasks/".concat(
          GoogleData.profileObj.email,
        );
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
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      <ul>
        {/* Map over the data and render each item */}
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskComponent;
