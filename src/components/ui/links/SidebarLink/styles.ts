import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style-type: none;
`;

export const StyledLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  white-space: nowrap;
  display: inline;
  margin-right: 24px;
  margin-bottom: 0;

  transition: color 0.22s;
  transition-duration: 0.22s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: color;

  &:hover {
    color: black;
  }

  @media screen and (min-width: 944px) {
    white-space: normal;
    display: block;
    margin-right: 0;
    margin-bottom: 24px;
  }

  color: ${({ active }) => (active ? "black" : "#50287d")};
`;
