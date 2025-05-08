import React, { useState } from 'react';
import { MainContainer, NavItem } from './styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { SwipeableDrawerMenu } from '../SwipeableDrawerMenu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const StyledMenuItem = (props: any) => (
  <MenuItem
    sx={{
      backgroundColor: 'transparent',
      borderBottom: '1px solid #ccc',
      color: 'black',
      padding: '12px 0',

      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:nth-last-child(1)': {
        border: 'none',
      },
    }}
    {...props}
  />
);

const navListData = [
  {
    title: 'CAMISETAS',
    path: '/camisetas',
    icon: <CheckroomIcon />,
  },
  {
    title: 'CANECAS',
    path: '/canecas',
    icon: <LocalCafeIcon />,
  },
];

const isAuthenticated = () => {
  const token = Cookies.get('token');

  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);

    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

export const Header: React.FC = () => {
  const [openSwipeableDrawerMenu, setOpenSwipeableDrawerMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickMenuAccount = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenuAccount = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const toggleOpenSwipeableDrawerMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenSwipeableDrawerMenu(open);
    };

  const handleShoppingBag = () => {
    navigate('/camisetas');
  };

  return (
    <MainContainer>
      <div
        className="menu-burger-container"
        //onClick={toggleOpenSwipeableDrawerMenu(true)}
      >
        <MenuIcon
          fontSize="large"
          onClick={toggleOpenSwipeableDrawerMenu(true)}
        />
      </div>{' '}
      <div className="logo">
        <p>ROUPA DE DOMINGO</p>
      </div>
      <nav className="nav">
        {navListData.map((item) => {
          return (
            <NavItem
              key={item.path}
              to={item.path}
              pathActive={location.pathname === item.path}
            >
              {item.icon} {item.title}
            </NavItem>
          );
        })}
      </nav>
      <div className="options">
        <i className="shopping-bag-icon" onClick={handleShoppingBag}>
          <ShoppingBagIcon fontSize="large" />
        </i>
        <i className="person-icon" onClick={handleClickMenuAccount}>
          <PersonIcon fontSize="large" />
        </i>
      </div>
      <SwipeableDrawerMenu
        openSwipeableDrawerMenu={openSwipeableDrawerMenu}
        setOpenSwipeableDrawerMenu={setOpenSwipeableDrawerMenu}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenuAccount}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            boxShadow: 'none',
            border: '1px solid #ccc',
            padding: '0px 16px',
            width: '220px',
          },
        }}
      >
        {isAuthenticated() ? (
          <>
            <StyledMenuItem onClick={handleCloseMenuAccount}>
              Minha conta
            </StyledMenuItem>
            <StyledMenuItem onClick={handleCloseMenuAccount}>
              Meus pedidos
            </StyledMenuItem>
            <StyledMenuItem onClick={handleCloseMenuAccount}>
              Sair
            </StyledMenuItem>
          </>
        ) : (
          <>
            <StyledMenuItem onClick={handleCloseMenuAccount}>
              Criar conta
            </StyledMenuItem>
            <StyledMenuItem onClick={handleCloseMenuAccount}>
              Entrar
            </StyledMenuItem>
          </>
        )}
      </Menu>
    </MainContainer>
  );
};
