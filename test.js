import React from 'react'
import boy from "./img/boy.png";
import { BsFillPlayFill } from "react-icons/bs";
function Home() {
  return (
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className="header-content">
        <div className="header-content-left">
          <h2 className="header-title">Study From Home with experts</h2>
          <p className="header-paragraph">
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim. Nullam pulvinar felis at metus
          </p>

          <ul className="header-btn">
            <li>
              <button className="lets-start">Lets Start </button>
            </li>
            <li>
              <BsFillPlayFill className="icon-play" />
            </li>
            <li className="work">
              <a href="#">See How it works</a>
            </li>
          </ul>
        </div>
            </div>
    <div class="col-sm">
    <div className="header-content-right">
          <img src={boy} width="600px" height="432px" />
        </div>    </div>

  </div>
</div>

    </div>
  )
}

export default Home