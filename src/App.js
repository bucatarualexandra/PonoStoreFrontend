import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignUp from './Pages/LoginSignUp';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
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
          <Route path="/mens" element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner = {kid_banner} category="kid" />} />
          <Route path='product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />


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
