import styled from "styled-components";

export const StyledCalculator = styled.section`
  width: 100%;
  background-color: #fff;
  margin: 0 auto;
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: 576px) {
    padding: 0 28px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

export const Heading = styled.h2`
  display: block;
  font-size: 13px;
  color: #5a646e;
  margin-bottom: 24px;
  margin-left: 24px;

  @media screen and (min-width: 576px) {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Subheading = styled.h1`
  display: block;
  font-size: 34px;
  line-height: 48px;
  color: #28323c;
  margin-bottom: 24px;
  margin-left: 24px;

  @media screen and (min-width: 576px) {
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 55px;
    line-height: 73.54px;
    margin-bottom: 44px;
  }
`;

export const Block = styled.div`
  width: 100%;
  position: relative;
`;

export const Box = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Sliders = styled.div`
  width: calc(100% - 48px);
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 576px) {
    width: 63.53%;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (min-width: 1024px) {
    width: 41.66%;
    margin-bottom: 96px;
  }
`;

export const AgeBlock = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const RadioContainer = styled.div`
  min-width: 136px;
  max-width: 136px;
  margin-right: 0;
  margin-bottom: 24px;
  position: relative;

  @media screen and (min-width: 576px) {
    margin-right: 24px;
    margin-bottom: 0px;
  }
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: block;
`;

export const CheckboxInfo = styled.p`
  font-size: 11px;
  line-height: 15px;
  color: #5a646e;
`;

export const GraphContainer = styled.div`
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 47.92%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;
