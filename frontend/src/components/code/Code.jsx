import { Button, Surface, Tab, Tabs, Typography, Utility, UtilityFragment, useTabs } from '@visa/nova-react';
import { useState } from 'react';
import { Preview } from '../preview/Preview';
import './Code.css'

const id = 'code-viewer';

const defaultTabsContent = [
  {
    tabLabel: ' ',
    text: `Search for a component to see code here`,
    id: `${id}-tab-0`,
    url: ` `
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

  const [copied, setCopied] = useState(false);
  const displayContent = data && data.length > 0 ? data : defaultTabsContent;

  const handleCopy = async () => {
    const textToCopy = displayContent[selectedIndex]?.text;
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
  };

  return (
    <Utility vFlexCol vFlexWrap vGap={8}>
      <Utility vFlex>

      
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
      <Utility vFlex vFlexGrow vElevation="inset" style={{ position: 'relative' }} className='code-container'>
        <Button
          colorScheme="primary"
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 10,
            fontSize: '12px',
            padding: '4px 8px'
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
        <UtilityFragment vPadding={10} >
          <Surface id={displayContent[selectedIndex]?.id || `tab-${selectedIndex}`} role="tabpanel">
            <Typography variant="body-2" className='code-content'>{displayContent[selectedIndex]?.text}</Typography>
          </Surface>
        </UtilityFragment>
      </Utility>
      </Utility>
      
      <Utility>
        <Preview selectedComponent={displayContent[selectedIndex]} />
      </Utility>
    </Utility>
  );
};