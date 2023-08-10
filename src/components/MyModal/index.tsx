import React, { FC } from "react";
import { MyModalContent, StyledMyModal } from "./styles";

interface MyModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModal: FC<MyModalProps> = ({ children, isVisible, setVisible }) => {
  return (
    // <StyledMyModal visible={isVisible} onClick={() => setVisible(false)}>
    <StyledMyModal visible={isVisible}>
      <MyModalContent>{children}</MyModalContent>
    </StyledMyModal>
  );
};

export default MyModal;
