import styled from "styled-components";

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    margin-bottom: 48px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 13px;
  color: #b5bdc8;
`;

export const CurrentValue = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-style: normal;
  color: #5a646e;
`;

export const Input = styled.input`
  width: 100%;
  appearance: none;
  outline: none;
  overflow: hidden;
  height: 4px;
  opacity: 1;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background-color: #b5bdc8;
  }

  &::-webkit-slider-thumb {
    background: #ecf0f1;
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 1px solid #f3f5f7;
    box-sizing: border-box;
    box-shadow: 0px 4px 6px rgba(26, 65, 101, 0.15);
    -webkit-appearance: none;
    box-shadow: -500px 0 0 500px #cedc01;
  }
`;
