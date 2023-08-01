import React, { FC } from "react";
import { FooterLinkProps } from "../../../../interfaces/types";
import { Link, useMatch } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
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

const LinkDark = styled(StyledLink)`
  color: #78828c;
  &:hover {
    color: #28323c;
  }
`;

const LinkActive = styled(StyledLink)`
  font-weight: 500;
  color: #28323c;
  &:hover {
    color: blueviolet;
  }
`;

const FooterLink: FC<FooterLinkProps> = ({ children, to }) => {
  // параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
    end: to.length === 1,
  });

  if (match) {
    return <LinkActive to={to}> {children} </LinkActive>;
  }

  return <LinkDark to={to}> {children} </LinkDark>;
};

export default FooterLink;
