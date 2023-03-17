import React, { useState } from "react";
import { useAddTaskMutation } from "../features/api/apiSlice";
import UsersOptions from "./shared/UsersOptions";

function AddTaskForm() {
  const [addTask, { isLoading, isError, error }] = useAddTaskMutation();

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const hanadleSubmit = (e) => {
    e.preventDefault();
    if (userId !== "0") addTask({ name, desc, userid: userId });
    //console.log("submitted", name, desc, userId);
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
            onChange={(e) => {
              setName(e.target.value);
            }}
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
        <div className="form-outline mb-1">
          <select
            className="form-select"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            aria-label="Default select example"
          >
            <UsersOptions />
          </select>
        </div>
        <button type="submit" className="btn btn-outline-success btn-block m-4">
          Add Task
        </button>
      </form>
      {isLoading ? <p className="text-center text-info">Adding Task...</p> : ""}
      {isError ? <p className="text-center text-danger">{error.error}</p> : ""}
    </div>
  );
}

export default AddTaskForm;
