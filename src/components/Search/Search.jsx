import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import { goToProduct } from "../../store/cartSlice";

export default function Search({ inputValue, setInputValue }) {
  const [searchedData, setSearchData] = useState([]);
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);

  const searchBoxRef = useRef(null); // Create a ref for the searchBox div

  const { data: products, status } = useSelector((state) => state.product);
  useEffect(() => {
    const filterData = products.filter((item) => {
      return item.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    if (inputValue) {
      setSearchData(filterData);
      setIsSearchBoxVisible(true); // Show the searchBox when there is input
    } else {
      setSearchData([]);
      setIsSearchBoxVisible(false); // Hide the searchBox when there is no input
    }
  }, [inputValue, products]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoTo = (product) => {
    dispatch(goToProduct(product));
    navigate("/productfull");
    setSearchData([]);
    setInputValue("");
    setIsSearchBoxVisible(false); // Close the searchBox when an item is clicked
  };

  // Add an event listener to the document to close the searchBox when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setIsSearchBoxVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Unbind the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={isSearchBoxVisible ? "searchBox" : "hide"} ref={searchBoxRef}>
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
