import styled from "styled-components";

export const StyledSupportForm = styled.section`
  width: 100%;
  background: #f3f5f7;
  padding: 48px 24px;

  @media screen and (min-width: 576px) {
    padding: 72px 28px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1160px) {
    flex-wrap: nowrap;
  }
`;

export const CustomerService = styled.div`
  width: 100%;

  @media screen and (min-width: 1160px) {
    max-width: 360px;
  }
`;

export const Heading = styled.h1`
  font-size: 34px;
  line-height: 48px;
  font-weight: 500;
  color: black;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const Span = styled.span`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: inherit;
  display: inline;

  @media screen and (min-width: 1160px) {
    display: block;
  }
`;

export const PhoneSupport = styled.a`
  font-size: 34px;
  line-height: 48px;
  font-weight: 500;
  color: #00e;
  display: block;
  outline: none;
  text-decoration: none;
`;

export const PhoneTitle = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #96a0aa;
  margin-bottom: 48px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 460px;

  @media screen and (min-width: 1160px) {
    max-width: 460px;
    margin-left: 40px;
  }
`;

export const Label = styled.label`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 23px;
  padding: 24px 0 8px;
  color: #28323c;
  border-bottom: 1px solid #b5bdc8;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    line-height: 22px;
    border-bottom: 2px solid #50287d;
  }

  &:focus {
    line-height: 22px;
    border-bottom: 2px solid #50287d;
  }
`;

export const LineInvalid = styled.div`
  height: 2px;
  background-color: red;
  position: relative;
  top: -2px;

  &:hover {
    height: 2px;
  }

  &:focus {
    height: 2px;
  }
`;

export const SpanError = styled.span`
  display: block;
  position: absolute;
  top: 67px;
  top: 56px;
  left: 0;
  font-size: 12px;
  line-height: 12px;
  color: red;
`;

export const ButtonContainer = styled.div`
  width: 184px;
`;
