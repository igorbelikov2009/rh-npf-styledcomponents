import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMenuMobil = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  width: 80%;
  padding: 20px 24px;
  background: #ffffff;
  box-shadow: 0px 12px 24px rgba(26, 65, 100, 0.24);

  right: ${({ visible }) => (visible ? "20%" : "100%")};
  transition: right 500ms ease;
`;

export const LogosContainer = styled.div`
  height: 24px;
  margin-left: 32px;
  margin-bottom: 38px;
  display: block;

  @media screen and (min-width: 576px) {
    height: 24px;
    margin-left: 80px;
    margin-bottom: 56px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #5a646e;
  display: block;
  margin-bottom: 16px;

  &:hover {
    color: #28323c;
  }

  &:nth-of-type(5) {
    margin-bottom: 32px;
  }

  &:nth-of-type(8) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 24px;

    &:nth-of-type(5) {
      margin-bottom: 48px;
    }

    &:nth-of-type(8) {
      margin-bottom: 64px;
    }
  }
`;

export const Title = styled.p`
  font-size: 13px;
  color: #b5bdc8;
  margin-bottom: 8px;
  display: block;

  @media screen and (min-width: 576px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const Phone = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #5a646e;
  display: block;
  margin-bottom: 16px;

  &:hover {
    color: #28323c;
  }
`;

export const PhoneNumber = styled.p`
  font-size: 18px;
`;

export const CopyRight = styled.p`
  font-size: 11px;
  color: #5a646e;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  line-height: 12px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;

  @media screen and (min-width: 576px) {
    top: 24px;
    left: 24px;
  }

  &:hover {
    border: 1px solid #50287d;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
`;
