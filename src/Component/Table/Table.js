import React from "react";
import { FaRegBookmark, FaGraduationCap, FaTelegram } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import "./Table.css";
function Table() {
  return (
    <div className="table-bg">
      <div class="container  ">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
            <div className="courses">
              <AiFillBook className=" icon-book" />
              <h3>Courses</h3>
              <h4>+200</h4>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
            <div className="Students">
              <FaGraduationCap className="icon-Cap" style={{backgroundColor:'#FF9533'}}/>

              <h3>Students</h3>
              <h4>+200</h4>
            </div>{" "}
          </div>

          <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
            <div className="Countries">
              <FaTelegram className="icon-Telegram " />
              <h3>Countries</h3>
              <h4>+200</h4>
            </div>{" "}
          </div>

          <div class="row table-foot">
            <p style={{color:'#3D4354'}}>Trusted by 50+ Cpmpanies Worldwide</p>
          </div>

        </div>
      </div>
    </div>
  );
}



export default Table;
