import React from 'react'
import "./Pagelayout.css";

function Pagelayout() {
    return (
        <div>
            <h1>Order food to your door</h1>
            <div className="details">
                <input type="text" className='location' placeholder='enter delivery address' />
                <div class="dropdown Drop">
                    <a class="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Deliver now
                    </a>

                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/"><i class="bi bi-clock-fill"></i>Deliver now</a></li>
                        <li><a class="dropdown-item" href="/"><i class="bi bi-calendar-event-fill"></i>Schedule for later</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Pagelayout