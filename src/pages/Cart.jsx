import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      {products.map((product) => (
        <>
          <div key={product.id}>
            <img src={product.image} />
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        </>
      ))}
    </div>
  );
}
