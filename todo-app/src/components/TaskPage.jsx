import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from "../features/api/apiSlice";
import StatusButtons from "./shared/StatusButtons";

function TaskPage() {
  const [updateTask] = useUpdateTaskMutation();
  const handleStatusChange = (status) => {
    updateTask({ ...task, status });
  };
  const { id } = useParams();
  const { data: task, isLoading, isError, error } = useGetTaskByIdQuery(id);
  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p className="text-danger">{error}</p>;
  else
    content = (
      <div className="card shadow-2xl h-full justify-center font-serif ">
        <div className="card-body">
          <h5 className="card-title">
            {task.name} is {task.status}
          </h5>
          <p className="card-text">{task.desc}</p>
          <p className="card-text">
            {format(new Date(task.date), "MM/dd/yyyy hh:mm:ss ")}
          </p>
          <StatusButtons handleStatusChange={handleStatusChange} />
        </div>
      </div>
    );
  return <> {content} </>;
}

export default TaskPage;
