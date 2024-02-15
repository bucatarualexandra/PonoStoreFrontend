import React from "react"
import "./Hero.css"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                
                <h1>√ Invitații</h1>
                <h1>√ Meniuri</h1>
                <h1>√ Plicuri dar</h1>
                <h1>√ Mărturii</h1>
                <h1>√ Tot ce ai nevoie</h1>

                <p></p>

                <div className="hero-latest-btn">
                    <div>Produsele noastre</div>
                    <img src={arrow_icon} alt="" />

                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>

    )
}
export default Hero