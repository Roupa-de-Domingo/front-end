import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: 1200px) {
    padding: 32px 10px;
  }
`;
