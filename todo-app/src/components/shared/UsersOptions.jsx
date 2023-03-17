import React from "react";
import { useGetUsersQuery } from "../../features/users/usersSlice";

function UsersOptions() {
  const { data: users, isLoading, isError, error } = useGetUsersQuery();
  //console.log(users);
  let content;
  if (isLoading) content = <option>Loading...</option>;
  else if (isError)
    content = <option className="text-danger">{error.error}</option>;
  else {
    content = (
      <>
        <option value="0">user...</option>
        {users &&
          users.map((u) => (
            <option value={u.id} key={u.id}>
              {u.name}
            </option>
          ))}
      </>
    );
  }
  return <>{content}</>;
}

export default UsersOptions;
