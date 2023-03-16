import React from "react";
import { useGetDeletedTasksQuery } from "../features/api/apiSlice";
import TasksList from "./TasksList";
import AddTaskForm from "./AddTaskForm";

function DeletedTasks() {
  const message = "Deleted Tasks";
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetDeletedTasksQuery("getDeletedTasks");
  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error}</p>;
  else content = <TasksList tasks={tasks} message={message} />;
  return (
    <div>
      <div>{content}</div>;
    </div>
  );
}

export default DeletedTasks;
