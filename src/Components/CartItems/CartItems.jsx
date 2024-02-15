import React, { useContext } from "react"
import "./CartItems.css"
import { ShopContext } from "../../Context/ShopContext"
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)


    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Produs</p>
                <p>Denumire</p>
                <p>Preț</p>
                <p>Cantitate</p>
                <p>Total</p>
                <p>Șterge</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id} >
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon" />
                            <p> {e.name}</p>
                            <p>${e.new_price} </p>
                            <button className="cartitems-quantity"> {cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Valoare</p>
                            <p>Transport</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3> Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button> Trimite comanda</button>
                </div>

                <div className="cartitems-promocod">

                    <p>Dacă ai un cod de reducere te rog să îl introduci </p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button> Aplică reducerea</button>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default CartItems