import styled from "styled-components";

export const StyledBusinnesForm = styled.section`
  width: 100%;
  margin: 0 auto;
  background: #f3f5f7;
  padding: 24px;

  @media screen and (min-width: 576px) {
    padding-right: 28px;
    padding-left: 28px;
    padding-top: 48px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1160px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  font-size: 13px;
  line-height: 24px;
  color: #5a646e;
`;

export const Subheading = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: #28323c;
  margin-bottom: 24px;

  @media screen and (min-width: 776px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 72px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledFormContainer = styled.div`
  width: 100%;
  display: block;

  @media screen and (min-width: 1160px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LabelContainer = styled.div`
  width: 100%;
  max-width: 320px;

  @media screen and (min-width: 1160px) {
    max-width: 219px;
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
  margin-top: 24px;
`;
