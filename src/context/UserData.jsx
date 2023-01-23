import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return (
    <LoginContext.Provider
      value={{
        name,
        setName,
        token,
        setToken,
        config,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
