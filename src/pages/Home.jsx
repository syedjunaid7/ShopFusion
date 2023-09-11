import React from "react";
import Products from "../components/Products/Products";
import Hero from "../components/Hero/Hero";
import News from "../components/NewsSection/News";
import Footer from "../components/Footer/Footer";
// import Cart from "./Cart"
export default function Home() {
  return (
    <>
      <section>
        <Hero />
        {/* <Cart /> */}
        <Products />
        <News />
        <Footer />
      </section>
    </>
  );
}
