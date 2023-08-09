/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Header,
  Container,
  LeftBlock,
  RigthBlock,
  Contacts,
  PrivateOffice,
  PersonalArea,
  ContactsContainer,
  ContactsPhone,
  AdminLogin,
  HamburgerContainer,
} from "./styles";
import TripleIcon from "../../areCommon/icons/TripleIcon";
import Logotypes from "../../areCommon/Logotypes";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuLinkProps } from "../../../interfaces/types";
import MenuLink from "../../ui/links/MenuLink";
import MenuMobil from "../MenuMobil";
import LoginForm from "../LoginForm";

export const Nav = styled.div`
  display: none;

  @media (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
    margin-left: 12px;
  }
`;

const TopMenu: FC = () => {
  const [backgroundwhite, setBackgroundWhite] = useState(true);
  const [isAdminLoginVisible, setAdminLoginVisible] = useState(false);

  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const [isHamburgerHovered, setHamburgerHovered] = useState(false);

  const [isMenuMobilVisible, setMenuMobilVisible] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  // console.log(pathname);

  const TopMenuLinks: MenuLinkProps[] = [
    { to: "/about", children: "О нас" },
    { to: "/investment", children: "Инвестиции" },
    { to: "/business", children: "Для бизнеса" },
    { to: "/news", children: "Новости" },
    { to: "/support", children: "Поддержка" },
    { to: "/contacts", children: "Контакты" },
  ];

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/about" ||
      pathname === "/business" ||
      pathname === "/info" ||
      pathname === "/investment" ||
      pathname === "/managment" ||
      pathname === "/news" ||
      pathname === "/notfoundpage" ||
      pathname === "/support" ||
      pathname === "/taxation"
    ) {
      setBackgroundWhite(false);
    } else {
      setBackgroundWhite(true);
    }
  }, [pathname, setBackgroundWhite]);

  const openLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    if (isLoginFormVisible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };
  const closeLoginForm = () => {
    setLoginFormVisible((prev) => !prev);
    if (isLoginFormVisible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const openMenuMobil = () => {
    setMenuMobilVisible(true);
    document.body.style.overflow = "hidden";
  };
  const closeMenuMobil = () => {
    setMenuMobilVisible(false);
    document.body.style.overflow = "";
  };

  const openAdminLogin = () => {
    setAdminLoginVisible(!isAdminLoginVisible);
  };
  const closeAdminLogin = () => {
    setAdminLoginVisible(false);
  };

  return (
    <Header backgroundwhite={backgroundwhite}>
      <Container>
        <LeftBlock>
          <HamburgerContainer
            onMouseOver={() => setHamburgerHovered(true)}
            onMouseOut={() => setHamburgerHovered(false)}
            onClick={openMenuMobil}
          >
            <TripleIcon icon="Hamburger" light={!backgroundwhite} hovered={isHamburgerHovered} />
          </HamburgerContainer>

          <div onClick={() => navigate("/", { replace: true })}>
            <Logotypes backgroundwhite={backgroundwhite} />
          </div>

          <Nav>
            {TopMenuLinks.map((link) => (
              <MenuLink key={link.to} to={link.to} backgroundwhite={backgroundwhite}>
                {link.children}
              </MenuLink>
            ))}
          </Nav>
        </LeftBlock>

        <RigthBlock>
          <Contacts>
            <ContactsContainer>
              <ContactsPhone backgroundwhite={backgroundwhite} href="tel:+78002004766">
                8 800 200-47-66
              </ContactsPhone>

              <AdminLogin onClick={openAdminLogin} backgroundwhite={backgroundwhite}>
                администратор
              </AdminLogin>
            </ContactsContainer>
          </Contacts>

          <PrivateOffice
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            onClick={openLoginForm}
          >
            <TripleIcon icon="User" light={!backgroundwhite} hovered={isPrivateOfficeHovered} />

            <PersonalArea backgroundwhite={backgroundwhite}>Личный кабинет</PersonalArea>
          </PrivateOffice>
        </RigthBlock>
      </Container>

      <LoginForm isVisible={isLoginFormVisible} closeLoginForm={closeLoginForm} />
      <MenuMobil isVisible={isMenuMobilVisible} closeMenuMobil={closeMenuMobil} />
    </Header>
  );
};

export default TopMenu;
