import React, { useState } from 'react';
import { MainContainer } from './styles';
import { AccordionFinalizeOrder } from '../AccordionFinalizeOrder';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CepForm } from '../CepForm';

export const DeliverToAndFreight: React.FC = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(true);

  return (
    <MainContainer>
      <AccordionFinalizeOrder
        accordionExpanded={accordionExpanded}
        setAccordionExpanded={setAccordionExpanded}
        accordionSummaryTitle={'Endereço de entrega'}
        accordionSummaryIcon={<LooksOneIcon />}
      >
        <CepForm />
      </AccordionFinalizeOrder>
      <AccordionFinalizeOrder
        accordionExpanded={accordionExpanded}
        setAccordionExpanded={setAccordionExpanded}
        accordionSummaryTitle={'Frete'}
        accordionSummaryIcon={<LooksTwoIcon />}
      />
    </MainContainer>
  );
};
