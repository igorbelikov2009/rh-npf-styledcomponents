import styled from "styled-components";

export const StyledMyModal = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  display: ${({ visible }) => (visible ? "flex" : "none")};
`;

export const MyModalContent = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 960px;
  min-width: 250px;
`;
