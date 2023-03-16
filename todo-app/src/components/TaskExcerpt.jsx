import React from "react";
import { Row, Col } from "react-bootstrap";
import { useUpdateTaskMutation } from "../features/api/apiSlice";
import {
  CANCELED,
  COMPLETED,
  CREATED,
  DELETED,
  RESTORED,
} from "../features/api/TaskStatusTypes";
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
            <span
              className={
                task.status === CREATED
                  ? "badge bg-secondary"
                  : task.status === CANCELED
                  ? "badge bg-warning"
                  : task.status === COMPLETED
                  ? "badge bg-success"
                  : task.status === RESTORED
                  ? "badge bg-info"
                  : "badge bg-danger"
              }
            >
              {task.status}
            </span>
          )}
        </Col>
        <Col>
          {!isDelete ? (
            <>
              <button
                type="button"
                className="btn btn-success mx-2"
                onClick={() => handleStatusChange(COMPLETED)}
              >
                Completed
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleStatusChange(CANCELED)}
              >
                Canceled
              </button>
              <button
                type="button"
                className="btn btn-danger mx-2"
                onClick={() => handleStatusChange(DELETED)}
              >
                Delete
              </button>
            </>
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
