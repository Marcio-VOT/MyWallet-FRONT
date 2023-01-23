import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import axios from "axios";
import FooterRegistros from "./FooterRegistros";
import TopRegistros from "./TopRegistros";

export default () => {
  return (
    <ContainerStyle>
      <TopRegistros />
      <MovePlace></MovePlace>
      <FooterRegistros />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  height: 100vh;
  background-color: #8c11be;
`;

const MovePlace = styled.div`
  display: column;
  width: 87%;
  height: calc(100vh - 78px - 153px);
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 6.5%;
  margin-top: 20px;
`;
