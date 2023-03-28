import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../../features/users/usersSlice";
import Modal from "./Modal";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addUser, { isLoading, isError, error, isSuccess }] =
    useAddUserMutation();

  const hanadleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email });
    setEmail("");
    setName("");
  };
  return (
    <>
      <Link
        to="/users"
        className="mt-3 inline-flex w-full justify-center rounded-md bg-white py-1 text-sm font-semibold text-green-900 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-green-50 sm:mt-0 sm:w-auto"
      >
        Back to user List
      </Link>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create new user
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={hanadleSubmit}
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 p-2 my-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label for="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset p-2 my-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading ? <p className="text-center text-info">Adding User...</p> : ""}
      {isError ? <p className="text-center text-danger">{error.error}</p> : ""}
      {isSuccess ? (
        <>
          {" "}
          {isSuccess ? (
            <Modal
              message={"User Created successfully"}
              callBack="/users"
              linkText="Back to user List"
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default CreateUser;
