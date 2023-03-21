import React, { useState } from "react";
import { useAddUserMutation } from "../../features/users/usersSlice";

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
    <div>
      <form onSubmit={hanadleSubmit}>
        <div className="form-outline mb-1">
          <input
            type="text"
            id="form1Example1"
            className="form-control"
            placeholder="User Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-outline mb-1">
          <textarea
            id="form1Example2"
            className="form-control"
            placeholder="User Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-success btn-block m-4">
          Add user
        </button>
      </form>
      {isLoading ? <p className="text-center text-info">Adding User...</p> : ""}
      {isError ? <p className="text-center text-danger">{error.error}</p> : ""}
      {isSuccess ? (
        <p className="text-center text-success">user Added successfuly ;)</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateUser;
