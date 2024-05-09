import React, { useEffect, useState } from "react"
import "./RelatedProducts.css"
import Item from "../Items/Item"



const RelatedProducts = () => {
    const [allProducts,setAllProducts]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/allproductsHero")
        .then((response)=> response.json())
        .then((data)=>setAllProducts(data));
    },[])


    return (
        <div className="relatedproducts">
            <h1> Mai multe produse</h1>
            <hr />
            <div className="relatedproducts-item" id="scrollableDiv">
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
export default RelatedProducts