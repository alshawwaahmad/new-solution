import React from 'react'
import "./Courses.css";
import img from "./img/1.png";
import img2 from "./img/2.png";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

function Courses() {
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col-12">
    <h2 className="cours-title">Courses</h2>
      <span className='cours-title'>Now More About Us</span>    </div>
  </div>

<div className='course-btn'></div>
  <div class="row">
    <div class="col-sm-6 col-xl-1 col-lg-4 col-md-4 col-12">
    <button className="All">All</button>
    </div>
    <div class="col-sm-6 col-xl-3 col-lg-4 col-md-4 col-12">
    <button className="Coding">The Coding Knight</button>
    </div>
    <div class="col-sm-6 col-xl-3 col-lg-4 col-md-4 col-12">
    <button className="Digital">Digital literacy</button>
    </div>
    <div class="col-sm-6 col-xl-3 col-lg-4 col-md-4 col-12">
    <button className="Visual">Visual Programming</button>
    </div>
    <div class="col-sm-12 col-xl-2 col-lg-12 col-md-12 col-12">
    <div className="arrow-parent">
<AiOutlineArrowLeft className="arrow-left"/>
<AiOutlineArrowRight className="arrow-right"/>
</div>    </div>
</div>

<div class="row">
    <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course">
          <img src={img}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div>    </div>
    <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course">
          <img src={img2}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div>    </div>
    <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course">
          <img src={img}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div>    </div>
        <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course">
          <img src={img}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div>    </div>

        <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course"></div>
          <img src={img2}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div>   
        <div class="col-sm-12 col-md-6 col-xl-4 col-lg-6 col-12">
    <div className="course">
          <img src={img}  />
          <h3 className="course-content-title">Course Title</h3>
          <p className="price">15$</p>
          <p className="about-us">Now More About Us</p>
          <button className='join-btn'>Join Now !</button>
        </div> 
         </div>

       </div>
       
<div class="row">
    <div class="col-sm">
<button className='see-btn'>See All</button>    </div>
  </div>
</div>
</div>

  )
}

export default Courses