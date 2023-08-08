import styled from "styled-components";

export const StyledAssetValueRules = styled.section`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-top: 48px;
    padding-right: 28px;
    padding-bottom: 24px;
    padding-left: 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px;
  margin-bottom: 24px;
  margin-left: 0;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  width: 100%;
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: black;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const Link = styled.a`
  display: block;
  max-width: 400px;
  margin-top: 48px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #50287d;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;
  max-width: 112px;

  @media screen and (min-width: 576px) {
    margin-top: 48px;
  }
`;
