import React, { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import "./CSS/ShopCategory.css"
import Item from "../Components/Items/Item"



const AllProducts = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                </p>

            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                        return <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name}
                    image_urls={item.image_urls && item.image_urls.length > 0 ? item.image_urls[0]: ""}  
                    new_price={item.new_price}
                    old_price={item.old_price} />
                })}
            </div>
            <div className="shopcategory-loademore"> 
            Vezi mai multe 
            </div>
        </div>
    )
}
export default AllProducts