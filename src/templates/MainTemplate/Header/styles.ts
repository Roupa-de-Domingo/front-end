import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderStyledProps {
  pathActive?: boolean;
}

export const MainContainer = styled.div<HeaderStyledProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 32px 64px;

  .menu-burger-container {
    display: none;
    color: var(--neutral-150);
    z-index: 1;
  }

  .logo {
    p {
      font-size: 24px;
      font-weight: 600;
    }
    width: fit-content;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    left: 0;
    padding: 40px;
    position: absolute;
    top: 0px;
    width: 100%;
    z-index: 0;

    a {
      align-items: center;

      display: flex;
      font-size: 22px;
      gap: 8px;
      text-transform: uppercase;
      text-decoration: none;
    }
  }

  .options {
    color: var(--primary);
    display: flex;
    gap: 24px;
    z-index: 1;

    i {
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    background-color: var(--neutral-black);
    padding: 16px;

    .menu-burger-container {
      display: flex;
    }

    .nav {
      display: none;
    }

    .logo {
      p {
        color: var(--neutral-150);
        font-size: 20px;
      }
    }

    .options {
      color: var(--neutral-150);
    }

    .person-icon {
      display: none;
    }
  }
`;

export const NavItem = styled(Link)<HeaderStyledProps>`
  color: ${({ pathActive }) =>
    pathActive ? 'var(--primary)' : 'var(--neutral-black)'};
`;
