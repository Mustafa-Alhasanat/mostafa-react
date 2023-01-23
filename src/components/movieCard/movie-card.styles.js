import styled from "styled-components";
import { mq } from "styles/media-query";
import colors from "styles/colors";

export const StyledCard = styled.div`
  display: flex;
  border: 0.0625rem solid ${colors.darkWhite};
  border-radius: 0.5rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  position: relative;
  box-shadow: 0 0.125rem 0.5rem rgb(0 0 0 / 10%);

  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.875rem;
  max-height: 8.8125rem;

  ${mq.desktop`
    width: calc((100vw - 18.25rem - 11.25rem) / 3);
    height: calc(((100vw - 18.25rem - 11.25rem) / 3) * 2.3);

    max-width: 12.5rem;
    max-height: 26.25rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.875rem;
  `}

  @media (min-width: 65rem) {
    width: calc((100vw - 18.25rem - 11.25rem) / 4);
    height: calc(((100vw - 18.25rem - 11.25rem) / 4) * 2.3);
  }

  @media (min-width: 77.5rem) {
    width: calc((100vw - 18.25rem - 11.25rem) / 5);
    height: calc(((100vw - 18.25rem - 11.25rem) / 5) * 2.1);
  }

  @media (min-width: 83.125rem) {
    max-width: 10.625rem;
    max-height: 23.75rem;
  }
`;

export const StyledRatingImg = styled.div`
  position: absolute;
  top: -1.1875rem;
  left: 0.625rem;
  width: 2.375rem;
  height: 2.375rem;
  background: ${colors.black};
  border-radius: 100%;
  z-index: 5;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-weight: 700;
  font-size: 0.75rem;
  display: none;

  ${mq.desktop`
    display: flex;
  `}
`;

export const StyledSuperscripted = styled.sup`
  height: 0.9375rem;
  font-weight: 700;
  font-size: 0.4375rem;
  opacity: 0.8;
`;

export const StyledVoteBar = styled.div`
  position: absolute;
  width: 2.375rem;
  height: 2.375rem;
  background: transparent;
  border-radius: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledArc = styled.svg`
  position: absolute;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 100%;
  z-index: 3;
`;

export const StyledArcPath = styled.path`
  fill: ${(props) => props.color};
`;

export const StyledNumericRatio = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 2.375rem;
  height: 2.375rem;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCornerDots = styled.div`
  background: transparent;
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  width: 2.375rem;
  height: 2.375rem;
  z-index: 7;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  color: ${colors.darkWhite};
  display: none;
  cursor: pointer;

  &:hover {
    color: ${colors.blurBlue};
  }

  ${mq.desktop`
    display: flex;
  `}
`;

export const StyledPoster = styled.img`
  max-width: 5.875rem;
  max-height: 100%;
  margin-right: 0.625rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  ${mq.desktop`
    width: 100%;
    max-width: 100%;
    margin-right: 0rem;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }
  `}
`;

export const StyledSubWindow = styled.ul`
  display: none;

  ${mq.desktop`
    display: flex;
    width: 8rem;
    height: 10.3125rem;
    background: ${colors.white};
    position: absolute;
    top: 2.5rem;
    right: -4rem;
    z-index: 12;
    border: 0.0625rem solid ${colors.lightGray};
    border-radius: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0rem;
  `}
`;

export const StyledSubWindowItem = styled.li`
  width: 100%;
  min-height: 2.5rem;
  background: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.black};
  background: transparent;
  font-size: 0.8rem;
  font-weight: 600;
  padding-left: 0.9rem;
  border-bottom: 0.0625rem solid ${colors.lightGray};
  position: relative;
  opacity: 0.85;

  &:hover {
    color: ${colors.white};
    background: ${colors.darkGray};
    cursor: pointer;
  }
`;

export const StyledSubWindowTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
`;

export const StyledBlurred = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0.5rem;
  display: unset;
  backdrop-filter: ${(props) => (props.state ? "blur(1.25rem)" : "blur(0rem)")};
  background: ${(props) =>
    props.state
      ? `linear-gradient(135deg, ${colors.blurStartWhite}, ${colors.blurEndWhite})`
      : "transparent"};
  z-index: ${(props) => (props.state ? "7" : "6")};
  transition: 0.2s;
`;

export const StyledLowerSection = styled.div`
  position: relative;
  width: 100%;
  padding: 1.625rem 0.625rem 0.75rem 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.9rem;
`;

export const StyledName = styled.div`
  width: 100%;
  font-weight: 900;
  color: ${colors.black};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.3125rem;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
`;

export const StyledDate = styled.div`
  width: 100%;
  color: ${colors.black};
  margin: 0;
  padding: 0;
  opacity: 0.6;
`;

export const StyledOverview = styled.div`
  width: 98%;
  height: 1.875rem;
  margin-bottom: 0.9375rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 1.25rem;
  display: -webkit-box;

  ${mq.desktop`
    display: none;
  `}
`;

export const StyledListModal = styled.div`
  display: none;

  ${mq.desktop`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 10;
    top: 0;
    left: 0;
  `}
`;
