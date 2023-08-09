import styled from "styled-components";

export const StyledListNews = styled.section`
  width: 100%;
  padding: 24px;
  max-width: 960px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    padding: 48px 28px;
  }
`;

export const SelectRadioContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const Selector = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const Radio = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const NewsList = styled.div`
  width: 100%;
  padding-right: 12px;

  @media screen and (min-width: 576px) {
    width: 66.66%;
  }

  @media screen and (min-width: 768px) {
    width: 66.66%;
    padding-right: 14px;
  }
`;

export const Contact = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
    width: 33.33%;
    padding-left: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 33.33%;
    padding-left: 14px;
  }
`;

export const Heading = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin-bottom: 24px;
`;

export const Adress = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
`;

export const Phone = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #5a646e;
  margin-top: 24px;
`;
