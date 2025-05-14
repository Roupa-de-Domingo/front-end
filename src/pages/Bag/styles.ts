import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 4fr 2fr;
  margin: 32px auto;
  width: 90%;
  max-width: 1600px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'products'
      'summary';
    padding: 0 16px;
    width: 100%;
  }
`;

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

export const ProductsContainer = styled.div`
  .header {
    align-items: center;
    border: 1px solid var(--neutral-300);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 16px;

    p {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .left-content {
    align-items: center;
    display: flex;
    gap: 16px;
  }

  .products {
    border: 1px solid var(--neutral-300);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
  }

  @media (max-width: 1200px) {
    grid-area: products;
  }
`;

export const ProductItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 800px) {
    align-items: normal;
    flex-direction: column;
  }
`;

export const ProductItemLeftContent = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 16px;

  img {
    border: 1px solid var(--neutral-300);
    border-radius: 4px;
    width: 80px;
  }

  .infos-container {
    display: flex;
    flex-direction: column;
  }

  .title,
  .size {
    font-weight: 500;
  }

  .ref {
    color: var(--neutral-400);
  }

  .size {
    font-size: 14px;
  }
`;

export const ProductItemRightContent = styled.div`
  display: flex;
  gap: 32px;

  .total-value {
    font-size: 18px;
    font-weight: 500;
    text-align: end;
    width: 100px;
  }

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const CountProduct = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
  }

  .increase,
  .decrease {
    background-color: transparent;
    border: 2px solid var(--neutral-500);
    color: var(--neutral-black);
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: var(--neutral-200);
    }
  }

  .increase {
    border-radius: 4px 0 0 4px;
  }

  .decrease {
    border-radius: 0 4px 4px 0;
  }

  p {
    border-top: 2px solid var(--neutral-500);
    border-bottom: 2px solid var(--neutral-500);
    padding: 8px 0;
    text-align: center;
    width: 60px;
  }

  .remove-product-btn {
    background-color: transparent;
    border: none;
    color: var(--status-error-950);
    cursor: pointer;
    width: fit-content;
  }

  @media (max-width: 800px) {
    .increase,
    .decrease {
      padding: 6px 12px;
      font-size: 14px;
    }

    p {
      font-size: 14px;
      width: 48px;
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

export const PurchaseSummaryBtns = styled.div`
  margin-top: 24px;
  .continue-shopping-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 16px;
    width: 100%;
  }
`;
