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
import Logotypes from "../../areCommon/Logotypes/Logotypes";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuLinkProps } from "../../../interfaces/types";
import MenuLink from "../../ui/links/MenuLink";

export const Nav = styled.div`
  display: none;

  @media (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
    margin-left: 12px;
  }
`;

const TopMenu: FC = () => {
  const [isBackgroundWhite, setBackgroundWhite] = useState(true);

  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);
  const [isHamburgerHovered, setHamburgerHovered] = useState(false);

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
    console.log("LoginForm");
  };

  const openMenuMobil = () => {
    console.log("openMenuMobil");
  };

  const openAdminLogin = () => {
    console.log("AdminLogin");
  };

  return (
    <Header isBackgroundWhite={isBackgroundWhite}>
      <Container>
        <LeftBlock>
          <HamburgerContainer
            onMouseOver={() => setHamburgerHovered(true)}
            onMouseOut={() => setHamburgerHovered(false)}
            onClick={openMenuMobil}
          >
            <TripleIcon icon="Hamburger" light={!isBackgroundWhite} hovered={isHamburgerHovered} />
          </HamburgerContainer>

          <div onClick={() => navigate("/", { replace: true })}>
            <Logotypes isBackgroundWhite={isBackgroundWhite} />
          </div>

          <Nav>
            {TopMenuLinks.map((link) => (
              <MenuLink key={link.to} to={link.to} isBackgroundWhite={isBackgroundWhite}>
                {link.children}
              </MenuLink>
            ))}
          </Nav>
        </LeftBlock>

        <RigthBlock>
          <Contacts>
            <ContactsContainer>
              <ContactsPhone isBackgroundWhite={isBackgroundWhite} href="tel:+78002004766">
                8 800 200-47-66
              </ContactsPhone>

              <AdminLogin onClick={openAdminLogin} isBackgroundWhite={isBackgroundWhite}>
                администратор
              </AdminLogin>
            </ContactsContainer>
          </Contacts>

          <PrivateOffice
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
            onClick={openLoginForm}
          >
            <TripleIcon icon="User" light={!isBackgroundWhite} hovered={isPrivateOfficeHovered} />

            <PersonalArea isBackgroundWhite={isBackgroundWhite}>Личный кабинет</PersonalArea>
          </PrivateOffice>
        </RigthBlock>
      </Container>
    </Header>
  );
};

export default TopMenu;
