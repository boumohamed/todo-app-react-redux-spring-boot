import React from "react";
import { Row, Col } from "react-bootstrap";
import { useUpdateTaskMutation } from "../features/api/apiSlice";
import { CANCELED, COMPLETED, CREATED } from "../features/api/TaskStatusTypes";
function TaskExcerpt({ task }) {
  const [updateTask, { isLoading }] = useUpdateTaskMutation();

  const handleStatusChange = (status) => {
    updateTask({ ...task, status });
    console.log(status);
  };
  return (
    <li className="list-group-item ">
      <Row>
        <Col>
          <div className="fw-bold">{task.name}</div>
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
                  : "badge bg-success"
              }
            >
              {task.status}
            </span>
          )}
        </Col>
        <Col>
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
        </Col>
      </Row>
    </li>
  );
}

export default TaskExcerpt;
