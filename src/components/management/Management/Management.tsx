import React, { useEffect, useRef, useState } from "react";
import GoverningBody from "../GoverningBody";
import BoardOfDirectors from "../BoardOfDirectors";
import Team from "../Team";
import AuditCommittee from "../AuditCommittee";
import ChiefAccountant from "../ChiefAccountant";
import TeamController from "../TeamController";
import GeneralMeetingOfShareholders from "../GeneralMeetingOfShareholders";
import { ISidebarLink } from "../../../interfaces/types";
import { BarContainer, BarIcon, BarPosition, Container, Content, Department, StyledManagement } from "./styles";
import DarkIcon from "../../areCommon/icons/DarkIcon";
import SidebarLink from "../../ui/links/SidebarLink";

const Management = () => {
  const block1 = useRef<HTMLDivElement>(null);
  const block2 = useRef<HTMLDivElement>(null);
  const block3 = useRef<HTMLDivElement>(null);
  const block4 = useRef<HTMLDivElement>(null);
  const block5 = useRef<HTMLDivElement>(null);
  const block6 = useRef<HTMLDivElement>(null);
  const block7 = useRef<HTMLDivElement>(null);
  const refBbarContainer = useRef<HTMLDivElement>(null);

  const [barContainerTop, setBarContainerTop] = useState(0);
  const [absolute, setAbsolute] = useState(true);
  const [idSidebarLink, setIdSidebarLink] = useState("0");
  const [iconTop, setIconTop] = useState(0);

  const [h00] = useState(452); // высота (topBlock - 100px)
  const [h01, setH01] = useState(0);
  const [h02, setH02] = useState(0);
  const [h03, setH03] = useState(0);
  const [h04, setH04] = useState(0);
  const [h05, setH05] = useState(0);
  const [h06, setH06] = useState(0);
  const [h07, setH07] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const sidebarLinks: ISidebarLink[] = [
    { itemName: "Правление", id: "0" },
    { itemName: "Совет директоров", id: "1" },
    { itemName: "Команда", id: "2" },
    { itemName: "Ревизионная комиссия", id: "3" },
    { itemName: "Главный бухгалтер", id: "4" },
    { itemName: "Контролер", id: "5" },
    { itemName: "Собрание акционеров", id: "6" },
  ];

  useEffect(() => {
    getTopBarContainer();
    changeStyleBarNav();
    getIconTop();

    document.addEventListener("scroll", scrollHandler);

    // "Этот код срабатывает при размонтировании!
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barContainerTop]);

  const scrollHandler = (event: any) => {
    getTopBarContainer();
    getTopAllComponents();
    setScrollY(window.scrollY);
  };
  // console.log(scrollY);

  const getTopBarContainer = () => {
    if (refBbarContainer.current) {
      setBarContainerTop(refBbarContainer.current.getBoundingClientRect().top);
    }
  };
  // console.log(barContainerTop);

  const changeStyleBarNav = () => {
    if (barContainerTop > 0) {
      setAbsolute(true);
    } else {
      setAbsolute(false);
    }
  };
  // console.log(absolute);

  const getTopAllComponents = () => {
    if (block1.current) {
      setH01(block1.current.getBoundingClientRect().height);
    }

    if (block2.current) {
      setH02(block2.current.getBoundingClientRect().height);
    }

    if (block3.current) {
      setH03(block3.current.getBoundingClientRect().height);
    }

    if (block4.current) {
      setH04(block4.current.getBoundingClientRect().height);
    }

    if (block5.current) {
      setH05(block5.current.getBoundingClientRect().height);
    }

    if (block6.current) {
      setH06(block6.current.getBoundingClientRect().height);
    }

    if (block7.current) {
      setH07(block7.current.getBoundingClientRect().height);
    }
  };

  /* Если не нравится эта логика, то можно использовать:
   Якорное меню с плавной прокруткой в ​​ReactJS , подробное руководство.
   https://medium.com/the-coders-guide-to-javascript/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2
  */
  const getIconTop = () => {
    if (scrollY >= h00 && scrollY < h00 + h01) {
      setIconTop(0);
      setIdSidebarLink("0");
    } else if (scrollY >= h00 + h01 && scrollY < h00 + h01 + h02) {
      setIconTop(1);
      setIdSidebarLink("1");
    } else if (scrollY >= h00 + h01 + h02 && scrollY < h00 + h01 + h02 + h03) {
      setIconTop(2);
      setIdSidebarLink("2");
    } else if (scrollY >= h00 + h01 + h02 + h03 && scrollY < h00 + h01 + h02 + h03 + h04) {
      setIconTop(3);
      setIdSidebarLink("3");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 && scrollY < h00 + h01 + h02 + h03 + h04 + h05) {
      setIconTop(4);
      setIdSidebarLink("4");
    } else if (scrollY >= h00 + h01 + h02 + h03 + h04 + h05 && scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21) {
      setIconTop(5);
      setIdSidebarLink("5");
    } else if (
      scrollY >= h00 + h01 + h02 + h03 + h04 + h05 + h06 - 21 &&
      scrollY < h00 + h01 + h02 + h03 + h04 + h05 + h06 + h07
    ) {
      setIconTop(6);
      setIdSidebarLink("6");
    }
  };

  const getID = (id: string) => {
    setIdSidebarLink(id);
  };

  return (
    <StyledManagement>
      <Container>
        <Content>
          <Department id="Правление" ref={block1}>
            <GoverningBody />
          </Department>

          <Department id="Совет директоров" ref={block2}>
            <BoardOfDirectors />
          </Department>

          <Department id="Команда" ref={block3}>
            <Team />
          </Department>

          <Department id="Ревизионная комиссия" ref={block4}>
            <AuditCommittee />
          </Department>

          <Department id="Главный бухгалтер" ref={block5}>
            <ChiefAccountant />
          </Department>

          <Department id="Контролер" ref={block6}>
            <TeamController />
          </Department>

          <Department id="Собрание акционеров" ref={block7}>
            <GeneralMeetingOfShareholders />
          </Department>
        </Content>

        <BarContainer ref={refBbarContainer}>
          <BarPosition absolute={absolute}>
            <BarIcon style={{ top: `${iconTop * 48}px` }}>
              <DarkIcon icon="Arrow Down" />
            </BarIcon>

            {sidebarLinks.map((link, index) => (
              <SidebarLink
                active={index === Number(idSidebarLink)}
                key={index}
                id={link.id}
                itemName={link.itemName}
                emitID={getID}
              />
            ))}
          </BarPosition>
        </BarContainer>
      </Container>
    </StyledManagement>
  );
};

export default Management;
