import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  background-color: #fff;
  padding: 24px 24px 32px;
  border-top: 1px solid #e4e4e4;
  box-shadow: 0 8px 8px rgb(26 65 101 / 25%);

  @media (min-width: 576px) {
    padding: 48px 28px 32px;
  }
`;

export const TopBlockFooter = styled.div`
  width: 100%;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const LogotypeContainer = styled.div`
  text-decoration: none;
  outline: none;
  margin-bottom: 32px;

  @media (min-width: 576px) {
    margin-bottom: 0;
  }
`;

export const LogosContainer = styled.div``;

export const IconLogo = styled.img`
  margin-right: 24px;
  height: 24px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const PhoneContainer = styled.div`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 36px;
  }
`;

export const PhoneNumber = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
`;

export const Content = styled.div`
  width: 100%;
  display: block;

  @media (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Nav = styled.div`
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 768px) {
    width: calc(33.33% - 16px);
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (min-width: 1160px) {
    width: calc(25% - 18px);
    padding-left: 12px;
    padding-right: 12px;
  }

  &:first-of-type {
    @media (min-width: 768px) {
      padding-left: 0px;
    }
    @media (min-width: 1160px) {
      padding-left: 0px;
    }
  }

  &:nth-of-type(3) {
    @media (min-width: 768px) {
      padding-right: 0px;
    }
    @media (min-width: 1160px) {
      padding-right: 12px;
    }
  }

  &:last-of-type {
    margin-top: 48px;

    @media (min-width: 768px) {
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: 1160px) {
      text-align: end;

      width: calc(25% - 18px);
      padding-left: 12px;
      padding-right: 0;
      margin-top: 0;
    }
  }
`;

export const AdminLink = styled.div`
  margin-top: 16px;
`;

export const AdminParagraph = styled.p`
  cursor: pointer;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 0;
  color: #78828c;

  &:hover {
    color: #28323c;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CopyrightLink = styled.a`
  max-width: 360px;
  text-decoration: none;
  display: block;
  font-size: 11px;
  line-height: 15px;
  margin-bottom: 16px;
  color: #78828c;

  &:hover {
    color: #28323c;
  }

  @media (min-width: 1160px) {
    max-width: 100%;
  }
`;

export const Copyright = styled.p`
  color: #78828c;
  font-size: 11px;
  line-height: 24px;
`;
