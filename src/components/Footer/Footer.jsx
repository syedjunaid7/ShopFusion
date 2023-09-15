import React from "react";
import "./Footer.scss";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="footerMain">
      <div className="footer">
        <div className="footerBox">
          <p onClick={() => scrollToTop()}>About</p>
          <p onClick={() => scrollToTop()}>FAQs</p>
          <p onClick={() => scrollToTop()}>News</p>
          <p onClick={() => scrollToTop()}>Careers</p>
          <p onClick={() => scrollToTop()}>ContactUs</p>
        </div>
      </div>
    </section>
  );
}
