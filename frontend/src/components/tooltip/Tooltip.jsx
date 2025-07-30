import {
  offset,
  safePolygon,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { Button, Tooltip, Utility, Typography } from '@visa/nova-react';
import { useState } from 'react';
import { VisaInformationTiny } from '@visa/nova-icons-react'


export const BottomTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    middleware: [offset(2)],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom',
  });

  const dismiss = useDismiss(context);
  const focus = useFocus(context);
  const hover = useHover(context, { handleClose: safePolygon(), move: false });
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss, focus, hover, role]);

  return (
    <Utility vFlex vJustifyContent="center" vMargin={0} vPaddingLeft={4}>
      <Button colorScheme="tertiary" ref={refs.setReference} {...getReferenceProps()}>
        <VisaInformationTiny style={{ '--v-icon-primary': 'var(--palette-default-active-subtle)'}}/>
      </Button>
      {isOpen && (
        <Tooltip
          ref={refs.setFloating}
          style={{
            left: x,
            position: strategy,
            top: y,
            width: 'fit-content',
          }}
          {...getFloatingProps()}
        >
          <Typography variant="body-2" colorScheme="subtle"> 
            You can type anything and we'll find the right components just for you
          </Typography >
        </Tooltip>
      )}
    </Utility>
  );
};