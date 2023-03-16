import React from "react";
import { useGetTasksQuery } from "../features/api/apiSlice";
import AddTaskForm from "./AddTaskForm";
import TasksList from "./TasksList";

function Home() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetTasksQuery("getTasks");
  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error}</p>;
  else content = <TasksList tasks={tasks} />;

  return (
    <div>
      <AddTaskForm />
      <div>{content}</div>;
    </div>
  );
}

export default Home;
