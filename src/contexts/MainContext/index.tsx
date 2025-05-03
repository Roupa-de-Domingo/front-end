import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductInCart } from '../../interfaces/product';
import {
  Customer,
  CustomerById,
  PlanoPagamento,
} from '../../interfaces/customers';
import { LoginData } from '../../interfaces/user';
import Cookies from 'js-cookie';

interface MainProviderType {
  dataCart: ProductInCart[] | undefined | null;
  setDataCart: React.Dispatch<
    React.SetStateAction<ProductInCart[] | undefined | null>
  >;
  customerSelected: Customer | undefined | null;
  setCustomerSelected: React.Dispatch<
    React.SetStateAction<Customer | undefined | null>
  >;
  isLoading: boolean;
  loginData: LoginData | undefined;
  setLoginData: React.Dispatch<React.SetStateAction<LoginData | undefined>>;
  getLoginData: () => LoginData | undefined;
  getCustomerSelected: () => Customer | undefined;
  customerByIdSelected: CustomerById | undefined | null;
  setCustomerByIdSelected: React.Dispatch<
    React.SetStateAction<CustomerById | undefined | null>
  >;
  getCustomerByIdSelected: () => CustomerById | undefined | null;
  setPaymentPlan: React.Dispatch<
    React.SetStateAction<PlanoPagamento | undefined | null>
  >;
  paymentPlan: PlanoPagamento | undefined | null;
  getPaymentPlan: () => PlanoPagamento | undefined;
  totalValueCart: Number | undefined;
}
const MainContext = createContext<MainProviderType | undefined>(undefined);

export const MainProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dataCart, setDataCart] = useState<
    ProductInCart[] | undefined | null
  >();
  const [customerSelected, setCustomerSelected] = useState<
    Customer | undefined | null
  >();
  const [customerByIdSelected, setCustomerByIdSelected] = useState<
    CustomerById | undefined | null
  >();
  const [paymentPlan, setPaymentPlan] = useState<
    PlanoPagamento | undefined | null
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState<LoginData | undefined>();

  const getLocalStorageCart = () => {
    setIsLoading(true);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    setDataCart(cart);
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

  const getCustomerSelected = () => {
    if (customerSelected) {
      return customerSelected;
    }

    const getCustomerSelectedLocalStorage =
      localStorage.getItem('customerSelected');

    if (getCustomerSelectedLocalStorage) {
      const getCustomerSelectedLocalStorageParse: Customer = JSON.parse(
        getCustomerSelectedLocalStorage
      );
      setCustomerSelected(getCustomerSelectedLocalStorageParse);
      return getCustomerSelectedLocalStorageParse;
    }
  };

  const getCustomerByIdSelected = () => {
    if (customerByIdSelected) {
      return customerByIdSelected;
    }

    const getCustomerByIdSelectedLocalStorage = localStorage.getItem(
      'customerByIdSelected'
    );

    if (getCustomerByIdSelectedLocalStorage) {
      const getCustomerByIdSelectedLocalStorageParse: CustomerById = JSON.parse(
        getCustomerByIdSelectedLocalStorage
      );
      setCustomerByIdSelected(getCustomerByIdSelectedLocalStorageParse);
      return getCustomerByIdSelectedLocalStorageParse;
    }

    return null;
  };

  const getPaymentPlan = () => {
    if (paymentPlan) {
      return paymentPlan;
    }

    const getPaymentPlanLocalStorage = localStorage.getItem('playmentPlan');

    if (getPaymentPlanLocalStorage) {
      const getPaymentPlanLocalStorageParse: PlanoPagamento = JSON.parse(
        getPaymentPlanLocalStorage
      );
      setPaymentPlan(getPaymentPlanLocalStorageParse);
      return getPaymentPlanLocalStorageParse;
    }

    if (
      customerByIdSelected &&
      customerByIdSelected?.planosPagamento.length > 0 &&
      !paymentPlan &&
      !getPaymentPlanLocalStorage
    ) {
      const codplpag = customerByIdSelected.codplpag;
      const planDefault = customerByIdSelected.planosPagamento.find(
        (plan) => plan.codplpag === codplpag
      );

      localStorage.setItem('playmentPlan', JSON.stringify(planDefault));
      setPaymentPlan(planDefault);
      return planDefault;
    }
  };

  const totalValueCart = dataCart?.reduce(
    (cur, acc) => cur + acc.pvenda * acc.quantity,
    0
  );

  useEffect(() => {
    getLocalStorageCart();
  }, []);

  return (
    <MainContext.Provider
      value={{
        dataCart,
        setDataCart,
        isLoading,
        customerSelected,
        setCustomerSelected,
        loginData,
        setLoginData,
        getLoginData,
        getCustomerSelected,
        customerByIdSelected,
        getCustomerByIdSelected,
        setCustomerByIdSelected,
        setPaymentPlan,
        paymentPlan,
        getPaymentPlan,
        totalValueCart,
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
