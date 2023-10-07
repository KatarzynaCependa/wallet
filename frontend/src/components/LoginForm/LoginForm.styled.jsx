import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 533px;
    background-color: var(--font-light);
  }
`;
export const StyledForm = styled.div`
  width: 100%;
  margin: 107px 20px;

  @media screen and (min-width: 768px) {
    margin: 40px 60px 62px;
  }
`;
export const StyledLogoMobile = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const StyledLogo = styled(StyledLogoMobile)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
`;
export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--switch-main);
  margin-bottom: 40px;
`;

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  color: var(--brand-logout);
  font-family: Circe;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 3px;
`;
export const StyledIcon = styled.div`
  padding-left: 10px;
`;
export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 2px;
  }
`;

export const StyledButton = styled.div`
  width: 100%;
  text-align: center;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: 1px solid var(--brand-primary);
  border-radius: 20px;
  padding: 13px 0;
  color: var(--brand-primary);
  background-color: var(--font-light);
  transition: all 150ms ease;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--bg-btn-focus);
      border: none;
      color: white;
    `};

  &:hover,
  &:focus {
    border: none;
    color: var(--font-light);
    background: var(--bg-btn-focus);
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px, rgba(0, 0, 0, 0.3) 3px 3px 4px,
      rgba(0, 0, 0, 0.2) -5px -4px 0px inset;
    transform: scale(1.05);
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
export const StyledButtonIcon = styled.div`
  background-color: white;
  padding-right: 10px;
`;
