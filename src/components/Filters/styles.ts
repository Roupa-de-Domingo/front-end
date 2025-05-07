import styled from 'styled-components';

export const MainContainer = styled.div`
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  .filter-selected-item {
    align-items: center;
    background-color: var(--neutral-400);
    border-radius: 4px;
    display: flex;
    gap: 6px;
    padding: 6px;
    transition: filter 0.3s;
    width: fit-content;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const FilterSession = styled.div`
  h3 {
    margin-bottom: 16px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }
`;
