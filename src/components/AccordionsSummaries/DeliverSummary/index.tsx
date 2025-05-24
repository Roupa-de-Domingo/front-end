import React from 'react';
import { MainContainer } from './styles';
import { useFinalizeOrderContext } from '../../../contexts/FinalizeOrderContext';

export const DeliverSummary: React.FC = () => {
  const { deliverAddress } = useFinalizeOrderContext();

  if (!deliverAddress.street) return <></>;

  return (
    <MainContainer>
      <p className="line-street-number">
        {deliverAddress.street} - {deliverAddress.number}
      </p>
      <p className="line-neighborhood">{deliverAddress.neighborhood}</p>
      <p className="line-complement">
        {deliverAddress.complement || 'Sem complemento'}
      </p>
      <p className="line--city-uf">
        {deliverAddress.city} - {deliverAddress.uf}
      </p>
      <p className="line-cep">{deliverAddress.cep}</p>
    </MainContainer>
  );
};
