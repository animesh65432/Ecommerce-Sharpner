import React from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import HeaderSummary from "./Components/Header/HeaderSummary";
import Footer from "./Components/Footer/Footer";
import Storeprovider from "./Stroe/Storeprovider";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";

const App = () => {
  return (
    <Storeprovider>
      <BrowserRouter>
        <Header />
        <HeaderSummary />
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Storeprovider>
  );
};
export default App;
