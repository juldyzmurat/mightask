import React, { useState } from "react";
import PinnedSubheaderList from "../TaskVisComponents/listscroller";
import PlusButton from "../TaskVisComponents/PlusButton";
import TaskForm from "../TaskVisComponents/TaskForm";
import "../../Styles/TaskForm.css";

const ListView = ({ data }) => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const tasks = data;

  const handleAddTaskClick = () => {
    setShowTaskForm(true);
  };

  const handleCloseTaskForm = () => {
    setShowTaskForm(false);
  };

  return (
    <div className="ListView">
      <div style={{ height: "500px" }}>
        {!showTaskForm && <PinnedSubheaderList data={tasks} />}
      </div>
      <div>
        <PlusButton onClick={handleAddTaskClick} />
        {showTaskForm && (
          <div className="task-form-overlay" style={{ zIndex: 1000 }}>
            <TaskForm onClose={handleCloseTaskForm} editoradd="Add" />
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ListView;
