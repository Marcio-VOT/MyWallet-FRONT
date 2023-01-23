import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import axios from "axios";
import FooterRegistros from "./FooterRegistros";
import TopRegistros from "./TopRegistros";

export default () => {
  const URL = `${process.env.REACT_APP_API_URL}move-data`;
  const { config } = useContext(LoginContext);
  const [dataList, setDataList] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(URL, config)
      .then((ans) => {
        console.log(ans.data);
        setDataList(ans.data[1]);
        setTotal(ans.data[0]);
      })
      .catch((err) => {
        //navigate("/");
        console.log(err.response.data);
      });
  }, []);
  return (
    <ContainerStyle>
      <TopRegistros />
      <MovePlace>
        {dataList[0] === undefined ? (
          <EmptData>
            Não há registros de <br /> entrada ou saída
          </EmptData>
        ) : (
          dataList.map(({ date, disc, value, type }, index) => (
            <TransactionContainer key={index}>
              {" "}
              <DateFormat>{date}</DateFormat> <DiscFormat>{disc}</DiscFormat>{" "}
              <ValueColor color={type}>{value}</ValueColor>
            </TransactionContainer>
          ))
        )}{" "}
        {dataList[0] !== undefined && <span>Saldo{total}</span>}
      </MovePlace>
      <FooterRegistros />
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  height: 100vh;
  background-color: #8c11be;
`;
const EmptData = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #868686;
`;
const TransactionContainer = styled.div``;
const ValueColor = styled.span`
  color: ${(props) => (props.color ? "green" : "red")};
`;
const DateFormat = styled.span``;
const DiscFormat = styled.span``;
const MovePlace = styled.div`
  position: relative;
  display: column;
  width: 87%;
  height: calc(100vh - 78px - 153px);
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 6.5%;
  margin-top: 20px;
`;
