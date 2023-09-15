import React from "react";
import Products from "../components/Products/Products";
import Hero from "../components/Hero/Hero";
import News from "../components/NewsSection/News";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <Products />   
      </section>
    </>
  );
}
