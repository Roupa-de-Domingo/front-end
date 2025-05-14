import styled from 'styled-components';

interface TShirtsDetailsProps {
  available?: boolean;
  selected?: boolean;
}

export const MainContainer = styled.div``;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;

  @media (max-width: 1200px) {
    gap: 16px;
    padding: 32px 0;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ImgProductContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    img {
      height: auto;
      max-width: 500px;
      width: 100%;
    }
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 32px;
  max-width: 550px;

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 16px;
  }
`;

export const Title = styled.h2``;

export const Phrase = styled.p``;

export const SizesContainer = styled.div`
  .sizes-buttons {
    display: flex;
    gap: 6px;
  }
`;

export const SizeButton = styled.button<TShirtsDetailsProps>`
  background-color: ${({ selected }) => (selected ? 'black' : 'transparent')};
  border-radius: 4px;
  border: 1px solid
    ${({ available }) => (!available ? 'var(--neutral-200)' : 'black')};
  color: ${({ available, selected }) =>
    !available ? 'var(--neutral-200)' : selected ? 'white' : 'black'};
  cursor: pointer;
  font-size: 16px;
  height: 42px;
  width: 42px;
`;

export const GuideSizeButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-blue);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-blue-dark);
  }
`;

export const PriceContainer = styled.div`
  span {
    font-size: 24px;
    font-weight: 500;
  }
`;

export const BuyButton = styled.button`
  border: none;
  background-color: var(--primary);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const DeliveryContainer = styled.div`
  p {
    margin-bottom: 6px;
  }

  .input-container {
    display: flex;
    gap: 8px;
  }

  input {
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 20px;
  }

  button {
    background-color: black;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 20px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .error-msg {
    height: 23px;
    margin-top: 6px;
  }
`;
