import React from 'react';
import { MainContainer } from './styles';
import { MainTemplate } from '../../templates/MainTemplate';
import { DeliverToAndFreight } from '../../components/DeliverToAndFreight';

import { Summary } from '../../components/Summary';
import { Payment } from '../../components/Payment';

export const FinalizeOrder: React.FC = () => {
  return (
    <MainTemplate>
      <MainContainer>
        <DeliverToAndFreight />
        <Payment />
        <Summary />
      </MainContainer>
    </MainTemplate>
  );
};
