import React, { useEffect, useState } from "react";
import "./Products.scss";
import { addToCart, goToProduct } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { STATUSES } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const [wholeData, setWholeData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all"); 
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
    
  }, []);

  useEffect(() => {
    setWholeData(products);
  }, [products]);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };
const handleGoTo = (product) => {
  dispatch(goToProduct(product));
  navigate('/productfull');
}
  const selectCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setWholeData(products);
    } else {
      const updatedItems = products.filter((item) => {
        return item.category === category;
      });
      setWholeData(updatedItems);
    }
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading ....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something Went Wrong</h2>;
  }

  const truncateTitle = (title, maxWords) => {
    const words = title.split(" ");
    if (words.length <= maxWords) {
      return title;
    }
    return words.slice(0, maxWords).join(" ") + " ...";
  }; 
  return (
    <section>
      <div className="main-section">
        <h2>Welcome to the Store</h2>
        <h3>Products</h3>
        <div className="categories">
          {[
            "all",
            "men's clothing",
            "women's clothing",
            "jewelery",
            "electronics",
          ].map((category) => (
            <h5
              key={category}
              onClick={() => selectCategory(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </h5>
          ))}
        </div>
        <div className="productsWrapper">
          {wholeData.map((product) => (
            <div className="card-container" key={product.id}>
              <div className="card-img">
                <img
                  src={product.image}
                  alt="products-images"
                  onClick={() => handleGoTo(product)}
                />
              </div>
              <div className="card-info">
                <p className="text-title">{truncateTitle(product.title, 3)}</p>
              </div>
              <div className="card-footer">
                <span className="text-title"> ₹ {product.price}</span>
                <div className="card-button">
                  <svg
                    className="svg-icon"
                    viewBox="0 0 20 20"
                    onClick={() => handleAdd(product)}
                  >
                    <svg
                      className="svg-icon"
                      viewBox="0 0 20 20"
                      onClick={() => handleAdd(product)}
                    >
                      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                    </svg>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}