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
  handleChangeAccordion: (
    event: React.SyntheticEvent,
    expanded: boolean
  ) => void;
  accordionSummaryIcon: React.ReactNode;
  accordionSummaryTitle: string;
  accordionSummaryContent?: React.ReactNode;
  children: React.ReactNode;
}

export const AccordionFinalizeOrder: React.FC<IAccordionFinalizeOrderProps> = ({
  accordionExpanded,
  handleChangeAccordion,
  accordionSummaryIcon,
  accordionSummaryTitle,
  accordionSummaryContent,
  children,
}) => {
  return (
    <Accordion
      expanded={accordionExpanded}
      onChange={handleChangeAccordion}
      sx={{
        border: '1px solid #D0D5DD',
        boxShadow: 'none',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // expandIcon={
        //   <Box sx={{ alignSelf: 'flex-start', mt: 1 }}>
        //     <ExpandMoreIcon />
        //   </Box>
        // }
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <AccordionSummaryContentContainer>
          <AccordionSummaryHeader>
            <i>{accordionSummaryIcon}</i>
            <Title>{accordionSummaryTitle}</Title>
          </AccordionSummaryHeader>
          {!accordionExpanded && <>{accordionSummaryContent}</>}
        </AccordionSummaryContentContainer>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
