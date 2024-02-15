import React from "react"
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {


    return (
        <div className="offers">
            <div className="offers-left">

                <h1>Oferte  </h1>
                <h1>Botez</h1>
                <p> PENTRU PRINȚI ȘI PRINȚESE</p>
                <button> Produse Botez</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />

            </div>
        </div>

    )
}
export default Offers