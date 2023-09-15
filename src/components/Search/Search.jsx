import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../store/cartSlice";

export default function Search({ inputValue, setInputValue }) {
  const [searchedData, setSearchData] = useState([]);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const searchBoxRef = useRef(null);
  const { data: products, status } = useSelector((state) => state.product);
  
  useEffect(() => {
    const filterData = products.filter((item) => {
      return item.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    if (inputValue) {
      setSearchData(filterData);
      setIsSearchBoxVisible(true);
    } else {
      setSearchData([]);
      setIsSearchBoxVisible(false);
    }
  }, [inputValue, products]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoTo = (product) => {
    dispatch(goToProduct(product));
    navigate("/productfull");
    setSearchData([]);
    setInputValue("");
    setIsSearchBoxVisible(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        setIsSearchBoxVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={isSearchBoxVisible ? "searchBox" : "hide"}
      ref={searchBoxRef}
    >
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
