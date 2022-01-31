import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {

  const taskList = tasks.map((e) => (
    <Task key={e.text} text={e.text} category={e.category} deleteTask={deleteTask} />
  ))

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
