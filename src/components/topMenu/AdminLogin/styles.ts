import styled from "styled-components";

export const FormAdminLogin = styled.form`
  width: 100%;
  max-width: 320px;
  padding: 36px;
  padding-top: 48px;
  background: #f3f5f7;
  position: fixed;
  top: 0%;

  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 576px) {
    top: 18%;
  }
`;

export const Heading = styled.p`
  display: block;
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
  display: flex;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 36px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
