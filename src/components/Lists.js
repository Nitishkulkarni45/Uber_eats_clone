import React from 'react'
import "./Lists.css";

function Lists() {
    return (
        <div>
            <div className="lists-main">
                <div className="listssub">
                    <div className="ul" id='ul1'>
                        <a href="/">Akron</a>
                        <a href="/">Albuquerque</a>
                        <a href="/">Bridgeport</a>
                        <a href="/">Concord</a>
                        <a href="/">Dayton</a>
                        <a href="/">El Paso</a>
                    </div>
                    <div className="ul">
                        <a href="/">Hartford</a>
                        <a href="/">Houston</a>
                        <a href="/">Indianapolis</a>
                        <a href="/">McAllen</a>
                        <a href="/">Mesa</a>
                        <a href="/">Milwaukee</a>
                    </div>
                    <div className="ul">
                        <a href="/">Nashville</a>
                        <a href="/">New Orleans</a>
                        <a href="/">Oklahoma City</a>
                        <a href="/">Omaha</a>
                        <a href="/">Orlando</a>
                        <a href="/">Palm Bay</a>
                    </div>
                    <div className="ul" id='ul2'>
                        <a href="/">Providence</a>
                        <a href="/">Queen</a>
                        <a href="/">San Antonio</a>
                        <a href="/">Stony Brook</a>
                        <a href="/">Tucson</a>
                        <a href="/">West Hollywood</a>
                    </div>
                </div>
                <h1>Countries with Uber Eats</h1>
                <div className="listscountry">
                    <div className="col" id='col1'>
                        <a href="/">Australia</a>
                        <a href="/">Belgium</a>
                        <a href="/">Canada</a>
                        <a href="/">Chile</a>
                        <a href="/">Costa Rica</a>
                        <a href="/">Dominican Republic</a>
                        <a href="/">Ecuador</a>
                        <a href="/">El Salvador</a>
                    </div>
                    <div className="col">
                        <a href="/">France</a>
                        <a href="/">Germany</a>
                        <a href="/">Guatemala</a>
                        <a href="/">Ireland</a>
                        <a href="/">Italy</a>
                        <a href="/">Japan</a>
                        <a href="/">Kenya</a>
                        <a href="/">Mexico</a>
                    </div>
                    <div className="col">
                        <a href="/">Netherlands</a>
                        <a href="/">New Zealand</a>
                        <a href="/">Panama</a>
                        <a href="/">Poland</a>
                        <a href="/">Portugal</a>
                        <a href="/">South Africa</a>
                        <a href="/">Spain</a>
                        <a href="/">Sri Lanka</a>
                    </div>
                    <div className="col" id='col2'>
                        <a href="/">Sweden</a>
                        <a href="/">Switzerland</a>
                        <a href="/">Taiwan'(ROC)'</a>
                        <a href="/">United Kingdom</a>
                        <a href="/">United States</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Lists