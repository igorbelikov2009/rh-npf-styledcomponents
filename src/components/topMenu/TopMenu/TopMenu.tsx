/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { Header, Container, LeftBlock, RigthBlock, Contacts, PrivateOffice, PersonalArea } from "./styles";
import TripleIcon from "../../areCommon/icons/TripleIcon/TripleIcon";

const TopMenu = () => {
  const [isBackgroundWhite, setBackgroundWhite] = useState(true);
  const [isPrivateOfficeHovered, setPrivateOfficeHovered] = useState(false);

  return (
    <Header isBackgroundWhite={isBackgroundWhite}>
      <Container>
        <LeftBlock></LeftBlock>

        <RigthBlock>
          <Contacts></Contacts>

          <PrivateOffice
            onMouseOver={() => setPrivateOfficeHovered(true)}
            onMouseOut={() => setPrivateOfficeHovered(false)}
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
