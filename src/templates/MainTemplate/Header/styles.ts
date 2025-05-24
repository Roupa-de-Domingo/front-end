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
    img {
      border-radius: 50%;
      width: 80px;
    }
    width: fit-content;
  }

  .nav {
    display: flex;
    justify-content: center;
    gap: 30px;

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

  .shopping-bag-icon {
    position: relative;
  }

  .total-quantity-bag {
    align-items: center;
    background-color: var(--neutral-black);
    border-radius: 50%;
    display: flex;
    height: 32px;
    justify-content: center;
    left: 16px;
    position: absolute;
    top: -14px;
    width: 32px;

    p {
      color: var(--neutral-white);
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    background-color: var(--neutral-black);
    height: 84px;
    padding: 16px;
    position: fixed;
    z-index: 2;
    width: 100%;

    .menu-burger-container {
      display: flex;
    }

    .nav {
      display: none;
    }

    .logo {
      img {
        width: 45px;
      }
    }

    .options {
      color: var(--neutral-150);
    }

    .person-icon {
      display: none;
    }

    .total-quantity-bag {
      background-color: var(--primary);

      left: -16px;

      p {
        color: var(--neutral-white);
      }
    }
  }
`;

export const NavItem = styled(Link)<HeaderStyledProps>`
  color: ${({ pathActive }) =>
    pathActive ? 'var(--primary)' : 'var(--neutral-black)'};
`;
