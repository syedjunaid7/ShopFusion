import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getCartTotal } from "../../store/cartSlice";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "../../pages/Cart/Cart";

export default function Navbar() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };
  const items = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [products]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={`${show ? "backFilter" : ""}`}> </div>
      <nav id="top">
        <div className="nav-container">
          <span className="logo" onClick={() => navigate("/")}>
            ShopFusion
          </span>
          <div className={mobileMenu ? "mob-link-nav" : "link-navBox"}>
            <Link className="navLink" to="/">
              <BiSearch className="nav-icons" />
            </Link>
            <Link className="navLink">
              <BiUserCircle className="nav-icons" />
            </Link>
            <Link className="navLink" onClick={() => handleShow(!show)}>
              <BiShoppingBag className="nav-icons" />
              {products.items.length === 0 ? (
                ""
              ) : (
                <div className="cartCount">{items.totalQuantity}</div>
              )}
            </Link>
          </div>
        </div>
      </nav>

      <Cart show={show} handleShow={handleShow} />
    </>
  );
}
