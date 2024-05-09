import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
    const { allProducts } = useContext(ShopContext);

    // Check if allProducts is undefined or null
    if (!allProducts) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p></p>
            </div>
            <div className="shopcategory-products">
                {allProducts.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item 
                                key={i} 
                                id={item.id} 
                                name={item.name}
                                image_urls={item.image_urls && item.image_urls.length > 0 ? item.image_urls[0]: ""}  
                                new_price={item.new_price}
                                old_price={item.old_price} 
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loademore">Vezi mai multe</div>
        </div>
    );
}

export default ShopCategory;