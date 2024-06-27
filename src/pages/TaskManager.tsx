import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  addTask,
  removeTask,
  toggleTaskCompletion,
} from "../slices/tasks/tasksSlice";

const TaskManager: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask(taskTitle));
      setTaskTitle("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg h-[calc(100vh-75px)]">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Task Manager
      </h1>
      <div className="flex flex-row mb-4">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="flex-grow p-2 border border-indigo-500 rounded focus:outline-none focus:border-indigo-700"
          placeholder="Enter task"
        />
        <button
          onClick={handleAddTask}
          className="ml-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="list-none">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskCompletion(task.id))}
              className="mr-2"
            />

            {/* Task Text */}
            <span
              className={`text-gray-700 ${
                task.completed ? "line-through decoration-indigo-500" : ""
              }`}
            >
              {task.title}
            </span>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="ml-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
