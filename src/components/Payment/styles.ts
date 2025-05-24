import styled from 'styled-components';

interface IPayment {
  selected?: boolean;
}

export const MainContainer = styled.div``;

export const SelectPaymentTypeButtonsContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    /* display: flex;
    flex-direction: column; */
  }
`;

export const PaymentTypeButton = styled.button<IPayment>`
  background-color: ${({ selected }) =>
    selected ? 'var(--neutral-black)' : 'transparent'};
  border: none;
  border: 2px solid var(--neutral-black);
  border-radius: 4px;
  color: ${({ selected }) =>
    selected ? 'var(--neutral-white)' : 'var(--neutral-black)'};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: ${({ selected }) => selected && '500'};
  gap: 4px;
  justify-content: center;
  padding: 10px;

  p {
    &:nth-child(2),
    &:nth-child(3) {
      font-size: 14px;
      font-weight: 600;
    }

    &:nth-child(2) {
      color: var(--status-success-500);
    }
  }

  @media (max-width: 1200px) {
    font-size: 14px;
    gap: 0;
    padding: 6px;
  }
`;

export const CashPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;

  .text-container {
    align-items: center;
    background-color: var(--status-warning-300);
    border-radius: 6px;
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 12px;
    padding: 16px;
  }

  p {
    font-weight: 500;
  }
`;
