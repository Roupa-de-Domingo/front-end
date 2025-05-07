import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  border: 1px solid var(--neutral-white);
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px;

  img {
    height: auto;
    position: static;
    width: 100%;

    @media (max-width: 800px) {
      width: 80%;
    }
  }

  .title,
  p {
    font-size: 18px;
    text-align: center;
  }

  .title {
    margin-bottom: 16px;
  }

  .pix-price {
    margin-bottom: 8px;
  }

  .credit-card-price {
    text-align: center;
  }

  span {
    font-weight: 600;
  }

  &:hover {
    border: 2px solid var(--neutral-200);
  }
`;
