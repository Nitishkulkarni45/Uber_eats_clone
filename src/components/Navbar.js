import React from 'react'
import "./Navbar.css";
function Navbar(){
  return (
    <div>
        <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
    
    <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header offhead">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body offbod">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
             <button className='SIGNUP-BUT'><a class="nav-link Button-signup" aria-current="page" href="/">Sign Up</a></button>
          </li>
          <li class="nav-item">
             <button className='LOGIN-BUT'><a class="nav-link Button-login" aria-current="page" href="/">Login</a></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar