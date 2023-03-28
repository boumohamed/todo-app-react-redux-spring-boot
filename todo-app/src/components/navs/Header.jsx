import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="text-center text-primay ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <p className="-m-1.5 p-1.5">
            <span className="sr-only">DoneIt</span>
            <img
              className="h-8 w-auto"
              src="https://s3.eu-central-1.amazonaws.com/stagiaires.ma/candidates/pictures/2022/07/x600/146197_mohamed-bouzri.jpeg?v=1657133294"
              alt=""
            />
          </p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          ></button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            aria-current="page"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/deleted"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Deleted Tasks
          </Link>
          <Link
            to="/users"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Users
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
