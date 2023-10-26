import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const X = styled.div`
  position: sticky;
  bottom: 20px;
  left: 30px;
  z-index: 9999;
`;
export const Y = styled.div`
  position: sticky;
  bottom: 20px;
  z-index: 9999;
`;

export const BalanceNav = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;
