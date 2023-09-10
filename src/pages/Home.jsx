import React from "react";
import Products from "../components/Products/Products";

export default function Home() {
  return (
    <>
      <section>
        <h2>Welcome to the Store</h2>
        <div>
            <h3>Products</h3>
            <Products />
        </div>
      </section>
    </>
  );
}
