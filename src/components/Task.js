import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {" "}
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
};

export default Task;
