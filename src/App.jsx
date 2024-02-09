import React from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import HeaderSummary from "./Components/Header/HeaderSummary";
import Footer from "./Components/Footer/Footer";
import Storeprovider from "./Stroe/Storeprovider";

const App = () => {
  return (
    <Storeprovider>
      <Header />
      <HeaderSummary />

      <Product />
      <Footer />
    </Storeprovider>
  );
};
export default App;
