import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import axios from "axios";

export default () => {
  return (
    <FooterBase>
      <button>
        <ion-icon name="add-circle-outline"></ion-icon>
        <h1>Nova Entrada</h1>
      </button>
      <button>
        <ion-icon name="remove-circle-outline"></ion-icon>
        <h1>Nova Saida</h1>
      </button>
    </FooterBase>
  );
};
const FooterBase = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  padding: 0 6.5% 16px 6.5%;
  button {
    background-color: transparent;
    width: 48%;
    height: 114px;
    position: relative;
    background: #a328d6;
    border-radius: 5px;
    border-style: none;
    h1 {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;

      color: #ffffff;
    }

    ion-icon {
      font-size: 20px;
      position: absolute;
      top: 8px;
      left: 8px;
      color: #ffffff;
    }
  }
`;
