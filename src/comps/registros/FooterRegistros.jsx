import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import axios from "axios";
import { useEffect } from "react";

export default () => {
  return (
    <FooterBase>
      <Link to={"/nova-entrada"}>
        <button>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h1>Nova Entrada</h1>
        </button>
      </Link>
      <Link to={"/nova-saida"}>
        <button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h1>Nova Saida</h1>
        </button>
      </Link>
    </FooterBase>
  );
};
const FooterBase = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  padding-left: 6.5%;
  padding-right: 6.5%;
  padding-bottom: 16px;
  a {
    width: 48%;
  }
  button {
    background-color: transparent;
    width: 100%;
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
