import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/User";
import Products from "./pages/Products/Products";
import PurchaseHistory from "./pages/History/PurchaseHistory";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import Messaging from "./pages/Messaging/Messaging";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="user" element={<User />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="history" element={<PurchaseHistory />}></Route>
        <Route path="shoppingcart" element={<ShoppingCart />}></Route>
        <Route path="messaging" element={<Messaging />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
