
import './footerPages.css'



export default function Contact() {
    return (<>

        <div className='contact'>

            <div className='contact-text'>

                <h1> Contactați-ne</h1>
                <div className="program">
                    <h1>Program</h1>
                    <h5> Luni-Vineri: <h3>09:00-16:00</h3></h5>
                    <h5> Sâmbătă: <h3>12:00-16:00</h3> </h5>
                    <h5>Duminică: <h3> ÎNCHIS</h3> </h5>
                </div>

                <br></br>
                <br></br>
                <div className="telefon">
                    <h5>Ne puteți suna la numărul de Telefon</h5>
                    <i class="fa-solid fa-phone"></i>
                    <h2> 0756931314</h2>
                    <p></p>
                </div>
                <br></br>
                <br></br>
                <div className="whatsapp">
                    <h5>Așteptăm ideile voastre pe Whatsapp</h5>
                    <i class="fa-solid fa-mobile"></i>
                    <h2>0756931314</h2>
                    <p> </p>
                </div>
                <br></br>
                <br></br>
                <div className="email">
                    <h5>Contactați-ne pe adresa de email</h5>
                    <i class="fa-solid fa-envelope"></i>
                    <h2>bucatarualexandra15@gmail.com</h2>
                    <p></p>
                </div>
<br></br>
                <br></br>
                <div className="address">
                    <h5>Locația unde ne puteți găsi</h5>
                    <i class="fa-solid fa-location-pin"></i>
                    <h2>Florești, județul Cluj</h2>
                    <p></p>
                </div>

            </div>
        </div>
    </>
    );
}