import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
export default function () {
  //it basically subscribe useData
  const items = useSelector((state) => state.cart);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <div className="nav-container">
        <span className="logo">ShopFusion</span>
        <div className={mobileMenu ? 'mob-link-nav' : 'link-navBox'}>
          <Link className="navLink" to="/">
            <BiSearch className="nav-icons" />
          </Link>
          <Link className="navLink">
            <BiUserCircle className="nav-icons" />
          </Link>
          <Link className="navLink" to="/cart">
            <BiShoppingBag className="nav-icons" />
            {items.length === 0 ? (
              ""
            ) : (
              <div className="cartCount">{items.length}</div>
            )}
          </Link>
        </div>

      </div>
    </nav>
  );
}
