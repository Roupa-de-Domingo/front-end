import styled from 'styled-components';

export const NavigateMenuList = styled.div`
  align-items: center;
  background-color: var(--neutral-black);
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 0;

  a {
    align-items: center;
    color: var(--neutral-150);
    display: flex;
    gap: 8px;
    text-decoration: none;
  }
`;

export const AccessBtnsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;

  a {
    border: 2px solid var(--neutral-150);
    border-radius: 4px;
    color: var(--neutral-150);
    display: block;
    padding: 12px 16px;
    text-align: center;
    text-transform: uppercase;
    width: 250px;
  }
`;
