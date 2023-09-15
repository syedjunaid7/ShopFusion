import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./custom-styles.css";
import "bootstrap/dist/js/bootstrap.js";
import imageSlider from "../../data";

export default function () {
  return (
    <section className="hero">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
        </div>   
          <div className="carousel-inner">
          {imageSlider.map((item, id) => (
            <div className={`carousel-item ${id === 0 ? 'active' : ''}`} key={id}>
              <img src={item.imgSrc} class="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.Header}</h5>
                <p>
                  {item.Paragraph}
                </p>
              </div>
            </div>
            ))}
          </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
