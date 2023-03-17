import React, { useState } from "react";
import { useGetTasksQuery } from "../features/api/apiSlice";
import AddTaskForm from "./AddTaskForm";
import Search from "./shared/Search";

import TasksList from "./TasksList";

function Home() {
  const message = "Today's Tasks";
  const [keyword, setKeyWord] = useState("");
  const [status, setStatus] = useState("");

  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

  const search = (e) => {
    setKeyWord(e.target.value);
  };
  const handleStatusFilter = (getStatus) => {
    setStatus(getStatus);
    //console.log(getStatus);
  };

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p className="text-danger">{error.error}</p>;
  else
    content = (
      <TasksList
        tasks={tasks}
        message={message}
        keyword={keyword}
        status={status}
      />
    );

  return (
    <div>
      <AddTaskForm />
      <Search search={search} status={handleStatusFilter} />

      <div>{content}</div>
    </div>
  );
}

export default Home;
