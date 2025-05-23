import React from 'react';
import { MainContainer } from './styles';
import camisetaTeste from '../../assets/images/camiseta.png';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import { ITShirt } from '../../interfaces/product';
import { useNavigate } from 'react-router-dom';

interface ProductItem {
  product: ITShirt;
}

export const ProductItem: React.FC<ProductItem> = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigateToTShirtsDetails = (id: number) => {
    navigate(`/detalhes-camiseta/${id}`);
  };

  return (
    <MainContainer onClick={() => handleNavigateToTShirtsDetails(product.id)}>
      <img src={camisetaTeste} />

      <p className="title">
        Camiseta {product.gender} <span>{product.title}</span>
      </p>
      <p className="pix-price">
        <span>{formatRealCurrencyWithCipher(product.pricePix)}</span> no pix
      </p>
      <p className="credit-card-price">
        {formatRealCurrencyWithCipher(product.priceCreditCard)} em até{' '}
        <span>2x</span> de{' '}
        <span>{formatRealCurrencyWithCipher(product.priceCreditCard / 2)}</span>{' '}
        sem juros
      </p>
    </MainContainer>
  );
};
