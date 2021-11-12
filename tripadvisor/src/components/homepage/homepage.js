import React from "react"
// import "./homepage.css"
import { Navbar } from "../Navbar/Navbar";
import { Landing } from "../Landing/Landing.jsx";
import { Slider } from "../Landing/Slider.jsx";
import { About } from "../Landing/About.jsx";
import { Mightlike } from "../Landing/Mightlike.jsx";

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <Navbar/>
            <Landing/>
            <Mightlike/>
            <Slider/>
            <About />
            {/* <h1>Hello Homepage</h1> */}
            {/* <div className="button" onClick={() => setLoginUser({})} >Logout</div> */}
        </div>
    )
}

export default Homepage