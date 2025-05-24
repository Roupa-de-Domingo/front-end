import React, { useEffect, useState } from 'react';
import {
  CashPaymentInfo,
  MainContainer,
  PaymentTypeButton,
  SelectPaymentTypeButtonsContainer,
} from './styles';
import { AccordionFinalizeOrder } from '../AccordionFinalizeOrder';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import Looks3Icon from '@mui/icons-material/Looks3';
import { ButtonDefault } from '../ButtonDefault';
import { CreditCardForm } from '../CreditCardForm';
import { formatRealCurrencyWithCipher } from '../../utils/formatters';
import InfoIcon from '@mui/icons-material/Info';
import { useMainContext } from '../../contexts/MainContext';
import { IParcel } from '../../interfaces/order';

export const Payment: React.FC = () => {
  const {
    accordionExpanded,
    setAccordionExpanded,
    paymentSelected,
    setPaymentSelected,
  } = useFinalizeOrderContext();
  const { parcelCreditCardQuantity, totalValueBagCreditCard } =
    useMainContext();

  const [lastParcelCreditCard, setLastParcelCreditCard] = useState<IParcel>({
    quantityParcela: 1,
    valueParcela: 0,
  });

  const handleChangePaymentType = (
    type: 'creditCard' | 'billet' | 'pix',
    value: number
  ) => {
    setPaymentSelected({ type, value });
  };

  useEffect(() => {
    const lastParcelCreditCard = totalValueBagCreditCard
      ? parcelCreditCardQuantity(totalValueBagCreditCard)[
          parcelCreditCardQuantity(totalValueBagCreditCard).length - 1
        ]
      : 0;

    if (lastParcelCreditCard !== 0)
      setLastParcelCreditCard(lastParcelCreditCard);
  }, [totalValueBagCreditCard]);

  return (
    <MainContainer>
      <AccordionFinalizeOrder
        accordionExpanded={accordionExpanded.payment}
        handleChangeAccordion={(_, expanded) =>
          setAccordionExpanded({
            ...accordionExpanded,
            payment: expanded,
          })
        }
        accordionSummaryTitle={'Pagamento'}
        //accordionSummaryContent={<DeliverSummary />}
        accordionSummaryIcon={<Looks3Icon />}
      >
        {totalValueBagCreditCard && (
          <SelectPaymentTypeButtonsContainer>
            <PaymentTypeButton
              selected={paymentSelected.type === 'creditCard'}
              onClick={() =>
                handleChangePaymentType('creditCard', totalValueBagCreditCard)
              }
            >
              <p>Cartão de Crédito</p>
              <p>
                {formatRealCurrencyWithCipher(totalValueBagCreditCard || 0)}
              </p>
              <p>
                até {lastParcelCreditCard.quantityParcela}x{' '}
                {formatRealCurrencyWithCipher(
                  lastParcelCreditCard.valueParcela
                )}
              </p>
            </PaymentTypeButton>
            <PaymentTypeButton
              selected={paymentSelected.type === 'billet'}
              onClick={() =>
                handleChangePaymentType(
                  'billet',
                  totalValueBagCreditCard - (5 / 100) * totalValueBagCreditCard
                )
              }
            >
              <p>Boleto</p>
              <p>
                {formatRealCurrencyWithCipher(
                  totalValueBagCreditCard - (5 / 100) * totalValueBagCreditCard
                )}
              </p>
              <p>5% OFF</p>
            </PaymentTypeButton>
            <PaymentTypeButton
              selected={paymentSelected.type === 'pix'}
              onClick={() =>
                handleChangePaymentType(
                  'pix',
                  totalValueBagCreditCard - (5 / 100) * totalValueBagCreditCard
                )
              }
            >
              <p>Pix</p>
              <p>
                {formatRealCurrencyWithCipher(
                  totalValueBagCreditCard - (5 / 100) * totalValueBagCreditCard
                )}
              </p>
              <p>5% OFF</p>
            </PaymentTypeButton>
          </SelectPaymentTypeButtonsContainer>
        )}
        {paymentSelected.type === 'creditCard' && <CreditCardForm />}
        {paymentSelected.type === 'billet' && (
          <CashPaymentInfo>
            <div className="text-container">
              <InfoIcon />
              <p>Ao clicar em "Finalizar compra" será gerado o boleto</p>
            </div>
            <ButtonDefault
              text="Finalizar compra"
              color="neutral-white"
              backgroundColor="primary"
              width={'100%'}
              type="submit"
            />
          </CashPaymentInfo>
        )}
        {paymentSelected.type === 'pix' && (
          <CashPaymentInfo>
            <div className="text-container">
              <InfoIcon />
              <p>Ao clicar em "Finalizar compra" será gerado o QRCode</p>
            </div>
            <ButtonDefault
              text="Finalizar compra"
              color="neutral-white"
              backgroundColor="primary"
              width={'100%'}
              type="submit"
            />
          </CashPaymentInfo>
        )}
      </AccordionFinalizeOrder>
    </MainContainer>
  );
};
