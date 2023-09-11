import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { remove } from "../../store/cartSlice";
export default function () {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  //it basically subscribe useData
  const items = useSelector((state) => state.cart);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, handleShow] = useState(false);
  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     handleShow(true);
  //   } else {
  //     handleShow(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className={`${show ? "backFilter" : ""}`}> </div>
      <div className={`cartBox ${show ? "openCart" : "cartBox"}`}>
        <div className="shoppingBagTop">
          <h5>
            Shopping Bag <b>({items.length})</b>
          </h5>
          <RxCross2 className="crossIcon" onClick={() => handleShow(!show)} />
        </div>
        <div className="cartIn">
          {products.map((product) => (
            <>
              <div key={product.id} className="cartDetail">
                <img src={product.image} className="cartImg" />
                <div className="descriptionBox">
                  <h3 className="productF">{product.title}</h3>
                  <h5 className="priceF">{product.price}</h5>
                  <button
                    className="removeBtn"
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <nav>
        <div className="nav-container">
          <span className="logo">ShopFusion</span>
          <div className={mobileMenu ? "mob-link-nav" : "link-navBox"}>
            <Link className="navLink" to="/">
              <BiSearch className="nav-icons" />
            </Link>
            <Link className="navLink">
              <BiUserCircle className="nav-icons" />
            </Link>
            <Link className="navLink" onClick={() => handleShow(!show)}>
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
    </>
  );
}
