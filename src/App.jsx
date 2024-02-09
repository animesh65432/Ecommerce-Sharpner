import React from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import HeaderSummary from "./Components/Header/HeaderSummary";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <>
      <Header />
      <HeaderSummary />
      <Cart />
      <Product />
      <Footer />
    </>
  );
};
export default App;
