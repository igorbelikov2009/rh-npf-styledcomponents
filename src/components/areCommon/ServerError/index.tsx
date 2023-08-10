import React from "react";
import { styled } from "styled-components";

const StyledServerError = styled.h1`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 36px 0;

  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: red;
`;

const ServerError = () => {
  return (
    <>
      <StyledServerError>Запусти сервер: json-server --watch db.json --port 5000</StyledServerError>
    </>
  );
};

export default ServerError;
