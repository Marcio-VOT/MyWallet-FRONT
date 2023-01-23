import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/UserData";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default () => {
  const { setToken, setName } = useContext(LoginContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  let URL = `${process.env.REACT_APP_API_URL}log-in`;
  let auxToken;
  function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);
    let promisse = axios.post(URL, { email, password });
    promisse.then((answer) => {
      auxToken = answer.data.token;
      setToken(auxToken);
      setName(answer.data.name);
      navigate("/home");
      setDisable(false);
    });
    promisse.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
    });
  }
  return (
    <LoginStyle>
      <h1>MyWallet</h1>
      <form onSubmit={handleSubmit}>
        <input
          disabled={disable}
          required
          placeholder="email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={disable}
          required
          placeholder="senha"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={disable} type="submit">
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
            "Entrar"
          )}
        </button>

        <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
          <h2>Primeira vez? Cadastre-se!</h2>
        </Link>
      </form>
    </LoginStyle>
  );
};
const LoginStyle = styled.div`
  display: column;
  width: 100%;
  height: 100vh;
  background-color: #8c11be;
  align-items: center;
  justify-content: center;
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 159px;
    margin-bottom: 24px;
    font-family: "Saira Stencil One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;

    color: #ffffff;
  }
  input {
    width: 80%;
    height: 45px;
    margin-left: 10%;
    margin-bottom: 6px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 45px;
    margin-left: 10%;
    background: #a328d6;
    border-radius: 4.63636px;
    border-style: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    margin-top: 25px;
  }
`;
