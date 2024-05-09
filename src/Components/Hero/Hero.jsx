import React, { useEffect, useState } from "react"
import "./Hero.css"
import hero_image from "../Assets/hero_image.png"
import Item from "../Items/Item"


const Hero = () => {

    const [allProducts,setAllProducts]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/allproductsHero")
        .then((response)=> response.json())
        .then((data)=>setAllProducts(data));
    },[])


    return (
        <div className="hero">
            <div className="hero-left">
                
                <h1>√ Invitații</h1>
                <h1>√ Meniuri</h1>
                <h1>√ Plicuri dar</h1>
                <h1>√ Mărturii</h1>
                <h1>√ Tot ce ai nevoie</h1>
                <img src={hero_image} className="hero-image" alt="" />

                <p></p>

                <div className="hero-latest-btn">
                   <a href="http://localhost:3000/shop"> <div> Produsele noastre</div> </a>

                </div>
            </div>

            <div className="allproducts-item" id="scrollableDiv">
                {allProducts.map((item, i) => {
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
export default Hero