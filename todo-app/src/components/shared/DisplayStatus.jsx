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
          ? "badge bg-secondary hover:-rotate-2 C text-xs"
          : status === CANCELED
          ? "badge bg-warning hover:-rotate-2 font-semibold text-xs"
          : status === COMPLETED
          ? "badge bg-success hover:-rotate-2 font-semibold text-xs"
          : status === RESTORED
          ? "badge bg-info hover:-rotate-2 font-semibold text-xs"
          : status === DELETED
          ? "badge bg-danger hover:-rotate-2 font-semibold text-xs"
          : "badge bg-primary hover:-rotate-2 font-semibold text-xs"
      }
    >
      {status}
    </span>
  );
}

export default DisplayStatus;
