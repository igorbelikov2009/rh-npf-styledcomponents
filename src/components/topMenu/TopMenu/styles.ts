import styled from "styled-components";

export const Header = styled.header<{ isBackgroundWhite: boolean }>`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  height: 72px;
  position: absolute;
  top: 0;
  border-bottom: ${({ isBackgroundWhite }) => (isBackgroundWhite ? "1px solid #e4e4e4" : "none")};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 18px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 576px) {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RigthBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contacts = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const PrivateOffice = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &:hover .top-menu_title {
    color: #b5bdc8;
  }
`;

export const PersonalArea = styled.p<{ isBackgroundWhite: boolean }>`
  margin-left: 12px;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  color: ${({ isBackgroundWhite }) => (isBackgroundWhite ? "#78828c" : "#b5bdc8;")};

  &:hover {
    color: ${({ isBackgroundWhite }) => (isBackgroundWhite ? "#000000" : "#ffffff")};
  }
`;
