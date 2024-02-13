import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Storeprovider from "./Stroe/Storeprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Storeprovider>
      <App />
    </Storeprovider>
  </React.StrictMode>
);
