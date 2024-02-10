import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About.jsx";
import HeaderSummary from "./Components/Header/HeaderSummary.jsx";
import Product from "./Components/Product/Product.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeaderSummary />
            <Home />
          </>
        ),
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
