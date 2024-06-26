import React, { useEffect, useState } from "react"
import "./NewCollection.css"
import Item from "../Items/Item"

const NewCollections = () => {

    const [new_collection, setNew_collection] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/newcollections")
            .then((response) => response.json())
            .then((data) => setNew_collection(data));
    }, [])


    return (
        <div className="new-collections">
            <h1> PRODUSE NOI</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
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
export default NewCollections