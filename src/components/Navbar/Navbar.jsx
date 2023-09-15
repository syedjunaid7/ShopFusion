import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "../../pages/Cart/Cart";
import Search from "../Search/Search";

export default function Navbar() {
  const [inputValue, setInputValue] = useState('');
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [products]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
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

            <input
              className="search"
              placeholder="search your item"
              onChange={handleInput}
              value={inputValue}
            />

            <BiSearch className="search-icon" />
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
      <Search inputValue={inputValue} setInputValue = {setInputValue}/>
      <Cart show={show} handleShow={handleShow} />
    </>
  );
}
