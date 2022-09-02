import React from "react";
import "./Position.css";
import '../Table/Table.css'
import { SiPivotaltracker } from "react-icons/si";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { RiTestTubeLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
function Position() {
  return (
    <div>
      <div className="position">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h2 className="position-title">
                Our <l style={{ color: "#FE9610" }}> Value</l> Position
              </h2>{" "}
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-xl-6 col-lg-6 col-md-6 col-12">
              <p className="position-desc">
                This very extremely feature, can make learning activities more
                efficient
              </p>{" "}
            </div>
            <div class="col-sm-6 col-xl-6 col-lg-6 col-md-6 col-12">
    <div className="arrow-parent">
<AiOutlineArrowLeft className="arrow-left"/>
<AiOutlineArrowRight className="arrow-right"/>
</div>    </div>
          </div>

          <div >
            <div class="row">
              <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
                <div className="courses">
                  <SiPivotaltracker className=" icon-book position-card" />
                  <h3>STEM/STEAM education </h3>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
                <div className="Students">
                  <RiTestTubeLine className=" icon-Cap position-card" />

                  <h3>education through entertainment</h3>
                </div>{" "}
              </div>

              <div class="col-sm-12 col-md-6 col-xl-4 col-lg-4 col-12">
                <div className="Countries">
                  <VscSettingsGear className="icon-Telegram position-card" />
                  <h3>Quality Educational Content </h3>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Position;
