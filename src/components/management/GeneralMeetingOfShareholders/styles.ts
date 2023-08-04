import styled from "styled-components";

export const StyledGeneralMeetingOfShareholders = styled.div``;

export const DepartmentTitle = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  font-weight: 500;
  margin-bottom: 48px;

  @media screen and (min-width: 576px) {
    font-size: 34px;
    line-height: 48px;
  }
`;

export const ManagementList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerOffisMan = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 576px) {
    width: 50%;
  }

  &:nth-of-type(2n) {
    padding-left: 0;

    @media screen and (min-width: 576px) {
      padding-left: 40px;
    }
  }
`;

export const Name = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #000000;
`;

export const Post = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #78828c;
  margin-top: 24px;
  margin-bottom: 24px;
`;
