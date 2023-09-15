import React, { useState } from "react";
import "./Cart.scss";
import { RxCross2 } from "react-icons/rx";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import { PiTrashFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getCartTotal } from "../../store/cartSlice";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../store/cartSlice";
import emptyCart from "../../assets/empty-cart.png";

export default function ({show, handleShow}) {
  const products = useSelector((state) => state.cart);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <div className={`cartBox ${show ? "openCart" : "cartBox"}`}>
        <div className="shoppingBagTop">
          <h5>
            Shopping Bag <b>({items.totalQuantity})</b>
          </h5>
          <RxCross2 className="crossIcon" onClick={() => handleShow(!show)} />
        </div>
        <div className="cartIn">
          {products.items.length === 0 ? (
            <div className="empty-cartBox">
              <img src={emptyCart} alt="cart-image" className="cart-image" />
              <h3>Your cart is empty</h3>
              <button onClick={() => handleShow(!show)}>Keep Browsing</button>
            </div>
          ) : (
            products.items.map((product) => (
              <div key={product.id} className="cartDetail">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cartImg"
                />
                <div className="descriptionBox">
                  <div className="left-des">
                    <h3 className="productF">{product.title}</h3>
                    <div className="inDecBox">
                      <AiFillPlusSquare
                        className="plusBtn"
                        onClick={() =>
                          dispatch(increaseItemQuantity(product.id))
                        }
                      />
                      <h5>{product.quantity}</h5>
                      <AiFillMinusSquare
                        className="plusBtn"
                        onClick={() =>
                          dispatch(decreaseItemQuantity(product.id))
                        }
                      />
                    </div>
                  </div>
                  <div className="right-des">
                    <h5 className="priceF">₹{product.price}</h5>
                    <PiTrashFill
                      className="removeBtn"
                      onClick={() => handleRemove(product.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="totalBox">
          <h3>Subtotal</h3>
          <div className="totalBoxIn">
            <div>
              <strong>₹{items.totalPrice}</strong>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
