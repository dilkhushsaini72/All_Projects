import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AllImages from "./components/AllImages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<AllImages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
