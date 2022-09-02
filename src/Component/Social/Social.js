import React from 'react'
import './Social.css'
import amazon from './img/amazon.png'
import stripe from './img/stripe.png'
import paypal from './img/paypal.png'
import slack from './img/slack.png'
import airbnb from './img/airbnb.png'

function Contact() {
  return (
    <div className='Social-parent'>
        <div class="container ">
  <div class="row">
    <div class="col-xl-3 col-lg-2 col-md-4 col-sm-12 col-12">
    <img src={amazon} width='120px' height='45px'/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
    <img src={stripe} width='120px' height='45px'/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-12">
    <img src={paypal} width='120px' height='45px'/>
    </div>
    
    <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
    <img src={slack} width='120px' height='45px'/>
    </div>
    
    <div class="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
    <img src={airbnb} width='120px' height='45px'/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact