import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionSummaryContentContainer,
  AccordionSummaryHeader,
  Title,
} from './styles';

interface IAccordionFinalizeOrderProps {
  accordionExpanded: boolean;
  setAccordionExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  accordionSummaryIcon: React.ReactNode;
  accordionSummaryTitle: string;
  accordionSummaryContent?: React.ReactNode;
  children: React.ReactNode;
}

export const AccordionFinalizeOrder: React.FC<IAccordionFinalizeOrderProps> = ({
  accordionExpanded,
  setAccordionExpanded,
  accordionSummaryIcon,
  accordionSummaryTitle,
  accordionSummaryContent,
  children,
}) => {
  return (
    <Accordion
      expanded={accordionExpanded}
      onChange={() => setAccordionExpanded((prev) => !prev)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <AccordionSummaryHeader>
          <i>{accordionSummaryIcon}</i>
          <Title>{accordionSummaryTitle}</Title>
        </AccordionSummaryHeader>

        <AccordionSummaryContentContainer>
          {accordionSummaryContent}
        </AccordionSummaryContentContainer>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
