import React from "react";
import GlobalStyleComponent from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

export default () => {
  return (
    <BrowserRouter>
      <GlobalStyleComponent />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
