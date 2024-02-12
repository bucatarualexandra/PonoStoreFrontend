
import './footerPages.css'
import whatsapp_icon from "../../Components/Assets/whatsapp_icon.png"




export default function Contact() {
    return (<>

        <div className='contact'>

            <div className='contact-details'>
                <h1> Contactați-ne</h1>

                <div className="telefon">
                <img src={whatsapp_icon} alt="" />
                    <h5>  Ne găsiți pe whatsapp la numărul</h5>
                    <a href="tel:0756931314"><h2>0756931314</h2></a> 
                </div>

                <div className="email">
                    <h5>Contactați-ne pe adresa de email</h5>
                  
                    <h2>ponocrafts1@gmail.com</h2>
                </div>

                <div className="address">
                    <h5>Locația unde ne puteți găsi</h5>
                   
                    <h2>Mănăștur, Cluj-Napoca</h2>
                </div>
            </div>

            <div className="program">
                <h1>Program</h1>
                <h2> Luni-Vineri: </h2><h3>09:00-16:00</h3>
                <h2> Sâmbătă: </h2><h3>12:00-16:00</h3> 
                <h2>Duminică: </h2><h3> ÎNCHIS</h3> 
            </div>

        </div>


    </>
    );
}