import React from 'react'
import "./Foothead.css";

function Foothead (){
  return (
    <div>
        <div className="cont">
            <div className="colu">
                <div className="subcol">
                    <h2>uber Eats</h2>
                    <div className="sym">

                    </div>
                </div>
            </div>
            <div className="colu">
                <a href="/">Get Help</a>
                <a href="/">Buy gift cards</a>
                <a href="/">Add your restaurant</a>
                <a href="/">Sign up to deliver</a>
                <a href="/">Create a business account</a>
                <a href="/">Promotions`</a>

            </div>
            <div className="colu">
                <a href="/">Restaurants near me</a>
                <a href="/">View all cities</a>
                <a href="/">View all countries</a>
                <a href="/">Pickup near me</a>
                <a href="/">About uber eats`</a>
                <a href="/">English</a>

            </div>
        </div>
    </div>
  )
}

export default Foothead