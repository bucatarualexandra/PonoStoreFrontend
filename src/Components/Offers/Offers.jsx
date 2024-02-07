import React from "react"
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {


    return (
        <div className="offers">
            <div className="offers-left">

                <h1>offers for </h1>
                <h1>Christening</h1>
                <p> FOR THE PRICE AND PRICESES</p>
                <button> Check now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />

            </div>
        </div>

    )
}
export default Offers