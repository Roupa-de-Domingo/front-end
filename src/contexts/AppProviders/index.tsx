import React, { ReactNode } from 'react';

import { MainProvider } from '../MainContext';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <MainProvider>{children}</MainProvider>;
};
