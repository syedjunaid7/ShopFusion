import React, { useEffect, useState } from "react";
import "./ProductFull.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, goToProduct } from "../../store/cartSlice";
export default function ProductFull() {
  const [categoryP, setCategoryP] = useState([]);
  const products = useSelector((state) => state.cart);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    const singleItemFromStorage = JSON.parse(
      localStorage.getItem("singleItem")
    );
    if (singleItemFromStorage && singleItemFromStorage.length > 0) {
      dispatch(goToProduct(singleItemFromStorage[0]));
    }
    const updatedItems = product.data.filter((item) => {
      return item.category === products.singleItem[0].category;
    });
    if (updatedItems.length === 0) {
      const categoryLocal = JSON.parse(localStorage.getItem("category"));
      setCategoryP(categoryLocal);
    } else {
      setCategoryP(updatedItems);
      localStorage.setItem("category", JSON.stringify(updatedItems));
    }
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleGoTo = (item) => {
    dispatch(goToProduct(item));
    scrollToTop();
  };
  return (
    <section className="productAbout" id="top">
      <div className="productfull">
        {products.singleItem.map((product) => (
          <div className="producfullMain">
            <img src={product.image} alt={product.title} />
            <div className="producfullContent">
              <strong>
                <h2 style={{fontWeight : "900"}}>{product.title}</h2>
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
      <div className="productFullCardBox">
        <h3>More to Choose From</h3>
        <div className="productFullBox2">
          {categoryP.map((item) => (
            <div className="productFullCardBoxIn">
   
                <img
                  src={item.image}
                  alt={product.title}
                  className="categoryFullImg"
                  onClick={() => handleGoTo(item)}
                />
                <h5>{item.title.slice(0,35)}...</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
