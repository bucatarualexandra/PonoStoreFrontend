import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import AllProducts from './Pages/AllProducts';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Footer from "./Components/Footer/Footer";
import wedding_banner from "./Components/Assets/banner_mens.png"
import christening_banner from "./Components/Assets/banner_women.png"
import project_banner from "./Components/Assets/banner_kids.png"
import shop_banner from "./Components/Assets/banner_kids.png"
import About from "./Pages/footerPages/About"
import Contact from "./Pages/footerPages/Contact"
import Order from "./Pages/footerPages/Order"
import Deliver  from "./Pages/footerPages/Deliver"
import Politics from "./Pages/footerPages/Politics"
import SendPolitics from "./Pages/footerPages/SendPolitics"
import ReturnPolitics from "./Pages/footerPages/ReturnPolitics"
import Confidential from "./Pages/footerPages/Confidential"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />

        <Routes>
        
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<AllProducts banner = {shop_banner} />} />
          <Route path="/wedding" element={<ShopCategory banner = {wedding_banner} category="nunta" />} />
          <Route path="/christening" element={<ShopCategory banner = {christening_banner} category="botez" />} />
          <Route path="/projects" element={<ShopCategory banner = {project_banner} category="proiect" />} />
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>


          <Route path="/Despre noi" element={<About />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Plasarea unei comenzi" element={<Order />} />
          <Route path="/Livrarea" element={<Deliver />} />
          <Route path="/Termeni și condiții" element={<Politics />} />
          <Route path="/Politica de expediere" element={<SendPolitics />} />
          <Route path="/Politica de returnare" element={<ReturnPolitics />} />
          <Route path="Politica de confidențialitate" element={<Confidential />} />
          <Route path="/https://anpc.ro/" target="_blank" />


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
