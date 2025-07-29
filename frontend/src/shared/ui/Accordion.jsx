import { Accordion, AccordionHeading, AccordionPanel, AccordionToggleIcon, Typography } from '@visa/nova-react';

export const CollapsedAccordion = () => {
  return (
    <Accordion>
      <AccordionHeading buttonSize="large" colorScheme="secondary">
        <AccordionToggleIcon />
        Accordion title
      </AccordionHeading>
      <AccordionPanel>
        <Typography>This is required text that describes the accordion section in more detail.</Typography>
      </AccordionPanel>
    </Accordion>
  );
};