import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  IAccordionExpanded,
  ICreditCard,
  IdeliverAddress,
  IFreight,
  IPaymentSelected,
} from '../../interfaces/order';

interface FinalizeOrderContextProviderType {
  accordionExpanded: IAccordionExpanded;
  setAccordionExpanded: React.Dispatch<
    React.SetStateAction<IAccordionExpanded>
  >;
  deliverAddress: IdeliverAddress;
  setdeliverAddress: React.Dispatch<React.SetStateAction<IdeliverAddress>>;
  freightSelected: IFreight;
  setFreightSelected: React.Dispatch<React.SetStateAction<IFreight>>;
  creditCardData: ICreditCard;
  setCreditCardData: React.Dispatch<React.SetStateAction<ICreditCard>>;
  paymentSelected: IPaymentSelected;
  setPaymentSelected: React.Dispatch<React.SetStateAction<IPaymentSelected>>;
}

const FinalizeOrderContext = createContext<
  FinalizeOrderContextProviderType | undefined
>(undefined);

export const FinalizeOrderContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [accordionExpanded, setAccordionExpanded] =
    useState<IAccordionExpanded>({
      deliver: true,
      freight: false,
      payment: false,
    });
  const [deliverAddress, setdeliverAddress] = useState({
    cep: '',
    city: '',
    complement: '',
    neighborhood: '',
    number: '',
    street: '',
    uf: '',
  });
  const [freightSelected, setFreightSelected] = useState<IFreight>({
    id: 0,
    title: '',
    deliveryTime: 0,
    value: 0,
  });
  const [creditCardData, setCreditCardData] = useState<ICreditCard>({
    numberCard: '',
    nameCard: '',
    expiration: '',
    cvv: '',
    parcel: 1,
  });
  const [paymentSelected, setPaymentSelected] = useState<IPaymentSelected>({
    type: 'creditCard',
    value: 0,
  });

  useEffect(() => {}, []);

  return (
    <FinalizeOrderContext.Provider
      value={{
        accordionExpanded,
        setAccordionExpanded,
        deliverAddress,
        setdeliverAddress,
        freightSelected,
        setFreightSelected,
        creditCardData,
        setCreditCardData,
        paymentSelected,
        setPaymentSelected,
      }}
    >
      {children}
    </FinalizeOrderContext.Provider>
  );
};

export const useFinalizeOrderContext = () => {
  const context = useContext(FinalizeOrderContext);
  if (!context) {
    throw new Error(
      'useFinalizeOrderContext must be used within a MainProvider'
    );
  }
  return context;
};
