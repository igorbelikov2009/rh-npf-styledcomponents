/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../topMenu/TopMenu/TopMenu";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const StyledLayout = styled.main`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
`;

const Layout = () => {
  return (
    <>
      {/* <StyledLayout>
        <Outlet />
      </StyledLayout> */}

      <TopMenu />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
