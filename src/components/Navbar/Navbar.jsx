import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";

export default function () {
    //it basically subscribe useData
    const items = useSelector((state) => state.cart)
  return (
    <nav>
      <span className="logo">LOGO</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items : {items.length}</span>
      </div>
    </nav>
  );
}
