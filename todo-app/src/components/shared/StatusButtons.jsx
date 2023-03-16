import React from "react";
import {
  DELETED,
  CANCELED,
  COMPLETED,
} from "../../features/api/TaskStatusTypes";

function StatusButtons({ handleStatusChange }) {
  return (
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
  );
}

export default StatusButtons;
