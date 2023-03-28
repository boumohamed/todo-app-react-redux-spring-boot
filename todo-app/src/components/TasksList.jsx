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
      <h4 className="bg-light p-2 border-top border-bottom font-semibold">
        {message}
      </h4>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4 my-2 shadow-2xl">
        <dt className="text-base leading-7 text-gray-600">
          {filterTasks.length > 1 ? "Tasks" : "Task"}
        </dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {filterTasks.length}
        </dd>
      </div>
      <ul className="list-group list-group-light ">
        {filterTasks &&
          filterTasks.map((t) => (
            <TaskExcerpt key={t.id} task={t} isDelete={isDelete} />
          ))}
      </ul>
    </>
  );
}
