/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firstBlock, secondBlock, thirdBlock } from "../../data/footerData";
import Logotypes from "../areCommon/Logotypes/Logotypes";
import FooterLink from "../ui/links/FooterLink";
import {
  AdminLink,
  AdminParagraph,
  Column,
  Content,
  Copyright,
  CopyrightLink,
  IconLogo,
  LogosContainer,
  LogotypeContainer,
  Nav,
  PhoneContainer,
  PhoneNumber,
  StyledFooter,
  TopBlockFooter,
} from "./styles";

const Footer: FC = () => {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();
  const handlerAdminLink = () => {
    if (isAuth) {
      return;
    } else {
      setAuth(true);
    }
  };

  return (
    <StyledFooter>
      <TopBlockFooter>
        <LogotypeContainer onClick={() => navigate("/", { replace: true })}>
          <Logotypes isBackgroundWhite />
        </LogotypeContainer>

        <LogosContainer>
          <IconLogo src="/icons/logoNapf.svg" alt="logo" />
          <IconLogo src="/icons/logoAeb.svg" alt="logo" />
          <IconLogo src="/icons/logoExpert.svg" alt="logo" />
        </LogosContainer>
      </TopBlockFooter>

      <PhoneContainer>
        <PhoneNumber>8 800 200-47-66</PhoneNumber>
      </PhoneContainer>

      <Content>
        <Nav>
          <Column>
            {firstBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </Column>

          <Column>
            {secondBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}
          </Column>

          <Column>
            {thirdBlock.map((link) => (
              <FooterLink key={link.to} to={link.to}>
                {link.children}
              </FooterLink>
            ))}

            <AdminLink onClick={handlerAdminLink}>
              {isAuth ? (
                <FooterLink children="Панель администратора" to="/adminpanel" />
              ) : (
                <AdminParagraph>Панель администратора</AdminParagraph>
              )}
            </AdminLink>
          </Column>

          <Column>
            <CopyrightLink
              target="_blank"
              href="/pdf/infoOpening/archive-aktsionerov/01 Beneficiaries structure 16.03.2021.pdf"
            >
              Список акционеров Фонда и лиц, под контролем либо значительным влиянием которых находится Фонд
              (соответствует информации, направленной в Банк России 16.03.2021 г. для размещения на официальном сайте
              Банка России).
            </CopyrightLink>

            <Copyright>©2009-2019 НПФРенессанс. Пенсии.</Copyright>

            <Copyright>Лицензия № 383/2 от 16 июня 2009 года</Copyright>
          </Column>
        </Nav>
      </Content>
    </StyledFooter>
  );
};

export default Footer;
