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
    setName("");
    setDesc("");
  };
  return (
    <div>
      <form onSubmit={hanadleSubmit}>
        <div>
          <select
            name="country"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <UsersOptions />
          </select>
        </div>

        <div>
          <label for="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset p-2 my-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="desc" className="sr-only">
            Description
          </label>
          <textarea
            id="desc"
            type="text"
            required
            className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset p-2 my-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:-rotate-3 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Task
        </button>
      </form>
      {isLoading ? <p className="text-center text-info">Adding Task...</p> : ""}
      {isError ? <p className="text-center text-danger">{error.error}</p> : ""}
    </div>
  );
}

export default AddTaskForm;
