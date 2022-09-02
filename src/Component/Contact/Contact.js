import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
        <div class="container">
  <div class="row">
    <div class="col-12">
    <h3 className="contactus-title">
          <l style={{ color: "#FE9610" }}>Contact</l> Us
        </h3>
        <p className="contactus-desc">
          You can contact us at any time from the contact form below or call us
          on the unified number (from Sunday to Thursday from 9 am to 5 pm)
        </p>    </div>

    
  </div>


  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
    <input type="text" placeholder="Name" />
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
    <input type="Email" placeholder="Email" />
    </div>
 
</div>


  <div class="row">
    <div class="col-sm">
    <textarea placeholder='More Details'>
            {" "}
          </textarea>    </div>

</div>

  <div class="row">
    <div class="col-sm">
    <input type="submit" value="send" />
    </div>
   
</div>
    </div>
    </div>
  )
}

export default Contact