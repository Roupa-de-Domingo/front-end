import styled from 'styled-components';

export const MainContainer = styled.div``;

export const EmptyBag = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 32px auto;
  max-width: 90%;

  .subtitle {
    margin-bottom: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  .icons {
    cursor: pointer;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0;
`;

export const ProductItem = styled.div`
  flex: 1;

  display: flex;
  gap: 16px;

  img {
    align-self: flex-start;
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    width: 50px;
  }

  .product-title {
    font-size: 14px;
  }

  .infos-container {
    display: flex;
    flex-direction: column;
  }

  .size {
    font-weight: 500;
  }

  .gender,
  .ref {
    color: var(--neutral-400);
    font-size: 14px;
  }

  .size {
    font-size: 14px;
  }

  .cost {
    color: var(--neutral-400);
    font-size: 14px;
    span {
      font-weight: 500;
    }
  }
`;

export const PurchaseSummaryContainer = styled.div`
  align-self: self-start;
  background-color: var(--neutral-100);
  border: 1px solid var(--neutral-300);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  .title {
    font-size: 18px;
    font-weight: 500;
  }

  .line-item {
    display: flex;
    justify-content: space-between;
  }

  .shipping {
    p {
      &:nth-child(2) {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .total {
    p {
      &:nth-child(1) {
        font-weight: 600;
      }
    }
  }

  .total-info {
    text-align: end;

    p {
      &:nth-child(1) {
        font-size: 22px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 14px;
      }
      &:nth-child(3) {
        color: var(--status-success-500);
        font-weight: 500;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-area: summary;
  }
`;
