import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;

  transition: color 0.22s;
  transition-duration: 0.22s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: color;
`;

export const LinkLight = styled(StyledLink)`
  color: #b5bdc8;
  &:hover {
    color: white;
  }
`;

export const LinkLightActive = styled(StyledLink)`
  font-weight: 500;
  color: white;
`;

export const LinkDark = styled(StyledLink)`
  color: #78828c;
  &:hover {
    color: #28323c;
  }
`;

export const LinkDarkActive = styled(StyledLink)`
  font-weight: 500;
  color: #28323c;
`;
