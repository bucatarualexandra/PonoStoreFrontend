import React, { useContext, useRef, useState } from "react"
import "./Navbar.css"
import logo from "../Assets/logo.png"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import nav_dropdown from "../Assets/nav_dropdown.png"


const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible")
        e.target.classList.toggle("open");
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>PONO</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("home") }}> <Link style={{ textDecoration: "none" }} to="/">Acasă</Link> {menu === "home" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to="/shop">Produse</Link>{menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("wedding") }}> <Link style={{ textDecoration: "none" }} to="/wedding">Nuntă</Link> {menu === "wedding" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("christening") }}> <Link style={{ textDecoration: "none" }} to="/christening">Botez</Link> {menu === "christening" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("projects") }}> <Link style={{ textDecoration: "none" }} to="/projects">Proiecte</Link> {menu === "projects" ? <hr /> : <></>} </li>

            </ul>

        </div>
    )
}
export default Navbar