import React, { ReactNode } from 'react';

import { MainProvider } from '../MainContext';
import { FiltersProvider } from '../FiltersContext';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <MainProvider>
      <FiltersProvider>{children}</FiltersProvider>
    </MainProvider>
  );
};
