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
    VisaModeDarkLow
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
// import { useRef, useState } from 'react';
import './Navbar.css'
import { Link as RouterLink } from 'react-router-dom';

const id = 'navbar';


export const Navbar = () => {
//   const [expandSearch, setExpandSearch] = useState(false);
//   const searchInitiallyActivated = useRef(false);
  const homeURL = '/';
  const docsURL = 'https://design.visa.com/components/';
  const searchingURL = '/searching';

  return (
    <div>
      <Link skipLink href="#content">
        Skip to content
      </Link>
      <UtilityFragment vJustifyContent="begin">
        <Nav id={id} orientation="horizontal" tag="header">
            <>
              <UtilityFragment vFlex vGap={4}>
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
                      element={<Typography variant="headline-3">Component Search</Typography>}
                    />
                  </NavAppName> */}
                </Link>
            </UtilityFragment>

            <UtilityFragment vFlex vGap="normal" vMarginLeft={20}>
                <nav aria-label="horizontal navigation bar">
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
                </nav>
            </UtilityFragment>


            <UtilityFragment vFlex vJustifyContent="end" vFlexGrow vMarginLeft="auto">
                <p> <VisaModeDarkLow /> </p>
            </UtilityFragment>
          </> 
          
        </Nav>
      </UtilityFragment>
      
    </div>
  );
};