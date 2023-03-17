import React, { useState } from "react";
import { useGetDeletedTasksQuery } from "../features/api/apiSlice";
import Search from "./shared/Search";
import TasksList from "./TasksList";

function DeletedTasks() {
  const message = "Deleted Tasks";
  const [keyword, setKeyWord] = useState("");
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetDeletedTasksQuery("getDeletedTasks");

  const search = (e) => {
    setKeyWord(e.target.value);
  };

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error.error}</p>;
  else
    content = (
      <TasksList
        tasks={tasks}
        message={message}
        keyword={keyword}
        status={""}
      />
    );
  return (
    <div>
      <Search search={search} isDelete  />
      <div>{content}</div>
    </div>
  );
}

export default DeletedTasks;
