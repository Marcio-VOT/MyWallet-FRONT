import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import axios from "axios";

export default () => {
  const { name, setName, setToken } = useContext(LoginContext);
  return (
    <StyleTop>
      <h1> Olá, {name} </h1>
      <ion-icon
        name="log-out"
        onClick={() => {
          setName("");
          setToken("");
        }}
      ></ion-icon>
    </StyleTop>
  );
};
const StyleTop = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    /* identical to box height */

    color: #ffffff;
  }
  ion-icon {
    font-size: 25px;
    color: #ffffff;
  }
`;
