import styled from "styled-components";

export const Home = styled.div`
  @media screen and (max-width: 768px) {
    height: 282px;
    border: 2px solid red;
    margin: 32px 20px 0;
    border-radius: 10px;
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 58px;
    border: 2px solid orange;
    margin: 0 auto;
    border-radius: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
    border: 2px solid blue;
    margin: 46px 16px 0 549px;
    border-radius: 30px;
  }
`;
