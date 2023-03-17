import React from "react";
import {
  CANCELED,
  COMPLETED,
  CREATED,
  DELETED,
  RESTORED,
} from "../../features/api/TaskStatusTypes";

function DisplayStatus({ status }) {
  return (
    <span
      className={
        status === CREATED
          ? "badge bg-secondary"
          : status === CANCELED
          ? "badge bg-warning"
          : status === COMPLETED
          ? "badge bg-success"
          : status === RESTORED
          ? "badge bg-info"
          : status === DELETED
          ? "badge bg-danger"
          : "badge bg-primary"
      }
    >
      {status}
    </span>
  );
}

export default DisplayStatus;
