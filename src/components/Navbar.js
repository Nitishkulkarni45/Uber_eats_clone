import React from 'react'
import "./Navbar.css";
import Navfoot from './Navfoot';
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar fixed-top">
        <div class="container-fluid flu">
          <button class="navbar-toggler ogo " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="fa fa-bars navic"></span>
          </button>
          <div className="hea">
            <h2>uber</h2>
            <h2 className='eats'>Eats</h2>
          </div>
          <div className="sidebut">
            <button className='LOGINBUT'><a class="nav-link Button-login" aria-current="page" href="/"><i class="bi bi-person-fill"></i>Login</a></button>
            <button className='SIGNUPBUT'><a class="nav-link Button-signup" aria-current="page" href="/">Sign Up</a></button>
          </div>
          {/* <a class="navbar-brand" href="#">Offcanvas dark navbar</a> */}
          <div class="offcanvas offcanvas-start offcan" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-body offbod">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <button className='SIGNUP-BUT'><a class="nav-link Button-signup" aria-current="page" href="/">Sign Up</a></button>
                <button className='LOGIN-BUT'><a class="nav-link Button-login" aria-current="page" href="/">Login</a></button>
                <div className="option">
                  <a className="ops" href='/'>Create a business account</a>
                  <a className="ops" href='/'>Add your restaurant</a>
                  <a className="ops" href='/'>Sign up to deliver</a>
                </div>
                <Navfoot />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar