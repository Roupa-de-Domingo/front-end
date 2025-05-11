import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 32px;

  @media (max-width: 1200px) {
    margin-top: 84px;
    padding: 0px;
  }
`;
