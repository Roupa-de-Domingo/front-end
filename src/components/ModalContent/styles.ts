import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const MainContainer = styled.div`
  left: 50%;
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;
