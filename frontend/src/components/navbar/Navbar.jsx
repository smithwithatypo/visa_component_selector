// import {
//     autoUpdate,
//     offset,
//     FloatingFocusManager,
//     useClick,
//     useFloating,
//     useInteractions,
//     useDismiss,
// } from '@floating-ui/react';
import {
    VisaAccountLow,
    VisaChevronDownTiny,
    VisaChevronUpTiny,
    VisaCloseLow,
    VisaCloseTiny,
    VisaMenuLow,
    VisaNotificationsLow,
    VisaSearchLow,
} from '@visa/nova-icons-react';
import {
    Avatar,
    Badge,
    Button,
    Divider,
    DropdownButton,
    DropdownMenu,
    Input,
    InputContainer,
    Link,
    Listbox,
    ListboxItem,
    Nav,
    NavAppName,
    Surface,
    Tab,
    TabSuffix,
    Tabs,
    Typography,
    Utility,
    UtilityFragment,
    VisaLogo,
} from '@visa/nova-react';
import { CSSProperties, useRef, useState } from 'react';
import './Navbar.css'
import { Link as RouterLink } from 'react-router-dom';

const id = 'navbar';


export const Navbar = () => {
  const [expandSearch, setExpandSearch] = useState(false);
  const searchInitiallyActivated = useRef(false);
  const homeURL = 'https://design.visa.com';
  const docsURL = 'https://design.visa.com/components/';
  const searchingURL = '/searching';

  return (
    <div>
      <Link skipLink href="#content">
        Skip to content
      </Link>
      <UtilityFragment vJustifyContent="between">
        <Nav id={id} orientation="horizontal" tag="header">
          {!expandSearch ? (
            <>
              {/* <UtilityFragment vContainerHide="desktop">
                <DropdownButton
                  aria-controls={`${id}-mobile-menu`}
                  aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                  aria-label="open menu"
                  aria-describedby={`${id}-mobile-menu-notifications-badge`}
                  buttonSize="large"
                  colorScheme="tertiary"
                  iconButton
                  id={`${id}-mobile-menu-button`}
                  onClick={onToggleMobileMenu}
                >
                  {mobileMenuOpen ? (
                    <VisaCloseTiny />
                  ) : (
                    <>
                      <VisaMenuLow />
                      <Badge
                        id={`${id}-mobile-menu-notifications-badge`}
                        aria-label="3 notifications"
                        badgeVariant="number"
                        tag="sup"
                      >
                        3
                      </Badge>
                    </>
                  )}
                </DropdownButton>
              </UtilityFragment> */}
              <UtilityFragment vFlex vGap={16}>
                <Link
                  aria-label="Visa Design Home"
                  href={homeURL}
                  id={`${id}-home-link`}
                  noUnderline
                  style={{ backgroundColor: 'transparent' }}
                >
                  <VisaLogo />
                  {/* <NavAppName>
                    <Utility
                      vContainerHide="xs"
                      element={<Typography variant="headline-3">VISA Design</Typography>}
                    />
                  </NavAppName> */}
                </Link>
              </UtilityFragment>
              <UtilityFragment vFlex vJustifyContent="end" vFlexGrow vMarginLeft="auto" vContainerHide="mobile">
                <nav aria-label="horizontal navigation bar">
                  <UtilityFragment vGap={4}>
                    <Tabs>
                      <Tab>
                        <Button
                          buttonSize="large"
                          colorScheme="tertiary"
                          element={<a href={docsURL}>Docs</a>}
                        />
                      </Tab>
                      <Tab>
                        <Button
                          buttonSize="large"
                          colorScheme="tertiary"
                          element={<RouterLink to={searchingURL}>Search</RouterLink>}
                        />
                      </Tab>
                    </Tabs>
                  </UtilityFragment>
                </nav>
              </UtilityFragment>
              <Utility vFlex vGap={8} vMarginLeft={8}>
                <Button
                  aria-label="search site"
                  buttonSize="large"
                  colorScheme="tertiary"
                  iconButton
                  onClick={() => { setExpandSearch(true); searchInitiallyActivated.current = true; }}

                >
                  <VisaSearchLow />
                </Button>
                
              </Utility>
            </>
          ) : (
            <UtilityFragment vFlex>
              <Surface
                style={
                  {
                    '--v-surface-background': 'var(--palette-default-surface-3)',
                    '--v-surface-border-radius': 'var(--size-rounded-medium)',
                    '--v-surface-padding-inline': 'var(--size-scalable-8)',
                  }
                }
              >
                <InputContainer>
                  <VisaSearchLow />
                  <Input
                    id={`${id}-search-field`}
                    name={`${id}-search-field`}
                    required
                    type="search"
                    aria-label="Search"
                    placeholder="Search"
                  />
                </InputContainer>
                <Button
                  aria-label="close search"
                  buttonSize="large"
                  colorScheme="tertiary"
                  iconButton
                  onClick={() => setExpandSearch(false)}
                >
                  <VisaCloseLow />
                </Button>
              </Surface>
            </UtilityFragment>
          )}
        </Nav>
      </UtilityFragment>
      
    </div>
  );
};