import React, { useState } from "react";
import { useAddTaskMutation } from "../features/api/apiSlice";

function AddTaskForm() {
  const [addTask, { isLoading }] = useAddTaskMutation();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const hanadleSubmit = (e) => {
    e.preventDefault();
    addTask({ name, desc });
    //console.log("submitted", name, desc);
  };
  return (
    <div>
      <form onSubmit={hanadleSubmit}>
        <div className="form-outline mb-1">
          <input
            type="text"
            id="form1Example1"
            className="form-control"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-outline mb-1">
          <textarea
            id="form1Example2"
            className="form-control"
            placeholder="Task Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-success btn-block m-4">
          Add Task
        </button>
      </form>
      {isLoading ? <p className="text-center text-info">Adding Task...</p> : ""}
    </div>
  );
}

export default AddTaskForm;
