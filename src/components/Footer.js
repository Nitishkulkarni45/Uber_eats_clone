import React from 'react'
import "./Footer.css";
import Foothead from './Foothead'

function Footer() {
  return (
    <div>
      <Foothead />
      <div className="foo">
        <div className="headleft">
        <i class="fa-brands fa-square-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
        </div>
        <div className="right">
        <div className="right_sub1">
          <a href="/">Do not sell or share my personal information</a>
          <a href="/">Pricing</a>
          <a href="/">Terms</a>
          <a href="/">Privacy Policy</a>
        </div>
          <div className="right_sub2">
            <div className="right_sub_sub1">
              <p className='para'>This site is protected by reCAPTCHA and the Google <a href="/">Privacy Policy</a> and <a href="/">Terms of services apply.</a></p><p className='tech'>©2023 Uber Technologies Inc.</p>
            </div>
            <div className="right_sub_sub2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer