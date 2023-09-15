import React from "react";
import "./Banner.scss";
import bannerImg from "../../assets/shoppingAll.avif";
import { useNavigate } from "react-router-dom";
export default function Banner() {
    const navigate = useNavigate()
  return (
    <div className="bannerBox">
      <div className="bannerBoxIn">
        <div className="text-side">
            <div className="text">
                <h3>Want to Explore all at once ?</h3>
                <button onClick={() => navigate("/exploreall")}>Explore All</button>
            </div>
        </div>
        <div className="img-side">
            <img src={bannerImg} alt="banner" />
        </div>
      </div>
    </div>
  );
}
