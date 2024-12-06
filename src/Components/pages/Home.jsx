import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteUsers } from "../reduxtoolkit/uselist";

function Home() {
  const get = useSelector((state) => state.getuserlist);
  const usedeletedispatch = useDispatch();

  const deleteButton = (id) => {
    usedeletedispatch(deleteUsers({ id: id }));
  };
  return (
    <>
      <div className="container py-3">
        <div className="btn btn-success">
          <Link to="/create" className="text-dark boarder-none">
            create +
          </Link>
        </div>
        <div className="table table-responsive">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {get.map((item) => (
                <>
                  <tr className="text-center">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <div className="btn btn-success mx-2">
                        <NavLink to={`/edit/${item.id}`}>Edit</NavLink>
                      </div>
                      <div
                        className="btn btn-danger"
                        onClick={() => deleteButton(item.id)}
                      >
                        Delete
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
