import React from 'react'
import "./Cards.css";


function Cards() {
    return (
        <div>
        
            
            <div className="cards">
                <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2016/03/05/19/22/bar-1238379__340.jpg" alt="img" style={{ width: '450px', height: '250px' }} />
<h2>Feed your employees</h2>
<a href='/' className='Links'>Create a business account</a>
                </div>
                <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/18/15/31/chef-1835367__340.jpg" alt="img" style={{ width: '450px', height: '250px' }} />
<h2>Your restaurant, delivered</h2>
<a href='/' className='Links'>Add your restaurant</a>
                </div>
                <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2019/12/20/21/06/uber-eats-4709288__340.jpg" alt="img" style={{ width: '450px', height: '250px' }} />
<h2>Deliver with Uber Eats</h2>
<a href='/' className='Links'>Sign up to deliver</a>
                </div>
            </div>
        </div>
    )
}

export default Cards