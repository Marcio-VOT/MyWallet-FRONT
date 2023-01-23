import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import { ThreeDots } from "react-loader-spinner";

import axios from "axios";

export default () => {
  const navigate = useNavigate();
  const { config } = useContext(LoginContext);
  const location = useLocation();
  const routeName = location.pathname.replace("/nova-", "");
  const type = routeName === "entrada";
  const [disc, setDisc] = useState("");
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);

  const URL = `${process.env.REACT_APP_API_URL}move-data`;

  function hadleSubmit(e) {
    e.preventDefault();
    setDisable(true);
    axios
      .post(
        URL,
        {
          disc,
          value,
          type,
        },
        config
      )
      .then(() => {
        setDisable(false);
        navigate("/home");
      })
      .catch((err) => {
        setDisable(false);
        alert(err.response.data.message);
      });
  }
  return (
    <NewTransactionContainer>
      <div>{type ? "Nova entrada" : "Nova saída"}</div>
      <form onSubmit={hadleSubmit}>
        <input
          disabled={disable}
          type="number"
          required
          placeholder="Valor"
          name="Valor"
          id="Valor"
          min={1}
          pattern="[0-9]+([,\.][0-9]+)?"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          disabled={disable}
          type="text"
          required
          placeholder="Descrição"
          name="descrição"
          id="descrição"
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
        />
        <button type="submit" disabled={disable}>
          {disable ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            `Salvar ${type ? "entrada" : "saída"}`
          )}
        </button>
      </form>
    </NewTransactionContainer>
  );
};

const NewTransactionContainer = styled.div`
  background: #8c11be;
  height: 100vh;
  div {
    padding-top: 25px;
    padding-left: 25px;
    padding-bottom: 40px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
  input {
    width: 87%;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin-left: 6.5%;
    margin-right: 6.5%;
    border-style: none;
    margin-bottom: 13px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  button {
    width: 87%;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    border-style: none;
    margin-left: 6.5%;
    margin-right: 6.5%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;
