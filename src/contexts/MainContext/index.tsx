import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoginData } from '../../interfaces/user';
import Cookies from 'js-cookie';
import { ITShirtInBag } from '../../interfaces/product';
import { IParcel } from '../../interfaces/order';

interface MainProviderType {
  dataBag: ITShirtInBag[] | undefined | null;
  setDataBag: React.Dispatch<
    React.SetStateAction<ITShirtInBag[] | undefined | null>
  >;

  isLoading: boolean;
  loginData: LoginData | undefined;
  setLoginData: React.Dispatch<React.SetStateAction<LoginData | undefined>>;
  getLoginData: () => LoginData | undefined;

  totalValueBagPix: number | undefined;
  totalValueBagCreditCard: number | undefined;
  totalProductsInBag: number | undefined;

  parcelCreditCardQuantity: (totalValue: number) => IParcel[];
}
const MainContext = createContext<MainProviderType | undefined>(undefined);

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataBag, setDataBag] = useState<ITShirtInBag[] | undefined | null>();

  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginData | undefined>();

  const getLocalStorageBag = () => {
    setIsLoading(true);
    const bag = JSON.parse(localStorage.getItem('bag') || '[]');

    setDataBag(bag);
  };

  const getLoginData = () => {
    if (loginData) {
      return loginData;
    }

    const getCookieLoginData = Cookies.get('loginData');

    if (getCookieLoginData) {
      const getCookieLoginDataParse: LoginData = JSON.parse(getCookieLoginData);

      setLoginData(getCookieLoginDataParse);
      return getCookieLoginDataParse;
    }
  };

  const totalValueBagPix = dataBag?.reduce(
    (cur, acc) => cur + acc.pricePix * acc.quantity,
    0
  );

  const totalValueBagCreditCard = dataBag?.reduce(
    (cur, acc) => cur + acc.priceCreditCard * acc.quantity,
    0
  );

  const parcelCreditCardQuantity = (totalValue: number): IParcel[] => {
    const maxInstallments = 10;
    const minInstallmentValue = 35;

    const result: IParcel[] = [];

    for (let i = 1; i <= maxInstallments; i++) {
      const value = totalValue / i;

      if (value >= minInstallmentValue || i === 1) {
        result.push({
          quantityParcela: i,
          valueParcela: parseFloat(value.toFixed(2)),
        });
      } else {
        break;
      }
    }

    return result;
  };

  const totalProductsInBag = dataBag?.reduce(
    (cur, acc) => cur + acc.quantity,
    0
  );

  useEffect(() => {
    getLocalStorageBag();
  }, []);

  return (
    <MainContext.Provider
      value={{
        dataBag,
        setDataBag,
        isLoading,
        loginData,
        setLoginData,
        getLoginData,
        totalValueBagPix,
        totalValueBagCreditCard,
        totalProductsInBag,
        parcelCreditCardQuantity,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used within a MainProvider');
  }
  return context;
};
