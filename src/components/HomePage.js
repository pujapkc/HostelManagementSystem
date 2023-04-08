import React from "react";

import {Link} from "react-router-dom"

function LandingPageButton() {
    return <Link to="/Home" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Register Here
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "black"
    }
    return <div style={style}>
        
        <div style={{"font-size": "96px"}}>
            Welcome to VIT Hostel World..
        </div>
        
        <div style={{"font-size": "36px"}}>
           Welcome to the hostel with world class facility.Come and experience it.
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        
        background: `url("images/blue.jpg")`,
        //background-repeat: "no-repeat",
        //background-size: "cover",
        //position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function HomePage() {
    return <div>
        <LandingFrame />
    </div>
}
export default HomePage;