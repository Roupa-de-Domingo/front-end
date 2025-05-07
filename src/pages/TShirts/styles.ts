import styled from 'styled-components';

interface TShirtsStyledProps {
  sortActive?: boolean;
}

export const MainContainer = styled.div``;

export const Banner = styled.div`
  img {
    height: auto;
    position: static;
    width: 100%;
  }
`;

export const FiltersBtnsContainer = styled.div`
  display: none;

  @media (max-width: 900px) {
    border-bottom: 1px solid var(--neutral-400);
    display: flex;
    gap: 16px;
    margin: 16px;
    padding: 16px 0;
  }

  button {
    background-color: transparent;
    border: 1px solid;
    border-radius: 4px;
    color: black;
    font-size: 12px;
    padding: 12px 16px;
    text-transform: uppercase;

    &:active {
      background-color: black;
      color: white;
    }
  }

  span {
    font-weight: 600;
  }
`;

export const SortsContainer = styled.div`
  @media (max-width: 1200px) {
    padding: 16px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 7fr;

  @media (max-width: 1200px) {
    padding: 0 16px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FiltersContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const FiltersContainerMobile = styled.div`
  display: none;

  @media (max-width: 900px) {
    background-color: white;
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
  }

  .header {
    background-color: white;
    border-bottom: 1px solid var(--neutral-400);
    display: flex;
    justify-content: center;
    padding: 16px;
    position: fixed;
    z-index: 3;
    width: 100%;
  }

  .close-icon {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  .content {
    margin-top: 70px;
    padding: 16px;
  }
`;

export const SortsContainerMobile = styled(FiltersContainerMobile)`
  .content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sort-mobile-item-container {
    align-items: center;
    display: flex;
    gap: 16px;
    width: fit-content;
  }
`;

export const SortMobileItem = styled.p<TShirtsStyledProps>`
  font-weight: ${({ sortActive }) => (sortActive ? '600' : '400')};
  text-transform: uppercase;
`;

export const ProductsContainer = styled.div``;
