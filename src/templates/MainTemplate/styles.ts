import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  padding: 64px 32px;
  flex: 1;

  @media (max-width: 1200px) {
    padding: 32px 20px;
  }
`;
