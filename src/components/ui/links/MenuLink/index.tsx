import React, { FC } from "react";
import { MenuLinkProps } from "../../../../interfaces/types";
import { useMatch } from "react-router-dom";
import { LinkDark, LinkDarkActive, LinkLight, LinkLightActive } from "./styles";

const MenuLink: FC<MenuLinkProps> = ({ children, to, backgroundwhite, ...props }) => {
  // параметром useMatch будет объект настройки
  const match = useMatch({
    path: to,
    // полностью ссылка включена или нет.
    // Если это главная страничка, то мы берём полный путь. Если не главная, то неполный путь.
    // to - это наша ссылка, если это главная страница, то to имеет длину единичку.
    end: to.length === 1,
  });
  // console.log(match);

  if (backgroundwhite) {
    if (match) {
      return <LinkDarkActive to={to}> {children} </LinkDarkActive>;
    } else {
      return <LinkDark to={to}> {children} </LinkDark>;
    }
  } else if (match) {
    return <LinkLightActive to={to}> {children} </LinkLightActive>;
  } else {
    return <LinkLight to={to}> {children} </LinkLight>;
  }
};

export default MenuLink;
