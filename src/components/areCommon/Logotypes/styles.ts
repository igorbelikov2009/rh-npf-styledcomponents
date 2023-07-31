import styled from "styled-components";

export const Container = styled.a`
  text-decoration: none;
  outline: none;
`;

export const LogotypeLarge = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const LogotypeSmall = styled.div`
  display: block;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;
