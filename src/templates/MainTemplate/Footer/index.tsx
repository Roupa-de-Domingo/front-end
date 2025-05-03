import React from 'react';
import { MainContainer } from './styles';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer: React.FC = () => {
  return (
    <MainContainer>
      <div className="questions">
        <h3>DÚVIDAS</h3>
        <Link to="/">Política de Privacidade e Segurança de Dados</Link>
        <Link to="/">Termos e Condições de Uso da Roupa de Domingo</Link>
        <Link to="/">Ajuda / FAQ</Link>
        <Link to="/">Solicitar troca/devolução</Link>
        <Link to="/">Fale com a gente</Link>
      </div>
      <div className="about">
        <h3>SOBRE</h3>
        <Link to="/">Sobre a Roupa de Domingo</Link>
      </div>
      <div className="contact">
        <h3>CONTATO</h3>
        <div>
          <Link to="/">
            {' '}
            <FacebookIcon />{' '}
          </Link>
          <Link to="/">
            {' '}
            <InstagramIcon />{' '}
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};
