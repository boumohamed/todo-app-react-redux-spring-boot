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
        <ul class="list-group list-group-light">
          {users &&
            users.map((u) => (
              <li className="list-group-item px-3 border-0 text-primary">
                <Link className="nav-link" to={`${u.id}`}>
                  {u.name}
                </Link>
              </li>
            ))}
        </ul>
      </>
    );
  return <>{content}</>;
}

export default Users;
