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
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => handleStatusChange(RESTORED)}
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
