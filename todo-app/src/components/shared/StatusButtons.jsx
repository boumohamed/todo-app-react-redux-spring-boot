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
        onClick={() => handleStatusChange(COMPLETED)}
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 hover:rotate-2 focus:ring-4 focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Completed
      </button>
      <button
        onClick={() => handleStatusChange(CANCELED)}
        type="button"
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 hover:rotate-2 focus:ring-yellow-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
      >
        Canceled
      </button>
      <button
        onClick={() => handleStatusChange(DELETED)}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 hover:rotate-2 focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Deleted
      </button>

      {/* 
      <button
        onClick={() => handleStatusChange(COMPLETED)}
        type="button"
        className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        Completed
      </button>
      <button
        onClick={() => handleStatusChange(DELETED)}
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        Deleted
      </button>
      <button
        onClick={() => handleStatusChange(CANCELED)}
        type="button"
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
      >
        Canceled
      </button>
      <button
        type="button"
        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Purple
      </button>
      <button
        type="button"
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Alternative
      </button>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Dark
      </button>
       <button
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Dark
      </button>
      <button
        type="button"
        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      >
        Purple
      </button>
      <button
        type="button"
        lassName="btn btn-success mx-2"
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
  */}
    </>
  );
}

export default StatusButtons;
