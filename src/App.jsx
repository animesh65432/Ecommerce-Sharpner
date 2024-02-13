import React from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import HeaderSummary from "./Components/Header/HeaderSummary";
import Footer from "./Components/Footer/Footer";
import { usecontextallthetime } from "./Stroe/Storeprovider";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Log from "./Components/Login/Log";
import ProductProfile from "./Components/Profile/ProductProfile";

const App = () => {
  const { userlogin } = usecontextallthetime();
  console.log(userlogin);
  return (
    <>
      {userlogin.length > 0 ? (
        <BrowserRouter>
          <Header />
          <HeaderSummary />
          <Routes>
            <Route path="/" element={<Product />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route
              path="/ProductProfile/:title"
              element={<ProductProfile />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <Log />
      )}
    </>
  );
};

export default App;
