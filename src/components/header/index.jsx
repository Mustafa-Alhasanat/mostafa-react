import React, { useEffect, useState, useContext } from "react";
import { IconContext } from "react-icons";
import { ImPlus } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import { BsXLg } from "react-icons/bs";
import constants from "utils/constants";
import colors from "styles/colors";
import { SearchContext } from "context/search-context";
import {
  StyledHeader,
  StyledLogoImg,
  StyledLogoMobileImg,
  StyledRightHeaderBox,
  StyledButtonsBox,
  StyledIconsBox,
  StyledENButton,
  StyledDrawer,
  StyledDrawerList,
  StyledDrawerTitle,
  StyledWrapper,
  StyledHeaderButton,
  StyledIcon,
  StyledItemsList,
  StyledItem,
  StyledListContainer,
} from "components/header/header.styles";

/**
 * The Header component that has the main routes.
 *
 * @return {Element} A styled component (header).
 */
function Header() {
  const [headerTransform, setHeaderTransform] = useState("none");
  const [drawerTransform, setDrawerTransform] = useState("translateX(-100%)");
  const { searchFieldRef, searchIsOpened, setSearchIsOpened } = useContext(SearchContext);

  const [moviesBtnIsHovered, setMoviesBtnIsHovered] = useState(false);
  const [tvShowsBtnIsHovered, setTVShowsBtnIsHovered] = useState(false);
  const [peopleBtnIsHovered, setPeopleBtnIsHovered] = useState(false);
  const [moreBtnIsHovered, setMoreBtnIsHovered] = useState(false);

  const hoveredStates = [
    moviesBtnIsHovered,
    tvShowsBtnIsHovered,
    peopleBtnIsHovered,
    moreBtnIsHovered,
  ];

  const hoveredSetters = [
    setMoviesBtnIsHovered,
    setTVShowsBtnIsHovered,
    setPeopleBtnIsHovered,
    setMoreBtnIsHovered,
  ];

  useEffect(() => {
    var lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll >= lastScroll) {
        setHeaderTransform("translate(0%, -100%)");
        setSearchIsOpened(false);
      } else if (currentScroll < lastScroll) {
        setHeaderTransform("none");
      }

      lastScroll = currentScroll;
    });
  }, []);

  return (
    <StyledHeader id="logo" transform={headerTransform}>
      <StyledHeaderButton mobile={false} desktop={true}>
        <StyledWrapper>
          <StyledLogoImg
            src={constants.images.desktopLogoImage}
            alt="desktop logo"
          />
        </StyledWrapper>
      </StyledHeaderButton>

      <StyledDrawer
        transform={drawerTransform}
        mobile={true}
        desktop={false}
        data-testid="left drawer"
      >
        {constants.drawerLists.map((list, index) => {
          return (
            <StyledDrawerList key={`drawer list number:${index}`}>
              {list.map((item, index) => {
                return (
                  <StyledDrawerTitle
                    key={`drawer list item number:${index}`}
                    data-testid={`drawer-${item}`}
                  >
                    {item}
                  </StyledDrawerTitle>
                );
              })}
            </StyledDrawerList>
          );
        })}
      </StyledDrawer>

      <StyledRightHeaderBox>
        <StyledButtonsBox mobile={false} desktop={true}>
          {constants.headerLists.map((list, index) => {
            return (
              <StyledHeaderButton
                key={`header button number: ${index}`}
                onMouseEnter={() => {
                  hoveredSetters[index](true);
                }}
                onMouseLeave={() => {
                  hoveredSetters[index](false);
                }}
                desktop={true}
                mobile={false}
                responsiveMargin={true}
              >
                <StyledWrapper
                  key={`wrapper number: ${index}`}
                  data-testid={list.title}
                >
                  {list.title}
                  {hoveredStates[index] ? (
                    <StyledListContainer
                      key={`list container number: ${index}`}
                    >
                      <StyledItemsList key={`item list number: ${index}`}>
                        {list.items.map((item) => {
                          return (
                            <StyledItem
                              data-testid={`${list.title}-${item}`}
                              key={`header list item: ${item}`}
                            >
                              {item}
                            </StyledItem>
                          );
                        })}
                      </StyledItemsList>
                    </StyledListContainer>
                  ) : null}
                </StyledWrapper>
              </StyledHeaderButton>
            );
          })}
        </StyledButtonsBox>

        <StyledHeaderButton
          desktop={false}
          mobile={true}
          responsiveMargin={true}
        >
          <StyledIcon size={{ mobile: 25, desktop: 30 }}>
            <IconContext.Provider value={{ size: "100%", color: colors.white }}>
              <StyledWrapper>
                <GoThreeBars
                  data-testid="three bars button"
                  onClick={() => {
                    setDrawerTransform((prev) =>
                      prev === "none" ? "translateX(-100%)" : "none"
                    );
                  }}
                />
              </StyledWrapper>
            </IconContext.Provider>
          </StyledIcon>
        </StyledHeaderButton>

        <StyledHeaderButton desktop={false} mobile={true}>
          <StyledWrapper>
            <StyledLogoMobileImg
              src={constants.images.mobileLogoImage}
              alt="logo mobile"
            />
          </StyledWrapper>
        </StyledHeaderButton>

        <StyledIconsBox>
          {[
            {
              icon: true,
              desktop: true,
              mobile: false,
              responsiveMargin: true,
              size: { mobile: 16, desktop: 16 },
              value: { size: "100%", color: colors.white },
              content: <ImPlus key="plus" />,
            },
            {
              icon: false,
              content: (
                <StyledENButton key="en button" mobile={false} desktop={true}>
                  EN
                </StyledENButton>
              ),
            },
            {
              icon: true,
              desktop: true,
              mobile: true,
              responsiveMargin: true,
              size: { mobile: 15, desktop: 17 },
              value: { size: "100%", color: colors.white },
              content: <FaBell key="bell" />,
            },
            {
              icon: true,
              desktop: true,
              mobile: true,
              responsiveMargin: true,
              size: { mobile: 30, desktop: 35 },
              value: { size: "100%", color: colors.white },
              content: <IoPersonCircle key="person" />,
            },
            {
              icon: true,
              desktop: true,
              mobile: true,
              responsiveMargin: true,
              size: { mobile: 20, desktop: 23 },
              testId: "search button",
              onClick: () => {
                setSearchIsOpened(!searchIsOpened);
                setTimeout(() => {
                  searchFieldRef.current.focus();
                }, 100);
              },
              content: searchIsOpened ? (
                <BsXLg color={colors.white} />
              ) : (
                <TbSearch color="cyan" key="search" />
              ),
            },
          ].map((item, index) => {
            return item.icon ? (
              <StyledHeaderButton
                desktop={item.desktop}
                mobile={item.mobile}
                responsiveMargin={item.responsiveMargin}
                key={`header button number: ${index}`}
                onClick={item.onClick}
                data-testid={item.testId}
              >
                <StyledIcon
                  size={item.size}
                  key={`header icon number: ${index}`}
                >
                  <IconContext.Provider
                    key={`icon provider number: ${index}`}
                    value={{ size: "100%" }}
                  >
                    <StyledWrapper key={`header wrapper number: ${index}`}>
                      {item.content}
                    </StyledWrapper>
                  </IconContext.Provider>
                </StyledIcon>
              </StyledHeaderButton>
            ) : (
              item.content
            );
          })}
        </StyledIconsBox>
      </StyledRightHeaderBox>
    </StyledHeader>
  );
}

export default Header;
