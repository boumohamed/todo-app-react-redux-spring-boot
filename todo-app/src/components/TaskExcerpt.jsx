import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUpdateTaskMutation } from "../features/api/apiSlice";
import { RESTORED } from "../features/api/TaskStatusTypes";
import DisplayStatus from "./shared/DisplayStatus";

import StatusButtons from "./shared/StatusButtons";
import TimeAgo from "./shared/TimeAgo";

function TaskExcerpt({ task, isDelete }) {
  const [updateTask, { isLoading }] = useUpdateTaskMutation();
  //console.log(task)
  const handleStatusChange = (status) => {
    updateTask({ ...task, status });
  };
  return (
    <li className="list-group-item ">
      <Row>
        <Col sm={2}>
          <Link className="btn btn-outline-secondary" to={`/${task.id}`}>
            <i className="fa-solid fa-info"></i>
          </Link>
        </Col>
        <Col sm={4}>
          <div className="fw-bold">{task.name}</div>
          <TimeAgo timestamp={task.date} />
        </Col>
        <Col sm={2}>
          {isLoading ? (
            <span className="badge bg-info">Changing Status...</span>
          ) : (
            <DisplayStatus status={task.status} />
          )}
        </Col>
        <Col sm={4}>
          {!isDelete ? (
            <StatusButtons handleStatusChange={handleStatusChange} />
          ) : (
            <button
              onClick={() => handleStatusChange(RESTORED)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Restore
            </button>
          )}
        </Col>
      </Row>
    </li>
  );
}

export default TaskExcerpt;

{
  /*
 <button
              onClick={() => handleStatusChange(RESTORED)}
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Restore
            </button> */
}
