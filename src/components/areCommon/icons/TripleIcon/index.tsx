import React, { FC, useState } from "react";
import styled from "styled-components";

interface TripleIconProps {
  icon: string;
  light: boolean;
  hovered: boolean;
}

export const StyledTripleIcon = styled.img`
  cursor: pointer;
  height: 24px;
  width: 24px;
`;

const TripleIcon: FC<TripleIconProps> = ({ icon, light, hovered }) => {
  const [isLocalHovered, setIsLocalHovered] = useState(false);

  let state = light ? "light" : "dark";
  if (isLocalHovered || hovered) state = "colored";

  return (
    <StyledTripleIcon
      onMouseOver={() => setIsLocalHovered(true)}
      onMouseOut={() => setIsLocalHovered(false)}
      src={`/icons/triple/${icon}/${state}.svg`}
      alt={icon}
    />
  );
};

export default TripleIcon;
