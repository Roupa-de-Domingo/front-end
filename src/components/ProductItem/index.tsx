import React from 'react';
import { MainContainer } from './styles';
import camisetaTeste from '../../assets/images/camiseta.webp';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';

export const ProductItem: React.FC = () => {
  return (
    <MainContainer>
      <img src={camisetaTeste} />

      <p className="title">Camiseta Pop Corn</p>
      <p className="pix-price">
        <span>{formatRealCurrencyWithCipher(75)}</span> no pix
      </p>
      <p className="credit-card-price">
        {formatRealCurrencyWithCipher(78)} em até <span>2x</span> de{' '}
        <span>{formatRealCurrencyWithCipher(39)}</span> sem juros
      </p>
    </MainContainer>
  );
};
