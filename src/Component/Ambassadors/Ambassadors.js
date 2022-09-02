import React from "react";
import "./Ambassadors.css";
import img from "./img/Group 226.png";
import img2 from "./img/Group 227.png";
function Ambassadors() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div className="Ambassadors-title">
              <h3>
                The Edutainment <l style={{ color: "#FE9610" }}>Ambassadors</l>{" "}
              </h3>
              <span>Our Fantastic Team</span>
            </div>{" "}
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="person-one">
              <img src={img} />
              <h4 className="person-name">Mohannad AlSaif </h4>
              <h5 className="person-employ"> The Problem Solver </h5>
              <p className="person-desc">
                Mohannad is a highly experienced mechanical engineer, project
                manager and Riyadh native who has a passion for solving all
                sorts of problems. One of his most important tools is his own
                creativity.
              </p>
            </div>{" "}
          </div>
          <div class="col-sm-12 col-xl-6 col-md-12 col-lg-6 col-12">
            <div className="person-one">
              <img src={img2} />
              <h4 className="person-name">Mohannad AlSaif </h4>
              <h5 className="person-employ"> The Problem Solver </h5>
              <p className="person-desc">
                Mohannad is a highly experienced mechanical engineer, project
                manager and Riyadh native who has a passion for solving all
                sorts of problems. One of his most important tools is his own
                creativity.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ambassadors;
