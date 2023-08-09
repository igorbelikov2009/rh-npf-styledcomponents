import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNewsPage = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  margin-top: 72px;

  @media screen and (min-width: 576px) {
    padding-top: 48px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 660px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  margin-bottom: 24px;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  outline: none;
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  transform: rotate(90deg);
`;

export const LinkTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #96a0aa;
  display: block;
  margin-left: 12px;

  &:hover {
    color: black;
  }
`;
