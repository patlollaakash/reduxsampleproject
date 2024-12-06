import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUsers } from "../reduxtoolkit/uselist";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const updatedispatch = useDispatch();
  const get = useSelector((state) => state.getuserlist);
  const exittinguser = get.filter((f) => f.id === id);
  const { name, email } = exittinguser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const onsubmit = (e) => {
    e.preventDefault();
    updatedispatch(updateUsers({ id: id, name: uname, email: uemail }));
    setName("");
    setEmail("");
    navigate("/");
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
            value={uname}
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
            value={uemail}
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

export default Update;
