import React from 'react'
import img from "./img/Group 222.png";
import './About.css'
function About() {
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="about-title">
          <h3>
            {" "}
            About <l style={{ color: "orange" }}>Us</l>
          </h3>
          <span>Know More</span>
        </div>    
        
        </div>
 
  </div>
</div>

<div class="container ">
  <div class="row">
    <div class="col-sm-12 col-xl-6 col-md-12 col-lg-6 col-12">
    <div className="about-content-left">
            {" "}
            <img src={img} width='110%' />
          </div>    </div>
    <div class="col-sm-12 col-xl-6 col-md-12 col-lg-6 col-12">
    <div className="about-contnet-rigth w-50">
            <h2>1</h2>
            <h3>
              We <l style={{ color: "#00BDED" }}>Engage</l>
            </h3>
            <p>
              In teaching, we engage students to participate, rather than
              sitting and watching
            </p>
          </div>    </div>
  
  </div>
</div>
</div>
  )
}

export default About