import React, { useEffect, useState } from "react";

import TaskExcerpt from "./TaskExcerpt";

export default function TasksList({ tasks, message, keyword, status }) {
  let isDelete = message.includes("Deleted");
  const [filterTasks, setFilterTasks] = useState(tasks);
  useEffect(() => {
    if (tasks) {
      if (status !== "")
        setFilterTasks(
          tasks.filter(
            (t) =>
              t.name.toLowerCase().includes(keyword.toLowerCase()) &&
              t.status === status
          )
        );
      else
        setFilterTasks(
          tasks.filter((t) =>
            t.name.toLowerCase().includes(keyword.toLowerCase())
          )
        );
    }
  }, [keyword, tasks, status]);
  if (!filterTasks) return <p>No Task for Today</p>;

  return (
    <>
      <h4 className="bg-light p-2 border-top border-bottom">{message}</h4>
      <h5 className="bg-light p-2 border-top border-bottom">
        {filterTasks.length} {filterTasks.length > 1 ? "Tasks" : "Task"}
      </h5>
      <ul className="list-group list-group-light ">
        {filterTasks &&
          filterTasks.map((t) => (
            <TaskExcerpt key={t.id} task={t} isDelete={isDelete} />
          ))}
      </ul>
    </>
  );
}
