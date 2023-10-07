import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  visibility: hidden;
`;

export const Modal = styled(ReactModal)`
  padding: 15px 45px;
  border-radius: 25%;
  background-color: var(--bg-light);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 2;
`;

export const Text = styled.span`
  font-size: 17px;
  font-family: "Circe";
  color: var(--brand-primary);
  display: block;
  text-align: center;
  padding-top: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  padding: 15px 0;
  justify-content: center;
`;

export const ButtonConfirm = styled.button`
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 20px;
  border: none;
  padding: 13px 13px;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--brand-secondary);
    background-color: var(--bg-light);
    font-weight: 400;
    border-color: var(--brand-secondary);
    border: 1px solid var(--brand-secondary);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  text-align: center;
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: 1px solid var(--brand-primary);
  border-radius: 20px;
  padding: 13px 13px;
  color: var(--brand-primary);
  background-color: var(--font-light);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    border-color: red;
    border: 1px solid red;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
