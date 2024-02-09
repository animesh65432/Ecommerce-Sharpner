import React from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import HeaderSummary from "./Components/Header/HeaderSummary";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeaderSummary />
      <Product />
      <Footer />
    </>
  );
};
export default App;
