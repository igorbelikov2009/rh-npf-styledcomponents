import React, { FC, useEffect, useState } from "react";
import { StyledLink, StyledListItem } from "./styles";

interface SidebarLinkProps {
  itemName: string;
  active: boolean;
  id: string;
  emitID: (id: string) => void;
}

const SidebarLink: FC<SidebarLinkProps> = ({ itemName, id, active, emitID }) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (anchorTarget) {
      anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    emitID(id);
  };

  return (
    <StyledListItem>
      <StyledLink active={active} href={`#${itemName}`} id={id} onClick={handleClick}>
        {itemName}
      </StyledLink>
    </StyledListItem>
  );
};

export default SidebarLink;

/* Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
  https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
  */
