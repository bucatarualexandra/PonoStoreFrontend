import React from "react"
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pinterest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
import youtube_icon from "../Assets/youtube_icon.png"
import facebook_icon from "../Assets/facebook_icon.png"


import { Link } from 'react-router-dom'
import About from '../../Pages/footerPages/About'
import Contact from '../../Pages/footerPages/Contact'
import Order from '../../Pages/footerPages/Order'
import Deliver from '../../Pages/footerPages/Deliver'
import Politics from '../../Pages/footerPages/Politics'
import SendPolitics from '../../Pages/footerPages/SendPolitics'
import ReturnPolitics from '../../Pages/footerPages/ReturnPolitics'
import Confidential from '../../Pages/footerPages/Confidential'


const Footer = () => {


    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p> PONO </p>
            </div>
            <div className='footer-links'>
          <Link to="/Despre noi"  element={<About />}><p> Despre noi</p></Link>
          <Link to="/Contact"  element={<Contact />}><p> Contact</p></Link>
          <Link to="/Plasarea unei comenzi"  element={<Order />}><p> Plasarea comenzii</p></Link>
          <Link to="/Livrarea"  element={<Deliver />}><p> Livrarea</p></Link>
          <Link to="/Termeni și condiții"  element={<Politics />}><p> Termeni și condiții</p></Link>
          <Link to="/Politica de expediere"  element={<SendPolitics />}><p> Politica de expediere</p></Link>
          <Link to="/Politica de returnare"  element={<ReturnPolitics />}><p> Politica de returnare și ramburs</p></Link>
          <Link to="/Politica de confidențialitate"  element={<Confidential />}><p> Politica de Confidențialitate</p></Link>
          <Link to="https://anpc.ro/" target="_blank"><p> Protecția consumatorului</p></Link>
        </div>

            <div className="footer-social-icon">

                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={youtube_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={facebook_icon} alt="" />
                </div>


            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright Pono Crafts 2023 - All Right Reserved.</p>
            </div>
        </div>

    )
}
export default Footer