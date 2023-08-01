import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 0;
  transition: color 0.22s;
  transition-duration: 0.22s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: color;

  &:last-of-type {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const LinkDark = styled(StyledLink)`
  color: #78828c;
  &:hover {
    color: #28323c;
  }
`;

export const LinkActive = styled(StyledLink)`
  font-weight: 500;
  color: #28323c;
  &:hover {
    color: blueviolet;
  }
`;
