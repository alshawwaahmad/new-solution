import React from 'react'
import { MdGpsFixed } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import './Mission.css'
import img from './img/Group 203.png'
function Mission() {
  return (
    <div >
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" style={{padding:0}}>
    <div className="Mission " >
          
          <div className='Mission-content'>
            <button className="mission-btn">
              <MdGpsFixed className="gps" />
            </button>
            <h3>Mission </h3>
            <p>
              To achieve our vision, we aim to make learning enjoyable by while
              providing a localized experience that is based on high-quality
              education focused on creativity, quality, and safety.{" "}
            </p>
          </div>
        </div>    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 "style={{padding:0}}>
    <div className="Vision" >
          <div className="Vision-contnent">
            <button className="Vision-btn">
              <AiOutlineEye className="eye" />{" "}
            </button>
            <h3>Vision </h3>
            <p>To be the leader in edutainment creation in the region. </p>
          </div>
        </div>    </div>
   
  </div>
    </div>
  )
}

export default Mission