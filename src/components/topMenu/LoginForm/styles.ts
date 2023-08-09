/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";

export const StyledLoginForm = styled.form<{ visible: boolean }>`
  width: 100%;
  height: 576px;
  padding: 60px 48px;
  box-sizing: border-box;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #f3f5f7;
  box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);
  transition: all 0.5s ease;

  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transform: ${({ visible }) => (visible ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.01)")};

  @media screen and (min-width: 450px) {
    padding: 76px;
  }

  @media screen and (min-width: 576px) {
    width: 432px;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  line-height: 40px;
  color: black;
  text-align: center;
  margin-bottom: 36px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  padding-bottom: 20px;
  position: relative;
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

export const CheckboxContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 72px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  font-size: 13px;
  color: #50287d;
  text-align: center;
  margin-bottom: 28px;
`;

export const Span = styled.span`
  display: block;
  font-size: 13px;
  color: #50287d;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 11px;
  color: #b5bdc8;
  text-align: center;
`;
