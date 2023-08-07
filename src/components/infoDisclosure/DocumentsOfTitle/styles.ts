import styled from "styled-components";

export const StyledDocumentsOfTitle = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: #5a646e;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 48px;
  }
`;

export const List = styled.div`
  width: 100%;
`;
