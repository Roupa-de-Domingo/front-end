import React from 'react';
import { MainContainer, Option, OptionFooter } from './styles';
import { useFinalizeOrderContext } from '../../../contexts/FinalizeOrderContext';
import { formatRealCurrencyWithCipher } from '../../../utils/formatters';

export const FreightSummary: React.FC = () => {
  const { freightSelected } = useFinalizeOrderContext();

  if (!freightSelected.title) return <></>;

  return (
    <MainContainer>
      <Option>
        <p className="title">{freightSelected.title}</p>
        <OptionFooter>
          <p className="delivery-time">
            até {freightSelected.deliveryTime} dias úteis
          </p>
          <p className="delivery-free">
            {freightSelected.value === 0
              ? 'Grátis'
              : formatRealCurrencyWithCipher(freightSelected.value)}
          </p>
        </OptionFooter>
      </Option>
    </MainContainer>
  );
};
