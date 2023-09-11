import React from "react";
import Products from "../components/Products/Products";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <section>
      <Hero />
        <h2>Welcome to the Store</h2>
        <div>
            <h3>Products</h3>
            <Products />
        </div>
      </section>
    </>
  );
}
