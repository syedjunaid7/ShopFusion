import React, { useEffect, useState } from "react";
import "./Products.scss";
import { add } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { STATUSES } from "../../store/productSlice";
export default function Products() {
  const dispatch = useDispatch();
  const {data : products, status} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

if (status === STATUSES.LOADING) {
  return <h2>Loading ....</h2>
}
if (status === STATUSES.ERROR) {
  return <h2>Something Went Wrong</h2>
}
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="products-images" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
