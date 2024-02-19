import React, { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import "./CSS/ShopCategory.css"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Items/Item"



const AllProducts = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                </p>

                <div className="shopcategory-sort">
                    Sortează după <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name}
                            image={item.image} new_price={item.new_price} O
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