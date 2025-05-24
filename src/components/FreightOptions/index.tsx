import React from 'react';
import { MainContainer, Option, OptionFooter } from './styles';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import { IFreight } from '../../interfaces/order';

const freightOptionsMock = [
  {
    id: 2,
    title:
      'Entrega Expressa | | Entrega no mesmo dia para pedidos realizados até às 11:00, após esse horário a entrega será no próximo dia útil',
    deliveryTime: 4,
    value: 12,
  },
  {
    id: 3,
    title: 'Transportadora Loggi',
    deliveryTime: 6,
    value: 12.46,
  },
  {
    id: 4,
    title: 'Correios - SEDEX',
    deliveryTime: 6,
    value: 12.94,
  },
];

export const FreightOptions: React.FC = () => {
  const { freightSelected, setFreightSelected, setAccordionExpanded } =
    useFinalizeOrderContext();

  const handleSelectFreightOption = (option: IFreight) => {
    setFreightSelected(option);
    setAccordionExpanded((old) => {
      return {
        ...old,
        freight: false,
        payment: true,
      };
    });
  };

  return (
    <MainContainer>
      {freightOptionsMock.map((option) => {
        return (
          <Option
            key={option.id}
            selected={option.id === freightSelected.id}
            onClick={() => handleSelectFreightOption(option)}
          >
            <p className="title">{option.title}</p>
            <OptionFooter>
              <p className="delivery-time">
                até {option.deliveryTime} dias úteis
              </p>
              <p className="delivery-free">
                {option.value === 0
                  ? 'Grátis'
                  : formatRealCurrencyWithCipher(option.value)}
              </p>
            </OptionFooter>
          </Option>
        );
      })}
    </MainContainer>
  );
};
