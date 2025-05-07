import styled from 'styled-components';

export const MainContainer = styled.div`
  gap: 16px;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0 32px;
`;
