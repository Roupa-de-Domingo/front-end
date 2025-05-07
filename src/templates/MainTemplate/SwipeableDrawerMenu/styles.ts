import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SwipeableDrawerMenuPropsStyledProps {
  pathActive?: boolean;
}

export const NavigateMenuList = styled.div`
  align-items: center;
  background-color: var(--neutral-black);
  border-radius: 16px 16px 0 0;
  border-top: 1px solid var(--neutral-150);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 0;

  a {
    align-items: center;
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

export const NavItem = styled(Link)<SwipeableDrawerMenuPropsStyledProps>`
  color: ${({ pathActive }) =>
    pathActive ? 'var(--primary)' : 'var(--neutral-150)'};
`;
