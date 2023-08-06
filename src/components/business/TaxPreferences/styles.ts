import styled from "styled-components";

export const StyledTaxPreferences = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: #fff;
  padding-top: 24px;
  padding-bottom: 48px;

  @media screen and (min-width: 1160px) {
    padding-top: 48px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (min-width: 576px) {
    padding: 0 28px;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Selections = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  padding: 24px 16px;
  flex-direction: row;

  @media screen and (min-width: 1160px) {
    flex-direction: column;
    max-width: 292px;
  }
`;

export const Button = styled.button<{ active: boolean }>`
  display: block;
  border: 1px solid #e5e1e1;
  background: #ffffff;
  padding: 36px 24px;
  cursor: pointer;
  transition: box-shadow 0.3s, width 0.3s, height 0.3s, top 0.3s, left 0.3s;
  transition-property: box-shadow, width, height, top, left;
  transition-duration: 0.3s, 0.3s, 0.3s, 0.3s, 0.3s;
  transition-timing-function: ease, ease, ease, ease, ease;
  transition-delay: 0s, 0s, 0s, 0s, 0s;

  &:first-of-type {
    margin-right: 12px;
    margin-bottom: 0px;

    @media screen and (min-width: 1160px) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }

  &:last-of-type {
    margin-left: 12px;

    @media screen and (min-width: 1160px) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 576px) {
    display: flex;
  }

  @media screen and (min-width: 1160px) {
    width: 100%;
  }

  width: ${({ active }) => (active ? "calc(100% + 16px)" : "100%")};
  height: ${({ active }) => (active ? "calc(100% + 16px)" : "100%")};
  left: ${({ active }) => (active ? "-8px" : "0")};
  top: ${({ active }) => (active ? "-8px" : "0")};
  box-shadow: ${({ active }) => (active ? "0px 4px 6px #d2dce6" : "")};
  border-radius: ${({ active }) => (active ? "6px" : "0")};
`;

export const Title = styled.p`
  display: block;
  font-size: 13px;
  line-height: 24px;
  color: #78828c;
  margin-left: 0;

  @media screen and (min-width: 576px) {
    margin-left: 24px;
  }
`;

export const Span = styled.span`
  display: block;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;

export const Options = styled.div`
  width: 100%;

  @media screen and (min-width: 1160px) {
    max-width: 528px;
    margin-left: 140px;
  }
`;

export const Heading = styled.h1`
  display: block;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 0;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 24px;
  }
`;

export const Block = styled.div`
  width: 100%;
`;

export const Subheading = styled.h2`
  color: #28323c;
  font-size: 18px;
  line-height: 1.5rem;
  font-weight: 500;
  letter-spacing: normal;
  margin: 24px 0;
`;

export const Description = styled.p`
  color: #5a646e;
  font-size: 16px;
  line-height: 1.5rem;
  margin: 12px 0;
  font-weight: 400;
`;
