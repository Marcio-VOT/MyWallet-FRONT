import React from "react";
import GlobalStyleComponent from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/UserData";
import Login from "./comps/loginUser/Login";
import Register from "./comps/loginUser/Register";
import RegistrosData from "./comps/registros/RegistrosData";

export default () => {
  return (
    <BrowserRouter>
      <GlobalStyleComponent />
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/home" element={<RegistrosData />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};
