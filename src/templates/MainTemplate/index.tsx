import React from 'react';
import { useMedia } from 'react-use';
import { ContentContainer, MainContainer } from './styles';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  const isMobile = useMedia('(max-width: 1200px)');

  return (
    <MainContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </MainContainer>
  );
};
