import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../store/cartSlice";

export default function Search({ inputValue, setInputValue }) {
  const [searchedData, setSearchData] = useState([]);

  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    const filterData = products.filter((item) => {
      return item.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    if (inputValue) {
      setSearchData(filterData);
    } else {
      setSearchData([]);
    }
  }, [inputValue, products]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoTo = (product) => {
    dispatch(goToProduct(product));
    navigate("/productfull");
    setSearchData([]);
    setInputValue("");
  };
  return (
    <div className={inputValue ? "searchBox" : ""}>
      {searchedData.map((product) => (
        <div
          className="searchBoxImg"
          key={product.id}
          onClick={() => handleGoTo(product)}
        >
          <img src={product.image} className="searchImg" alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
}
