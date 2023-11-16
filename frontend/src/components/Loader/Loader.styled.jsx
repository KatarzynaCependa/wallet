import styled, { keyframes } from "styled-components";

const loaderspin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const loaderpulse = keyframes`
  0% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(2.5);
  }
`;

export const LoaderContainer = styled.div`
  /* background-color: var(--bg-modal-overlay); */
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: fixed;
  margin-top: 0px;
  top: 0px;
  z-index: 3;
`;

export const LoaderContent = styled.div`
  position: absolute;
  content: "";
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 170px;
  height: 170px;
  border-top: 6px solid var(--brand-primary);
  border-radius: 50%;
  animation: ${loaderspin} 1.8s infinite ease-in-out;

  &:before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    border-top: 6px solid var(--brand-secondary);
    border-radius: 50%;
    animation: ${loaderspin} 1.8s infinite ease-in-out;
  }
`;

export const LoaderIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LoaderImage = styled.div`
  animation: ${loaderpulse} alternate 900ms infinite;
`;
