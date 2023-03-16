import React from "react";
import { Row, Col } from "react-bootstrap";
import { useUpdateTaskMutation } from "../features/api/apiSlice";
import { RESTORED } from "../features/api/TaskStatusTypes";
import DisplayStatus from "./shared/DisplayStatus";

import StatusButtons from "./shared/StatusButtons";
import TimeAgo from "./shared/TimeAgo";

function TaskExcerpt({ task, isDelete }) {
  const [updateTask, { isLoading }] = useUpdateTaskMutation();

  const handleStatusChange = (status) => {
    updateTask({ ...task, status });
    //console.log(status);
  };
  return (
    <li className="list-group-item ">
      <Row>
        <Col>
          <div className="fw-bold">{task.name}</div>
          <TimeAgo timestamp={task.date} />
        </Col>
        <Col>
          {isLoading ? (
            <span className="badge bg-info">Changing Status...</span>
          ) : (
            <DisplayStatus status={task.status} />
          )}
        </Col>
        <Col>
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
