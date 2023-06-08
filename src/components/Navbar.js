import React from 'react'
import "./Navbar.css";
import Navfoot from './Navfoot';
import Pagelayout from './Pagelayout';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <nav class="navbar  oilo">
        <div class="container-fluid flu">
          <button class="navbar-toggler ogo " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="fa fa-bars navic"></span>
          </button>
          <div className="hea">
            <h2 className='uber'>Uber</h2>
            <h2 className='eats'>Eats</h2>
          </div>
          <div className="sidebut">
            <button onClick={() => {
              navigate('/login')
            }} className='LOGINBUT'><a class="nav-link Button-login" aria-current="page"><i class="bi bi-person-fill"></i>Login</a></button>
            <button onClick={() => {
              navigate('/signup')
            }} className='SIGNUPBUT'><a class="nav-link Button-signup" aria-current="page">Sign Up</a></button>
          </div>
          {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
          <div class="offcanvas offcanvas-start offcan" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-body offbod">
              <div class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <button className='SIGNUP-BUT'><a class="nav-link Button-signup" aria-current="page" href="/">Sign Up</a></button>
                <button className='LOGIN-BUT'><a class="nav-link Button-login" aria-current="page" href="/">Login</a></button>
                <div className="option">
                  <a className="ops" href='/'>Create a business account</a>
                  <a className="ops" href='/'>Add your restaurant</a>
                  <a className="ops" href='/'>Sign up to deliver</a>
                </div>
                <div className="ended">
                  <div className="mainmain">
                    <div className="imageleft">
                      <img src="data:image/jpeg;base64,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" alt="pic" />
                    </div>
                    <div className="mainright">
                      There's more to love in the app.
                    </div>
                  </div>
                  <div className="appp">
                    <div className="aaple">
                      <button className='applee'>iPhone</button>
                      <button className='applee'>Android</button>
                    </div>
                    {/* <div className="play">
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar