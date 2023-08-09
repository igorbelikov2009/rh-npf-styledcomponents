import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 24px 0 48px;
  border-top: 1px solid #e4e4e4;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 24px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #8967b1;

  &:hover {
    color: #50287d;
  }
`;

export const Date = styled.p`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
  margin-top: 24px;
`;
