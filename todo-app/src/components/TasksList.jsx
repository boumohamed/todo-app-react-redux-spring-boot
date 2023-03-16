import React from "react";
import TaskExcerpt from "./TaskExcerpt";

export default function TasksList({ tasks }) {
  if (!tasks) return <p>No Task for Today</p>;

  return (
    <>
      <h4 className="bg-light p-2 border-top border-bottom">Today's Tasks</h4>
      <ul className="list-group list-group-light ">
        {tasks && tasks.map((t) => <TaskExcerpt key={t.id} task={t} />)}
      </ul>
    </>
  );
}
