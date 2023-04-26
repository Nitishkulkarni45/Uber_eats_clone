import React from 'react'
import "./Pagelayout.css";

function Pagelayout() {
    return (
        <div>
            
            <div className="details">
            <h1>Order food to your door</h1>
            <div className="detailss">
                <input type="text" className='location' placeholder='enter delivery address' />
                <div class="dropdown Drop">
                    <a className="btn btn-secondary dropdown-toggle hi" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-clock-fill makeSymbol"></i>
                        Deliver now
                    </a>
                    <ul class="dropdown-menu" style={{borderRadius:'none !important'}}>
                        <li><a class="dropdown-item" href="/"><i class="bi bi-clock-fill makeSymbol"></i>Deliver now</a></li>
                        <li><a class="dropdown-item" href="/"><i class="bi bi-calendar-event-fill makeSymbol"></i>Schedule for later</a></li>
                    </ul>
                </div>
                <button type="button" className="btn btn-dark darker">Find Food</button>
                </div>
            </div>
                <div className="end"><a href="/">Sign In</a> for your recent addresses</div>
        </div>
    )
}

export default Pagelayout