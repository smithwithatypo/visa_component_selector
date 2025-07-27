
import {
    VisaModeDarkLow,
    VisaModeLightLow
} from '@visa/nova-icons-react';
import {
    Button,
    Link,
    Nav,
    Tab,
    Tabs,
    UtilityFragment,
    VisaLogo,
} from '@visa/nova-react';
import './Navbar.css'
import { Link as RouterLink } from 'react-router-dom';

const id = 'navbar';


export const Navbar = () => {
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
                {/* <p> <VisaModeDarkLow /> </p> */}
                <p> <VisaModeLightLow /> </p>
            </UtilityFragment>
          </> 
        </Nav>
      </UtilityFragment>
    </div>
  );
};