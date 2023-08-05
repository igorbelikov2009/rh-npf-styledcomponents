import styled from "styled-components";

export const StyledCarouselHeader = styled.section`
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;

  @media screen and (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TitlesContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1300px) {
    margin-bottom: 48px;
  }
`;

export const CarouselTitle = styled.h1`
  font-size: 34px;
  line-height: 48px;
  color: #28323c;
  margin-bottom: 24px;
`;

export const CarouselSubtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  margin-bottom: 24px;
`;
