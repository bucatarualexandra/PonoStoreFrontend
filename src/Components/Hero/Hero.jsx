import React from "react"
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrinals only</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p> collection</p>
                <p>for everyone</p>

                <div className="hero-latest-btn">
                    <div>Latest Colection</div>
                    <img src={arrow_icon} alt="" />

                </div>
            </div>
            <div className="hero-rigt">
                <img src={hero_image} alt="" />
            </div>
        </div>

    )
}
export default Hero