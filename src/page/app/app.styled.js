import styled from "styled-components";
import { mq } from "styles/media-query";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledMiddleSpace = styled.section`
  width: 100%;
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${mq.desktop`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  `}
`;

export const StyledWorkspace = styled.div`
  width: 100%;
  max-width: 82rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledUpperTitle = styled.div`
  width: 100%;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-weight: 600;
  padding-top: 2rem;
  padding-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  font-size: 1.5rem;
`;


