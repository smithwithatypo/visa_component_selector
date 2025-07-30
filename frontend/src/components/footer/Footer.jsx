import { Footer, Utility, Typography } from '@visa/nova-react';
import { GenericCodeRunTiny } from '@visa/nova-icons-react';

import './Footer.css'


export const DefaultFooter = () => {
  return (
    <Footer className="v-gap-15">
      <Utility vFlex vFlexWrap vFlexGrow vJustifyContent="center">
        <Typography variant="label-small" colorScheme="subtle">
          <a href='https://github.com/smithwithatypo/visa_component_selector' className='icon-link'>
            <GenericCodeRunTiny style={{ '--v-icon-primary': 'var(--palette-default-active-subtle)'}}/>
          </a>
          Made by Stephen
        </Typography>
      </Utility>
    </Footer>
  );
};

