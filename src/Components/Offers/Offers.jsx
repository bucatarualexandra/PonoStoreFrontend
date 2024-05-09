import React, { useEffect, useState } from "react"
import "./Offers.css"
import Item from "../Items/Item"


const Offers = () => {
    const [offerProducts, setOfferProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/offerproducts")
            .then((response) => response.json())
            .then((data) => setOfferProducts(data));
    }, [])


    return (
        <div className="offers">
            <div className="offers-left">

                <h1>Oferte  </h1>
                <h1>Botez</h1>
                <p> PENTRU PRINȚI ȘI PRINȚESE</p>
                <a href="http://localhost:3000/christening"><button> Produse Botez</button></a>
            </div>

            <div className="offer-item-right">

                {offerProducts.map((item, i) => {
                    return <Item 
                     key={i} 
                    id={item.id} 
                    name={item.name}
                    image_urls={item.image_urls && item.image_urls.length > 0 ? item.image_urls[0]: ""} 
                    new_price={item.new_price}
                    old_price={item.old_price} />
                })}

            </div>
        </div>

    )
}
export default Offers