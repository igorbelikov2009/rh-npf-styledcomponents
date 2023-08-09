import React, { FC } from "react";
import { styled } from "styled-components";

interface InputTitleProps {
  title: string;
  isActive: boolean; // путаница
  //   isDormancy: boolean; // состояние покоя
}

export const Title = styled.p<{ active: boolean }>`
  position: absolute;
  left: 0px;
  color: #78828c;
  transition: all 0.5s;

  top: ${({ active }) => (active ? "0px" : "24px")};
  font-size: ${({ active }) => (active ? "11px" : "16px")};
`;

export const AnotherTitle = styled.p<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  font-size: 11px;
  color: #78828c;
  transition: all 0.01s 0.49s;

  opacity: ${({ active }) => (active ? "1" : "0")};
`;

const InputTitle: FC<InputTitleProps> = ({ title, isActive }) => {
  return (
    <>
      <Title active={isActive}> {title} </Title>

      <AnotherTitle active={isActive}> {title} </AnotherTitle>
    </>
  );
};

export default InputTitle;
