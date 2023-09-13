import React from "react";
import "./ProductFull.scss";
import { useDispatch, useSelector } from "react-redux";
export default function ProductFull() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productfull">
      {products.singleItem.map((product) => (
        <div className="producfullMain">
          <img src={product.image} alt={product.title} />
          <div className="producfullContent">
            <strong>
              <h2>{product.title}</h2>
            </strong>
            <h5>{product.description}</h5>
            <strong>
              <h4 className="priceF">₹{product.price}</h4>
            </strong>
            <div>
              <button onClick={() => handleAdd(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
