import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import store from "./store/store";
import ProductFull from "./components/ProductFull/ProductFull";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import News from "./components/NewsSection/News";
import CheckOut from "./pages/CheckOut/CheckOut";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productfull" element={<ProductFull />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <News />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
