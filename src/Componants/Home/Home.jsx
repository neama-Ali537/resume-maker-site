import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container home-page text-center">
        <div className="row ">
          <div className="col-md-12">
            <h3>Write your story with the ultimate resume builder</h3>
            <p className="text-muted">
              Only 2% of resumes win. Yours will be one of them. Let´s build you
              a resume that works.
            </p>

            <Link to={"templet-one"} className="text-decoration-none">
              <button className="btn btn-info mb-2">Make Your Resume</button>
            </Link>
          </div>
        </div>

        <div className="row d-flex justify-content-center align-items-center">
          <h2 className="text-muted p-2">See an example :</h2>
          <div className="col-md-6">
            <h5 className="text-muted">Online Resume Builder</h5>
            <h2 className="blue">
              It takes only 5 seconds to screen your resume. Write it well.
            </h2>
          </div>
          <div className="col-md-6  mt-5">
            <img className="w-50 text-center" src="/cv.png" alt="cv-templet" />
          </div>
        </div>
      </div>
    </>
  );
}
