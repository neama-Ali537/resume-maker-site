import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid mb-3 nav-color">
        <div className="row d-flex justify-content-md-between align-items-center">
          <div className="col-md-6">
            <div className=" d-flex justify-content-md-start justify-content-center align-items-center">
              <img className="logo" src="/logo.png" alt="logo" />
              <h2 className="m-0 text-light">Resume.Io</h2>
            </div>

          </div>
          
        </div>
      </div>
    </>
  );
}
