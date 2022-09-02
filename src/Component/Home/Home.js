import React from 'react'
import boy from "./img/boy.png";
import { BsFillPlayFill } from "react-icons/bs";
import './Home.css'
function Home() {
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
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
        </div>    </div>
    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
    <div className='home-img'>
          <img src={boy} width='100%' height='80%' />
        </div>    </div>

  </div>
</div>
    </div>
  )
}

export default Home