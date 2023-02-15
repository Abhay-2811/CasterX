import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";
import Arcana from "./Components/arcana";

const provider = new AuthProvider("c44b07dc468179660df5a4b62535ea01b0d5b0fa");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProvideAuth provider={provider}>
      <BrowserRouter>
        <App />
        {/* <Arcana /> */}
      </BrowserRouter>
    </ProvideAuth>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
