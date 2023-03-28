import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTaskByUserIdQuery } from "../features/api/apiSlice";
import Search from "./shared/Search";
import TasksList from "./TasksList";

function TaskOfUsers() {
  const { id } = useParams();
  const message = "Today's Tasks";
  const [keyword, setKeyWord] = useState("");
  const [status, setStatus] = useState("");
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useGetTaskByUserIdQuery(id);

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
    <>
      <Search search={search} status={handleStatusFilter} />
      {content}
    </>
  );
}

export default TaskOfUsers;
