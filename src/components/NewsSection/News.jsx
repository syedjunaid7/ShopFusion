import React from "react";
import "./News.scss";
import { GoMail } from "react-icons/go";
export default function News() {
  return (
    <section className="newsBox">
      <GoMail className="mailIcon"/>
      <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
      <p>and receive ₹200 coupon for you first order when you checkout</p>
      <div className="inputForm">
        <input></input>
        <button className="sub">Subscribe</button>
      </div>
    </section>
  );
}
