import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import store from "./store/store";
import ProductFull from "./components/ProductFull/ProductFull";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productfull" element={<ProductFull />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
