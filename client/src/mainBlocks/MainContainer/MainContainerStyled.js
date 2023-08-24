import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-left: 0px;
  padding-right: 0px;

  @media (min-width: 600px) {
    max-width: 786px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (min-width: 960px) {
    max-width: 960px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 690px) {
    max-width: 786px;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (min-width: 1281px) {
    max-width: 1680px;
  }
`;
