import React from "react";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex">
              <div className="badge badge-primary">Count</div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
