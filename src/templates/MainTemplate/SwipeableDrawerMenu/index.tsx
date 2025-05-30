import React, { useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { AccessBtnsContainer, NavigateMenuList, NavItem } from './styles';
import { jwtDecode } from 'jwt-decode';

const drawerListData = [
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

interface SwipeableDrawerMenuProps {
  openSwipeableDrawerMenu: boolean;
  setOpenSwipeableDrawerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SwipeableDrawerMenu: React.FC<SwipeableDrawerMenuProps> = ({
  openSwipeableDrawerMenu,
  setOpenSwipeableDrawerMenu,
}) => {
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

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {}, []);

  return (
    <>
      <SwipeableDrawer
        anchor={'bottom'}
        open={openSwipeableDrawerMenu}
        onClose={toggleOpenSwipeableDrawerMenu(false)}
        onOpen={toggleOpenSwipeableDrawerMenu(true)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent', // deixa o fundo transparente
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            boxShadow: 'none', // remove sombra, se quiser
            backdropFilter: 'blur(10px)', // opcional: efeito de vidro fosco
          },
        }}
      >
        <NavigateMenuList>
          <AccessBtnsContainer>
            <Link to="/">Criar conta</Link>
            <Link to="/">Já sou cliente</Link>
          </AccessBtnsContainer>
          {drawerListData.map((item) => {
            return (
              <NavItem
                to={item.path}
                key={item.path}
                pathActive={location.pathname === item.path}
              >
                {item.icon} {item.title}
              </NavItem>
            );
          })}
        </NavigateMenuList>
      </SwipeableDrawer>
    </>
  );
};
