import React from 'react'
import "./Foothead.css";

function Foothead (){
  return (
    <div>
        <div className="cont">
            <div className="colu">
                <div className="subcol">
                    <h2>uber <b>Eats</b></h2>
                    <div className="sym">
                        <img src="data:image/jpeg;base64,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" alt="cxc" />
                    </div>
                </div>
            </div>
            <div className="colu" id='cololo1'>
                <a href="/">Get Help</a>
                <a href="/">Buy gift cards</a>
                <a href="/">Add your restaurant</a>
                <a href="/">Sign up to deliver</a>
                <a href="/">Create a business account</a>
                <a href="/">Promotions`</a>

            </div>
            <div className="colu" id='cololo'>
                <a href="/">Restaurants near me</a>
                <a href="/">View all cities</a>
                <a href="/">View all countries</a>
                <a href="/">Pickup near me</a>
                <a href="/">About uber eats`</a>
                <a href="/"><i class="bi bi-translate"></i>English</a>

            </div>
        </div>
        <hr />
    </div>
  )
}

export default Foothead