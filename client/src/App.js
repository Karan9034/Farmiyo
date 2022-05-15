import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
