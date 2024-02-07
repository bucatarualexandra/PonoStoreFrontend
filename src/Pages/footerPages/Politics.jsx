
import Deliver from './Deliver'
import './footerPages.css'
import { Link } from 'react-router-dom'
import ReturnPolitics from './ReturnPolitics'
import Confidential from './Confidential'


export default function Politics() {
    return (

        <div className='politics'>
            <div className='politics-text'>

                <h1 id='titlu'> Termeni și condiții</h1>

                <h5>1. Dispoziții generale</h5>
               <p> Vizitarea sau cumpărarea prin orice mijloace (comandă online, telefonic, e-mail, etc.) a produselor de pe site-ul 
                www.pono.ro implică automat acceptarea termenilor și condițiilor de mai jos.
                Site-ul www.pono.ro este administrat de către compania PONO SRL, denumită în continuare Furnizor, 
                iar persoana fizică sau juridică ce comandă și achiziționează prin intermediul site-ului www.pono.ro va fi 
                denumită în continuare Client.</p>


                <h5>2. Conținutul site-ului</h5>
                <p>PONO SRL definește prin conținut, toate informațiile conținute pe site în formă de texte, date, imagini 
                (poze). Firma PONO SRL își rezervă dreptul de a actualiza sau de a modifica conținutul acestui site fără 
                a anunța în prealabil. Întregul conținut al site-ului www.pono.ro este proprietatea Furnizorului și este apărat
                 de legile în vigoare pentru protecția drepturilor de autor. Folosirea fără acordul Furnizorului, a oricăror elemente
                  din conținut, se pedepsește în conformitate cu legile în vigoare (administrativ, civil sau penal). Elemente din 
                  conținutul acestui site pot fi folosite sau copiate doar cu acordul scris al furnizorului.</p>


                  <h5>3. Comanda</h5>
                  <p>Comenzile pot fi plasate online, pe site-ul www.pono.ro, sau în aplicația mobil PONO completând opțiunile care apar pe site, de asemenea
                 pot fi trimise pe e-mail sau pot fi plasate și telefonic. În cazul în care Clientul trimite comanda pe e-mail sau
                  whatsapp, acesta trebuie să trimită toate datele necesare plasării unei comenzi, iar în cazul plasării comenzii 
                  telefonic, se preia produsul dorit si datele pentru livrare și facturare, iar datele pentru tipărirea textului 
                  se vor trimite în scris, prin e-mail de către client. Prin plasarea și confirmarea comenzii, clientul se obligă 
                  să ridice comanda și să achite contravaloarea ei.</p>


                  <h5> 4. Macheta grafică</h5>
                  <p>După plasarea comenzii pe www.pono.ro, în termen de maxim 48 de ore ( două zile lucrătoare), Clientul va primi prin
                 SMS, whatsapp sau e-mail macheta grafică (o poza cu textul așezat pe produs), pentru a vedea cum arată produsul. 
                 Acesta are obligația de a verifica atent macheta grafică, și tot prin SMS, e-mail sau whatsapp să își exprime acordul
                  de tipărire, sau să solicite modificările dorite. Macheta trebuie verificată cu mare atenție, după care Clientul
                   ne va scrie toate modificările deodată. Macheta grafică se va putea revizui doar de 2 ori. După efectuarea
                    modificărilor, Clientul va primi noua machetă grafică. Prin aprobarea machetei grafice de către Client, acesta
                     confirmă că totul este în regulă și că putem tipări produsele, asumându-și totodată întreaga responsabilitate 
                     pentru eventualele greșeli.</p>


                     <h5>5. Durata procesării comenzii</h5>
                     <p>După acordul primit de la Client pentru macheta grafică trimisă prin SMS, e-mail sau whatsapp, produsele se vor 
                personaliza conform machetei, fiind gata in maxim 14 zile lucrătoare, socotite începând cu următoarea zi după primirea
                 acordului de tipărire. Pentru comenzile ce cuprind produse voluminoase și cantități ce depășesc 100 buc termenul poate fi depășit
                  cu 7 zile lucrătoare.</p>
                 
                 <p> În cazul invitațiilor digitale, acestea se trimit în maxim 2 zile lucrătoare, pentru comenzile plasate până în ora 14:00, iar 
                cele după ora 14:00 se vor trimite în următoarea zi lucrătoare.
                Zilele de sâmbătă și duminică sunt zile nelucrătoare, astfel că toate comenzile vor fi procesate luni.</p>

                <h5>6. Prețuri, taxe și modalități de plată</h5>
                <p> Prețul final plătit de către Client la ridicarea coletului este format din prețul produsului afișat pe site + prețul 
                transportului (ambele prețuri contin TVA 19%). Plata se va face ramburs la livrarea coletului.</p>
                <p>Promoții și oferte speciale</p>
                <p> În cazul în care prețul sau alte detalii referitoare la produse/promoții au fost afișate greșit, ne alocăm dreptul
                 de a anula livrarea respectivului produs și de a anunța clientul în cel mai scurt timp despre eroarea apărută, dacă
                  produsul nu s-a livrat încă.</p>
                  <p>Prețurile produselor de pe acest site sunt informative și pot suferi modificări neanunțate. Promoțiile și ofertele
                 speciale sunt valabile în perioada de timp menționată, iar în cazul în care nu se menționează o perioadă de timp,
                  acestea sunt valabile în limitele stocurilor disponibile.</p>


                  <h5> 7. Livrarea produselor</h5>
                  <p> Pentru detalii despre livrarea produselor, vă rugăm dați <Link to="/Livrarea" exact element={<Deliver/>}>click  aici </Link>.</p>


                <h5>8. Declinarea responsabilității</h5>
                <p> Descrierea bunurilor sau a serviciilor disponibile pe www.pono.ro (texte, imagini, video etc.) nu reprezintă o 
                obligație contractuală din partea PONO SRL, acestea fiind utilizate exclusiv cu titlu de prezentare. Așadar,
                 în momentul primirii produsului achiziționat, culorile pot fi ușor diferite, la fel și dimensiunile produselor, 
                 acestea fiind realizate handmade.</p>
                 <p> Avand în vedere că produsele PONO SRL sunt personalizate, acestea necesită realizarea unor machete grafice
                 care se trimit Clienților prin e-mail în maxim 48 de ore după ce aceștia au plasat comanda pe site-ul www.pono.ro.
                  Odată ce Clientul și-a dat bunul de tipar pentru macheta primită, produsul se tipărește conform acordului de la 
                  Client, iar Furnizorul nu se mai face responsabil pentru eventuale greșeli descoperite ulterior tipăririi.</p>


                  <h5>9. Politica de retur/anulare</h5>
                  <p>  Pentru politica de retur/anulare, vă rugăm dați<Link to="/Politica de returnare" exact element={<ReturnPolitics/>}> click aici</Link>.</p>


                <h5> 10. Politica de confidențialitate</h5>
                <p> Pentru politica de confidențialitate, vă rugăm dați <Link to="/Politica de confidențialitate" exact element={<Confidential/>}> click aici</Link>.</p>


                <h5> 11. Tentativă de fraudă</h5>
                <p> Orice tentativă de acces neautorizat a bazelor de date, datelor personale, serverului sau conținutului site-ului
                 www.pono.ro va fi raportată autorităților competente și va face obiectul unei plângeri penale către acestea.</p>


                 <h5>12. Litigii</h5>
                 <p> Orice litigiu apărut între Clienți și Furnizor va fi rezolvat pe cale amiabilă. În cazul în care nu s-a reușit
                 rezolvarea conflictului pe cale amiabilă, competența revine Instanțelor de Judecată Române, de pe raza municipiului
                 Cluj.</p>
                  <p>  Prin vizitarea și cumpărarea de produse prin orice mijloc (comandă online, telefonic, e-mail, etc), Clientul
                 confirmă că a citit și acceptat termenii și condițiile de mai sus. Utilizarea site-ului de către Client pentru
                  informare implică totodată acceptarea necondiționată a acestor termeni și condiții. În cazul în care nu sunteți 
                  de acord cu acești termeni și condiții, vă rugăm să părăsiți acest site.</p>


                  <p>  Vă mulțumim pentru înțelegere !</p>
            </div>
            </div>


    )
}