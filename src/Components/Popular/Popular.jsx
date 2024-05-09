import React, { useEffect, useState } from "react"
import "./Popular.css"
import Item from "../Items/Item"

const Popular = () => {
    const [popularProducts,setPopularProducts]= useState([]);

    useEffect (()=>{
        fetch("http://localhost:4000/popularinnunta")
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data));
    },[])


    return (
        <div className="popular">

           <a href="http://localhost:3000/wedding"> <h1> Populare pentru Nuntă</h1> </a>
            <hr />
            <div className="popular-item">

        {popularProducts.map((item, i)=>{
            return <Item 
            key={i} 
            id={item.id} 
            name={item.name}
            image_urls={item.image_urls && item.image_urls.length > 0 ? item.image_urls[0]: ""}  
            new_price={item.new_price}
            ld_price={item.old_price} />
        } )}

            </div>

        </div>

    )
}
export default Popular