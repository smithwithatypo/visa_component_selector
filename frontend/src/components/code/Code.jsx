import { Button, Surface, Tab, Tabs, Utility, UtilityFragment, useTabs } from '@visa/nova-react';
import './Code.css'

const id = 'code-viewer';

const defaultTabsContent = [
  {
    tabLabel: ' ',
    text: `Search for a component to see code here`,
    id: `${id}-tab-0`,
  }
];

export const Code = ({ data }) => {
  const {
    getTabIndex,
    onIndexChange,
    onKeyNavigation,
    ref: tabsRef,
    selectedIndex,
  } = useTabs({ arrowKeyNavigation: 'vertical', defaultSelected: 0 });

  const displayContent = data ? [data] : defaultTabsContent;

  return (
    <Utility vFlex vFlexWrap vGap={8}>
      <Tabs onKeyDown={onKeyNavigation} orientation="vertical" role="tablist" style={{ flexBasis: '25%' }}>
        {displayContent.map((tabContent, index) => (
          <Tab key={tabContent.id || `tab-${index}`} role="none">
            <Button
              aria-selected={index === selectedIndex}
              aria-controls={tabContent.id || `tab-${index}`}
              colorScheme="tertiary"
              onClick={() => onIndexChange(index)}
              ref={el => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              tabIndex={getTabIndex(index)}
            >
              {tabContent.tabLabel}
            </Button>
          </Tab>
        ))}
      </Tabs>
      <Utility vFlex vFlexGrow vElevation="inset">
        <UtilityFragment vPadding={10}>
          <Surface id={displayContent[selectedIndex]?.id || `tab-${selectedIndex}`} role="tabpanel">
            <span className="code-content">{displayContent[selectedIndex]?.text}</span>
          </Surface>
        </UtilityFragment>
      </Utility>
    </Utility>
  );
};