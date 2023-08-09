import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuLinkProps } from "../../../interfaces/types";
import Logotypes from "../../areCommon/Logotypes";
import DarkIcon from "../../areCommon/icons/DarkIcon";
import {
  Button,
  CopyRight,
  IconContainer,
  LogosContainer,
  Phone,
  PhoneLink,
  PhoneNumber,
  StyledLink,
  StyledMenuMobil,
  Title,
} from "./styles";

interface MenuMobilProps {
  closeMenuMobil: () => void;
  isVisible: boolean;
}

const MenuMobil: FC<MenuMobilProps> = ({ isVisible, closeMenuMobil }) => {
  const navigate = useNavigate();
  const [isBackgroundWhite] = useState(true);

  const topLinks: MenuLinkProps[] = [
    { to: "/about", children: "О Фонде" },
    { to: "/managment", children: "Руководство Фондом" },
    { to: "/info", children: "Раскрытие информации" },
    { to: "/investment", children: "Инвестиционная деятельность" },
    { to: "/business", children: "Для бизнеса" },
  ];
  const bottomLinks: MenuLinkProps[] = [
    { to: "/#calculator", children: "Калькулятор" },
    { to: "/support#form", children: "Написать нам" },
    { to: "/support#questionsAnswers", children: "Вопросы и ответы" },
  ];

  return (
    <StyledMenuMobil visible={isVisible}>
      <>
        <LogosContainer onClick={() => navigate("/", { replace: true })}>
          <Logotypes backgroundwhite={isBackgroundWhite} />
        </LogosContainer>

        {topLinks.map((link) => (
          <StyledLink key={link.to} to={link.to} onClick={closeMenuMobil}>
            {link.children}
          </StyledLink>
        ))}

        <Title> Клиентам </Title>

        {bottomLinks.map((link) => (
          <StyledLink key={link.to} to={link.to} onClick={closeMenuMobil}>
            {link.children}
          </StyledLink>
        ))}

        <Phone>
          <PhoneLink href="tel:+78002004766">
            <PhoneNumber>8 800 200-47-66</PhoneNumber>
          </PhoneLink>
        </Phone>
      </>

      <>
        <CopyRight>©2009-2019 НПФРенессанс. Пенсии</CopyRight>
        <CopyRight>Лицензия № 383/2 от 16 июня 2009 года</CopyRight>
      </>

      <Button>
        <IconContainer onClick={closeMenuMobil}>
          <DarkIcon icon="Cross" />
        </IconContainer>
      </Button>
    </StyledMenuMobil>
  );
};

export default MenuMobil;
