import React, { ReactNode } from 'react';

import { MainProvider } from '../MainContext';
import { FiltersProvider } from '../FiltersContext';
import { FinalizeOrderContextProvider } from '../FinalizeOrderContext';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <MainProvider>
      <FiltersProvider>
        <FinalizeOrderContextProvider>{children}</FinalizeOrderContextProvider>
      </FiltersProvider>
    </MainProvider>
  );
};
