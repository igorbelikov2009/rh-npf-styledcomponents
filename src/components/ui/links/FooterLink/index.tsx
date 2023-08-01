import React, { FC } from "react";
import { FooterLinkProps } from "../../../../interfaces/types";
import { useMatch } from "react-router-dom";
import { LinkActive, LinkDark } from "./styles";

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
