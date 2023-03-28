import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../features/users/usersSlice";

function Users() {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();
  let content;

  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p className="text-danger"> {error.error} </p>;
  else
    content = (
      <>
        <div className="my-2">
          <Link
            to="add"
            className="group relative flex w-full justify-center rounded-md bg-emerald-600 py-2 px-3 text-sm font-semibold text-white hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Add user
          </Link>
        </div>
        <div className="bg-white py-2 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <p className="mt-2 text-lg leading-8 text-gray-600">Users List</p>
            </div>
            <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {users &&
                users.map((u) => (
                  <li className="list-group-item px-3 border-0 text-primary">
                    <UserExcerpt name={u.name} email={u.email} key={u.id} id={u.id} />
                  </li>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  return <>{content}</>;
}

function UserExcerpt({ name, email, id }) {
  return (
    <>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="relative flex items-center gap-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
            alt=""
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <span className="absolute inset-0"></span>
              {name}
            </p>
            <p className="text-gray-600">{email}</p>
            <Link
              to={`/users/${id}/tasks`}
              className="group relative flex w-full justify-center rounded-md bg-teal-600 py-2 px-3 text-sm font-semibold text-white hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Tasks List
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default Users;
