import React from 'react';
import { MainContainer } from './styles';
import { MainTemplate } from '../../templates/MainTemplate';

export const TShirts: React.FC = () => {
  return (
    <MainTemplate>
      <MainContainer>
        <p> T-shirts</p>
      </MainContainer>
    </MainTemplate>
  );
};
