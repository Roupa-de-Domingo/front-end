import React from 'react';
import { AddressInformation, MainContainer } from './styles';
import { AccordionFinalizeOrder } from '../AccordionFinalizeOrder';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { CepForm } from '../CepForm';
import { useFinalizeOrderContext } from '../../contexts/FinalizeOrderContext';
import { DeliverSummary } from '../AccordionsSummaries/DeliverSummary';
import { FreightOptions } from '../FreightOptions';
import { FreightSummary } from '../AccordionsSummaries/FreightSummary';
import InfoIcon from '@mui/icons-material/Info';

export const DeliverToAndFreight: React.FC = () => {
  const { accordionExpanded, setAccordionExpanded, deliverAddress } =
    useFinalizeOrderContext();

  return (
    <MainContainer>
      <div>
        <AccordionFinalizeOrder
          accordionExpanded={accordionExpanded.deliver}
          handleChangeAccordion={(_, expanded) =>
            setAccordionExpanded({
              ...accordionExpanded,
              deliver: expanded,
            })
          }
          accordionSummaryTitle={'Endereço de entrega'}
          accordionSummaryContent={<DeliverSummary />}
          accordionSummaryIcon={<LooksOneIcon />}
        >
          <CepForm />
        </AccordionFinalizeOrder>
      </div>
      <div>
        <AccordionFinalizeOrder
          accordionExpanded={accordionExpanded.freight}
          handleChangeAccordion={(_, expanded) =>
            setAccordionExpanded({
              ...accordionExpanded,
              freight: expanded,
            })
          }
          accordionSummaryTitle={'Frete'}
          accordionSummaryContent={<FreightSummary />}
          accordionSummaryIcon={<LooksTwoIcon />}
        >
          {!deliverAddress.street ? (
            <AddressInformation className="text-container">
              <InfoIcon />
              <p>Informe o endereço para escolher a forma de entrega</p>
            </AddressInformation>
          ) : (
            <FreightOptions />
          )}
        </AccordionFinalizeOrder>
      </div>
    </MainContainer>
  );
};
