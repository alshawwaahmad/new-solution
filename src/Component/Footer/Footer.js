import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "./img/logo.png";

function Footer() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div className="search">
            <input type="text" placeholder="search" />
            <button className="btn-search">Serach</button>
          </div>{" "}
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <div className="logo">
            <img src={logo} />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <BsFacebook className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiFillInstagram className="icon" />
          <AiFillLinkedin className="icon" />
        </div>

        <div class="row ">
          <div class="col-12">
            <div className="footer-item">
            <li>
              {" "}
              <a>Courses</a>
            </li>
            <li>
              {" "}
              <a>Privacy Policy</a>
            </li>
            <li>
              {" "}
              <a> FAQ</a>
            </li>
            <li>
              {" "}
              <a>Contact Us</a>
            </li>
          </div>
        </div></div>

        <div class="row">
          <div class="col-sm">
            <div className="copy">© 2022 NewSolutions All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
