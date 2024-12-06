import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../reduxtoolkit/uselist";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Createpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const get = useSelector((state) => state.getuserlist);

  const onsubmit = (e) => {
    e.preventDefault();
    // Dispatch the action with an object payload
    dispatch(addUsers({ id: get[get], name, email }));
    setName("");
    setEmail("");
    navigate("/");
    // navgate("/");
  };

  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Createpage;
