import { Footer, Utility, Typography } from '@visa/nova-react';

export const DefaultFooter = () => {
  return (
    <Footer className="v-gap-15">
      <Utility vFlex vFlexWrap vFlexGrow vJustifyContent="center">
        <Typography variant="label-small" colorScheme="subtle">Made by Stephen</Typography>
      </Utility>
    </Footer>
  );
};

