import React from "react";
import { styled } from "styled-components";

export const StyledBusinnesImages = styled.section`
  width: 100%;
  position: relative;
  background-color: #fff;
  padding: 72px 24px 48px;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 120px;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    top: 0;
    left: 0;
    background: #f3f5f7;
    height: calc(25% + 42px);

    @media screen and (min-width: 576px) {
      height: calc(50% + 12px);
    }

    @media screen and (min-width: 1160px) {
      height: calc(50% + 36px);
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const Image = styled.img`
  max-width: 660px;
  width: 100%;
  margin-bottom: 0;

  @media screen and (min-width: 576px) {
  }

  &:first-of-type {
    @media screen and (min-width: 576px) {
      position: absolute;
      right: 0;
    }
  }

  &:last-of-type {
    margin-bottom: 24px;

    @media screen and (min-width: 576px) {
      margin-bottom: 0;
      position: relative;
      left: 0;
      bottom: 7em;
    }
  }
`;

const BusinnesImages = () => {
  return (
    <StyledBusinnesImages>
      <Container>
        <Image src="/images/businnes/table.jpg" alt="table" />
        <Image src="/images/businnes/workers.jpg" alt="workers" />
      </Container>
    </StyledBusinnesImages>
  );
};

export default BusinnesImages;
