import styled from "styled-components";

export const StyledAdaptiveRadio = styled.div`
  display: none;
  padding: 4px;
  min-height: 56px;
  background: #f3f5f7;
  border-radius: 28px;
  justify-content: space-between;

  @media screen and (min-width: 576px) {
    display: inline-flex;
    align-items: center;
  }
`;
