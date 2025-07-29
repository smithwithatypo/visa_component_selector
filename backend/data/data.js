import Code from "../models/code.js"

/*  
Class Code = {
    tabLabel: String,
    text: String,
    id: Number
    url: String
}
*/

const data = {};

const iconsAndIllustrations = new Code(
    "Icons and illustrations",
    `
import { VisaInformationLow } from '@visa/nova-icons-react';

export const VisaIcon = () => {
  return <VisaInformationLow aria-hidden="false" aria-label="info" />;
};
`, 
    21,
    "https://design.visa.com/components/icons-illustrations/"
)
data["Icons and illustrations"] = iconsAndIllustrations;

const accordion = new Code(
    "Accordion",
    `
import { VisaAccordion, VisaAccordionItem } from '@visa/nova-react';

export const VisaAccordionExample = () => {
  return (
    <VisaAccordion>
      <VisaAccordionItem title="Section 1">
        <p>Content for section 1</p>
      </VisaAccordionItem>
      <VisaAccordionItem title="Section 2">
        <p>Content for section 2</p>
      </VisaAccordionItem>
    </VisaAccordion>
  );
};
`,
    2,
    "https://design.visa.com/components/accordion/"
);
data["Accordion"] = accordion;

const anchorLinkMenu = new Code(
    "Anchor link menu",
    `
import { VisaAnchorLinkMenu, VisaAnchorLink } from '@visa/nova-react';

export const VisaAnchorLinkMenuExample = () => {
  return (
    <VisaAnchorLinkMenu>
      <VisaAnchorLink href="#section1">Section 1</VisaAnchorLink>
      <VisaAnchorLink href="#section2">Section 2</VisaAnchorLink>
      <VisaAnchorLink href="#section3">Section 3</VisaAnchorLink>
    </VisaAnchorLinkMenu>
  );
};
`,
    3,
    "https://design.visa.com/components/anchor-link-menu/"
);
data["Anchor link menu"] = anchorLinkMenu;

const avatar = new Code(
    "Avatar",
    `
import { VisaAvatar } from '@visa/nova-react';

export const VisaAvatarExample = () => {
  return (
    <div>
      <VisaAvatar 
        src="/path/to/image.jpg" 
        alt="User avatar" 
        size="medium" 
      />
      <VisaAvatar 
        initials="JD" 
        size="large" 
        backgroundColor="primary" 
      />
    </div>
  );
};
`,
    4,
    "https://design.visa.com/components/avatar/"
);
data["Avatar"] = avatar;

const badge = new Code(
    "Badge",
    `
import { VisaBadge } from '@visa/nova-react';

export const VisaBadgeExample = () => {
  return (
    <div>
      <VisaBadge variant="success">Success</VisaBadge>
      <VisaBadge variant="warning">Warning</VisaBadge>
      <VisaBadge variant="error">Error</VisaBadge>
      <VisaBadge variant="info">Info</VisaBadge>
    </div>
  );
};
`,
    5,
    "https://design.visa.com/components/badge/"
);
data["Badge"] = badge;

const banner = new Code(
    "Banner",
    `
import { VisaBanner } from '@visa/nova-react';

export const VisaBannerExample = () => {
  return (
    <div>
      <VisaBanner variant="info" dismissible>
        This is an informational banner message.
      </VisaBanner>
      <VisaBanner variant="success" icon>
        Your changes have been saved successfully!
      </VisaBanner>
      <VisaBanner variant="warning">
        Please review your information before submitting.
      </VisaBanner>
    </div>
  );
};
`,
    6,
    "https://design.visa.com/components/banner/"
);
data["Banner"] = banner;

const breadcrumbs = new Code(
    "Breadcrumbs",
    `
import { VisaBreadcrumbs, VisaBreadcrumbItem } from '@visa/nova-react';

export const VisaBreadcrumbsExample = () => {
  return (
    <VisaBreadcrumbs>
      <VisaBreadcrumbItem href="/">Home</VisaBreadcrumbItem>
      <VisaBreadcrumbItem href="/products">Products</VisaBreadcrumbItem>
      <VisaBreadcrumbItem href="/products/cards">Cards</VisaBreadcrumbItem>
      <VisaBreadcrumbItem current>Credit Cards</VisaBreadcrumbItem>
    </VisaBreadcrumbs>
  );
};
`,
    7,
    "https://design.visa.com/components/breadcrumbs/"
);
data["Breadcrumbs"] = breadcrumbs;

const button = new Code(
    "Button",
    `
import { VisaButton } from '@visa/nova-react';

export const VisaButtonExample = () => {
  return (
    <div>
      <VisaButton variant="primary">Primary Button</VisaButton>
      <VisaButton variant="secondary">Secondary Button</VisaButton>
      <VisaButton variant="tertiary">Tertiary Button</VisaButton>
      <VisaButton variant="primary" disabled>Disabled Button</VisaButton>
      <VisaButton variant="primary" loading>Loading...</VisaButton>
    </div>
  );
};
`,
    8,
    "https://design.visa.com/components/button/"
);
data["Button"] = button;

const checkbox = new Code(
    "Checkbox",
    `
import { VisaCheckbox, VisaCheckboxGroup } from '@visa/nova-react';

export const VisaCheckboxExample = () => {
  return (
    <div>
      <VisaCheckbox name="terms" value="accepted">
        I agree to the terms and conditions
      </VisaCheckbox>
      
      <VisaCheckboxGroup label="Select your preferences">
        <VisaCheckbox name="preferences" value="email">Email notifications</VisaCheckbox>
        <VisaCheckbox name="preferences" value="sms">SMS notifications</VisaCheckbox>
        <VisaCheckbox name="preferences" value="push">Push notifications</VisaCheckbox>
      </VisaCheckboxGroup>
    </div>
  );
};
`,
    9,
    "https://design.visa.com/components/checkbox/"
);
data["Checkbox"] = checkbox;

const chips = new Code(
    "Chips",
    `
import { VisaChip, VisaChipGroup } from '@visa/nova-react';

export const VisaChipsExample = () => {
  return (
    <div>
      <VisaChipGroup label="Filter by category">
        <VisaChip value="credit" selected>Credit Cards</VisaChip>
        <VisaChip value="debit">Debit Cards</VisaChip>
        <VisaChip value="prepaid">Prepaid Cards</VisaChip>
        <VisaChip value="business">Business Cards</VisaChip>
      </VisaChipGroup>
      
      <VisaChip dismissible onDismiss={() => {}}>
        Removable Chip
      </VisaChip>
    </div>
  );
};
`,
    10,
    "https://design.visa.com/components/chips/"
);
data["Chips"] = chips;

const colorSelector = new Code(
    "Color selector",
    `
import { VisaColorSelector, VisaColorOption } from '@visa/nova-react';

export const VisaColorSelectorExample = () => {
  return (
    <VisaColorSelector label="Choose a card color">
      <VisaColorOption value="blue" color="#0066CC">
        Visa Blue
      </VisaColorOption>
      <VisaColorOption value="gold" color="#FFD700">
        Visa Gold
      </VisaColorOption>
      <VisaColorOption value="black" color="#000000">
        Visa Black
      </VisaColorOption>
      <VisaColorOption value="platinum" color="#E5E4E2">
        Visa Platinum
      </VisaColorOption>
    </VisaColorSelector>
  );
};
`,
    11,
    "https://design.visa.com/components/color-selector/"
);
data["Color selector"] = colorSelector;

const combobox = new Code(
    "Combobox",
    `
import { VisaCombobox, VisaComboboxOption } from '@visa/nova-react';

export const VisaComboboxExample = () => {
  return (
    <VisaCombobox 
      label="Select a country" 
      placeholder="Type to search..."
      searchable
    >
      <VisaComboboxOption value="us">United States</VisaComboboxOption>
      <VisaComboboxOption value="ca">Canada</VisaComboboxOption>
      <VisaComboboxOption value="mx">Mexico</VisaComboboxOption>
      <VisaComboboxOption value="gb">United Kingdom</VisaComboboxOption>
      <VisaComboboxOption value="au">Australia</VisaComboboxOption>
    </VisaCombobox>
  );
};
`,
    12,
    "https://design.visa.com/components/combobox/"
);
data["Combobox"] = combobox;

const contentCard = new Code(
    "Content card",
    `
import { VisaContentCard, VisaCardHeader, VisaCardBody, VisaCardFooter } from '@visa/nova-react';

export const VisaContentCardExample = () => {
  return (
    <VisaContentCard>
      <VisaCardHeader
        title="Visa Signature Credit Card"
        subtitle="Premium rewards and benefits"
        image="/card-image.jpg"
      />
      <VisaCardBody>
        <p>Earn unlimited 2X points on every purchase with no annual fee. 
        Enjoy premium benefits including travel protection and concierge service.</p>
      </VisaCardBody>
      <VisaCardFooter>
        <VisaButton variant="primary">Apply Now</VisaButton>
        <VisaButton variant="tertiary">Learn More</VisaButton>
      </VisaCardFooter>
    </VisaContentCard>
  );
};
`,
    13,
    "https://design.visa.com/components/content-card/"
);
data["Content card"] = contentCard;

const dateAndTimeSelectors = new Code(
    "Date and time selectors",
    `
import { VisaDatePicker, VisaTimePicker, VisaDateTimePicker } from '@visa/nova-react';

export const VisaDateTimeSelectorsExample = () => {
  return (
    <div>
      <VisaDatePicker 
        label="Select date"
        placeholder="MM/DD/YYYY"
        format="MM/DD/YYYY"
      />
      
      <VisaTimePicker 
        label="Select time"
        placeholder="HH:MM AM/PM"
        format="12h"
      />
      
      <VisaDateTimePicker 
        label="Select date and time"
        placeholder="MM/DD/YYYY HH:MM AM/PM"
        showTime
      />
    </div>
  );
};
`,
    14,
    "https://design.visa.com/components/date-time-selectors/"
);
data["Date and time selectors"] = dateAndTimeSelectors;

const dialog = new Code(
    "Dialog",
    `
import { VisaDialog, VisaDialogHeader, VisaDialogBody, VisaDialogFooter } from '@visa/nova-react';

export const VisaDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <VisaButton onClick={() => setIsOpen(true)}>
        Open Dialog
      </VisaButton>
      
      <VisaDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <VisaDialogHeader>
          Confirm Action
        </VisaDialogHeader>
        <VisaDialogBody>
          Are you sure you want to proceed with this action? 
          This cannot be undone.
        </VisaDialogBody>
        <VisaDialogFooter>
          <VisaButton variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </VisaButton>
          <VisaButton variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </VisaButton>
        </VisaDialogFooter>
      </VisaDialog>
    </>
  );
};
`,
    15,
    "https://design.visa.com/components/dialog/"
);
data["Dialog"] = dialog;

const divider = new Code(
    "Divider",
    `
import { VisaDivider } from '@visa/nova-react';

export const VisaDividerExample = () => {
  return (
    <div>
      <p>Content above the divider</p>
      <VisaDivider />
      <p>Content below the divider</p>
      
      <VisaDivider orientation="vertical" height="100px" />
      
      <VisaDivider variant="dashed" />
      
      <VisaDivider>
        <span>OR</span>
      </VisaDivider>
    </div>
  );
};
`,
    16,
    "https://design.visa.com/components/divider/"
);
data["Divider"] = divider;

const dropdownMenu = new Code(
    "Dropdown menu",
    `
import { VisaDropdownMenu, VisaDropdownTrigger, VisaDropdownContent, VisaDropdownItem } from '@visa/nova-react';

export const VisaDropdownMenuExample = () => {
  return (
    <VisaDropdownMenu>
      <VisaDropdownTrigger>
        <VisaButton variant="secondary">
          Account Menu
        </VisaButton>
      </VisaDropdownTrigger>
      <VisaDropdownContent>
        <VisaDropdownItem>Profile Settings</VisaDropdownItem>
        <VisaDropdownItem>Payment Methods</VisaDropdownItem>
        <VisaDropdownItem>Transaction History</VisaDropdownItem>
        <VisaDropdownItem separator />
        <VisaDropdownItem>Help & Support</VisaDropdownItem>
        <VisaDropdownItem>Sign Out</VisaDropdownItem>
      </VisaDropdownContent>
    </VisaDropdownMenu>
  );
};
`,
    17,
    "https://design.visa.com/components/dropdown-menu/"
);
data["Dropdown menu"] = dropdownMenu;

const flag = new Code(
    "Flag",
    `
import { VisaFlag } from '@visa/nova-react';

export const VisaFlagExample = () => {
  return (
    <div>
      <VisaFlag country="US" size="small" />
      <VisaFlag country="CA" size="medium" />
      <VisaFlag country="GB" size="large" />
      <VisaFlag 
        country="AU" 
        size="medium" 
        alt="Australia flag"
        showLabel 
      />
    </div>
  );
};
`,
    18,
    "https://design.visa.com/components/flag/"
);
data["Flag"] = flag;

const footer = new Code(
    "Footer",
    `
import { VisaFooter, VisaFooterSection, VisaFooterLink, VisaFooterCopyright } from '@visa/nova-react';

export const VisaFooterExample = () => {
  return (
    <VisaFooter>
      <VisaFooterSection title="Products">
        <VisaFooterLink href="/credit-cards">Credit Cards</VisaFooterLink>
        <VisaFooterLink href="/debit-cards">Debit Cards</VisaFooterLink>
        <VisaFooterLink href="/prepaid-cards">Prepaid Cards</VisaFooterLink>
      </VisaFooterSection>
      
      <VisaFooterSection title="Support">
        <VisaFooterLink href="/help">Help Center</VisaFooterLink>
        <VisaFooterLink href="/contact">Contact Us</VisaFooterLink>
        <VisaFooterLink href="/security">Security</VisaFooterLink>
      </VisaFooterSection>
      
      <VisaFooterSection title="Company">
        <VisaFooterLink href="/about">About Visa</VisaFooterLink>
        <VisaFooterLink href="/careers">Careers</VisaFooterLink>
        <VisaFooterLink href="/investors">Investors</VisaFooterLink>
      </VisaFooterSection>
      
      <VisaFooterCopyright>
        © 2024 Visa. All rights reserved.
      </VisaFooterCopyright>
    </VisaFooter>
  );
};
`,
    19,
    "https://design.visa.com/components/footer/"
);
data["Footer"] = footer;

const horizontalNavigation = new Code(
    "Horizontal navigation",
    `
import { VisaHorizontalNav, VisaNavItem, VisaNavLink } from '@visa/nova-react';

export const VisaHorizontalNavigationExample = () => {
  return (
    <VisaHorizontalNav>
      <VisaNavItem>
        <VisaNavLink href="/" active>Home</VisaNavLink>
      </VisaNavItem>
      <VisaNavItem>
        <VisaNavLink href="/products">Products</VisaNavLink>
      </VisaNavItem>
      <VisaNavItem>
        <VisaNavLink href="/solutions">Solutions</VisaNavLink>
      </VisaNavItem>
      <VisaNavItem>
        <VisaNavLink href="/developers">Developers</VisaNavLink>
      </VisaNavItem>
      <VisaNavItem>
        <VisaNavLink href="/support">Support</VisaNavLink>
      </VisaNavItem>
    </VisaHorizontalNav>
  );
};
`,
    20,
    "https://design.visa.com/components/horizontal-navigation/"
);
data["Horizontal navigation"] = horizontalNavigation;

const input = new Code(
    "Input",
    `
import { VisaInput, VisaInputGroup, VisaInputAddon } from '@visa/nova-react';

export const VisaInputExample = () => {
  return (
    <div>
      <VisaInput 
        label="Email address"
        placeholder="Enter your email"
        type="email"
        required
      />
      
      <VisaInput 
        label="Password"
        placeholder="Enter your password"
        type="password"
        helperText="Must be at least 8 characters"
      />
      
      <VisaInputGroup>
        <VisaInputAddon>$</VisaInputAddon>
        <VisaInput 
          label="Amount"
          placeholder="0.00"
          type="number"
        />
        <VisaInputAddon>USD</VisaInputAddon>
      </VisaInputGroup>
      
      <VisaInput 
        label="Card number"
        placeholder="1234 5678 9012 3456"
        error="Please enter a valid card number"
      />
    </div>
  );
};
`,
    22,
    "https://design.visa.com/components/input/"
);
data["Input"] = input;

const link = new Code(
    "Link",
    `
import { VisaLink } from '@visa/nova-react';

export const VisaLinkExample = () => {
  return (
    <div>
      <VisaLink href="/terms">Terms and Conditions</VisaLink>
      
      <VisaLink href="/privacy" variant="subtle">
        Privacy Policy
      </VisaLink>
      
      <VisaLink href="/external" external>
        External Link
      </VisaLink>
      
      <VisaLink href="/download" download>
        Download Statement
      </VisaLink>
      
      <VisaLink href="#section" variant="inline">
        Jump to section
      </VisaLink>
    </div>
  );
};
`,
    23,
    "https://design.visa.com/components/link/"
);
data["Link"] = link;

const listItem = new Code(
    "List item",
    `
import { VisaList, VisaListItem, VisaListItemIcon, VisaListItemText } from '@visa/nova-react';

export const VisaListItemExample = () => {
  return (
    <VisaList>
      <VisaListItem>
        <VisaListItemIcon name="check" />
        <VisaListItemText 
          primary="Zero liability protection"
          secondary="You're protected from unauthorized charges"
        />
      </VisaListItem>
      
      <VisaListItem>
        <VisaListItemIcon name="shield" />
        <VisaListItemText 
          primary="Advanced security"
          secondary="Multiple layers of security protect your information"
        />
      </VisaListItem>
      
      <VisaListItem interactive onClick={() => {}}>
        <VisaListItemText 
          primary="Rewards program"
          secondary="Earn points on every purchase"
        />
        <VisaListItemIcon name="arrow-right" />
      </VisaListItem>
      
      <VisaListItem disabled>
        <VisaListItemText 
          primary="Premium benefits"
          secondary="Available with select cards"
        />
      </VisaListItem>
    </VisaList>
  );
};
`,
    24,
    "https://design.visa.com/components/list-item/"
);
data["List item"] = listItem;

const listbox = new Code(
    "Listbox",
    `
import { VisaListbox, VisaListboxOption } from '@visa/nova-react';

export const VisaListboxExample = () => {
  return (
    <VisaListbox label="Select your card type" multiple>
      <VisaListboxOption value="credit">Credit Card</VisaListboxOption>
      <VisaListboxOption value="debit">Debit Card</VisaListboxOption>
      <VisaListboxOption value="prepaid">Prepaid Card</VisaListboxOption>
      <VisaListboxOption value="business">Business Card</VisaListboxOption>
      <VisaListboxOption value="premium" disabled>Premium Card</VisaListboxOption>
    </VisaListbox>
  );
};
`,
    25,
    "https://design.visa.com/components/listbox/"
);
data["Listbox"] = listbox;

const multiselect = new Code(
    "Multiselect",
    `
import { VisaMultiselect, VisaMultiselectOption } from '@visa/nova-react';

export const VisaMultiselectExample = () => {
  return (
    <VisaMultiselect 
      label="Select benefits" 
      placeholder="Choose your card benefits"
      searchable
    >
      <VisaMultiselectOption value="cashback">Cashback Rewards</VisaMultiselectOption>
      <VisaMultiselectOption value="travel">Travel Protection</VisaMultiselectOption>
      <VisaMultiselectOption value="insurance">Purchase Insurance</VisaMultiselectOption>
      <VisaMultiselectOption value="concierge">Concierge Service</VisaMultiselectOption>
      <VisaMultiselectOption value="lounge">Airport Lounge Access</VisaMultiselectOption>
      <VisaMultiselectOption value="warranty">Extended Warranty</VisaMultiselectOption>
    </VisaMultiselect>
  );
};
`,
    26,
    "https://design.visa.com/components/multiselect/"
);
data["Multiselect"] = multiselect;

const navigationDrawer = new Code(
    "Navigation drawer",
    `
import { VisaNavigationDrawer, VisaDrawerHeader, VisaDrawerContent, VisaNavItem } from '@visa/nova-react';

export const VisaNavigationDrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <VisaButton onClick={() => setIsOpen(true)}>
        Open Navigation
      </VisaButton>
      
      <VisaNavigationDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <VisaDrawerHeader>
          <VisaLogo />
        </VisaDrawerHeader>
        <VisaDrawerContent>
          <VisaNavItem href="/dashboard" active>Dashboard</VisaNavItem>
          <VisaNavItem href="/cards">My Cards</VisaNavItem>
          <VisaNavItem href="/transactions">Transactions</VisaNavItem>
          <VisaNavItem href="/rewards">Rewards</VisaNavItem>
          <VisaNavItem href="/settings">Settings</VisaNavItem>
          <VisaNavItem href="/support">Support</VisaNavItem>
        </VisaDrawerContent>
      </VisaNavigationDrawer>
    </>
  );
};
`,
    27,
    "https://design.visa.com/components/navigation-drawer/"
);
data["Navigation drawer"] = navigationDrawer;

const pagination = new Code(
    "Pagination",
    `
import { VisaPagination } from '@visa/nova-react';

export const VisaPaginationExample = () => {
  return (
    <div>
      <VisaPagination 
        currentPage={3}
        totalPages={10}
        onPageChange={(page) => console.log('Page changed to:', page)}
        showFirstLast
      />
      
      <VisaPagination 
        currentPage={1}
        totalPages={25}
        siblingCount={2}
        showPageNumbers={5}
        size="small"
      />
    </div>
  );
};
`,
    28,
    "https://design.visa.com/components/pagination/"
);
data["Pagination"] = pagination;

const panel = new Code(
    "Panel",
    `
import { VisaPanel, VisaPanelHeader, VisaPanelBody, VisaPanelFooter } from '@visa/nova-react';

export const VisaPanelExample = () => {
  return (
    <div>
      <VisaPanel variant="default">
        <VisaPanelHeader>
          <h3>Account Summary</h3>
        </VisaPanelHeader>
        <VisaPanelBody>
          <p>Current balance: $2,450.00</p>
          <p>Available credit: $7,550.00</p>
          <p>Next payment due: March 15, 2024</p>
        </VisaPanelBody>
        <VisaPanelFooter>
          <VisaButton variant="primary">Make Payment</VisaButton>
        </VisaPanelFooter>
      </VisaPanel>
      
      <VisaPanel variant="highlighted" collapsible>
        <VisaPanelHeader>Special Offers</VisaPanelHeader>
        <VisaPanelBody>
          <p>Earn 5X points on travel purchases this month!</p>
        </VisaPanelBody>
      </VisaPanel>
    </div>
  );
};
`,
    29,
    "https://design.visa.com/components/panel/"
);
data["Panel"] = panel;

const progress = new Code(
    "Progress",
    `
import { VisaProgress, VisaProgressBar, VisaProgressCircle } from '@visa/nova-react';

export const VisaProgressExample = () => {
  return (
    <div>
      <VisaProgressBar 
        value={65} 
        max={100} 
        label="Application Progress"
        showPercentage
      />
      
      <VisaProgressBar 
        value={8500} 
        max={10000} 
        label="Spending towards bonus"
        showValue
        prefix="$"
      />
      
      <VisaProgressCircle 
        value={75} 
        size="large"
        label="Profile Completion"
      />
      
      <VisaProgress variant="indeterminate" label="Processing payment..." />
    </div>
  );
};
`,
    30,
    "https://design.visa.com/components/progress/"
);
data["Progress"] = progress;

const radio = new Code(
    "Radio",
    `
import { VisaRadio, VisaRadioGroup } from '@visa/nova-react';

export const VisaRadioExample = () => {
  return (
    <div>
      <VisaRadioGroup label="Select your preferred card type" name="cardType">
        <VisaRadio value="credit">Credit Card</VisaRadio>
        <VisaRadio value="debit">Debit Card</VisaRadio>
        <VisaRadio value="prepaid">Prepaid Card</VisaRadio>
      </VisaRadioGroup>
      
      <VisaRadioGroup 
        label="Payment frequency" 
        name="frequency"
        orientation="horizontal"
      >
        <VisaRadio value="monthly">Monthly</VisaRadio>
        <VisaRadio value="quarterly">Quarterly</VisaRadio>
        <VisaRadio value="annually">Annually</VisaRadio>
      </VisaRadioGroup>
    </div>
  );
};
`,
    31,
    "https://design.visa.com/components/radio/"
);
data["Radio"] = radio;

const sectionMessage = new Code(
    "Section message",
    `
import { VisaSectionMessage } from '@visa/nova-react';

export const VisaSectionMessageExample = () => {
  return (
    <div>
      <VisaSectionMessage variant="info" title="Account Update">
        Your account information has been successfully updated. 
        Changes may take up to 24 hours to reflect across all services.
      </VisaSectionMessage>
      
      <VisaSectionMessage variant="warning" title="Payment Reminder">
        Your payment is due in 3 days. Avoid late fees by setting up autopay.
      </VisaSectionMessage>
      
      <VisaSectionMessage variant="success" title="Application Approved">
        Congratulations! Your Visa credit card application has been approved.
      </VisaSectionMessage>
      
      <VisaSectionMessage variant="error" title="Transaction Failed">
        We were unable to process your payment. Please check your payment information.
      </VisaSectionMessage>
    </div>
  );
};
`,
    32,
    "https://design.visa.com/components/section-message/"
);
data["Section message"] = sectionMessage;

const selectNative = new Code(
    "Select (native)",
    `
import { VisaSelect, VisaSelectOption } from '@visa/nova-react';

export const VisaSelectExample = () => {
  return (
    <div>
      <VisaSelect label="Select your country" required>
        <VisaSelectOption value="">Choose a country</VisaSelectOption>
        <VisaSelectOption value="us">United States</VisaSelectOption>
        <VisaSelectOption value="ca">Canada</VisaSelectOption>
        <VisaSelectOption value="mx">Mexico</VisaSelectOption>
        <VisaSelectOption value="gb">United Kingdom</VisaSelectOption>
        <VisaSelectOption value="au">Australia</VisaSelectOption>
      </VisaSelect>
      
      <VisaSelect 
        label="Expiration month" 
        placeholder="MM"
        helperText="Select the month your card expires"
      >
        <VisaSelectOption value="01">01 - January</VisaSelectOption>
        <VisaSelectOption value="02">02 - February</VisaSelectOption>
        <VisaSelectOption value="03">03 - March</VisaSelectOption>
        <VisaSelectOption value="12">12 - December</VisaSelectOption>
      </VisaSelect>
    </div>
  );
};
`,
    33,
    "https://design.visa.com/components/select/"
);
data["Select (native)"] = selectNative;

const slider = new Code(
    "Slider",
    `
import { VisaSlider, VisaSliderTrack, VisaSliderThumb } from '@visa/nova-react';

export const VisaSliderExample = () => {
  return (
    <div>
      <VisaSlider 
        label="Credit limit"
        min={1000}
        max={50000}
        step={500}
        value={15000}
        showValue
        prefix="$"
      />
      
      <VisaSlider 
        label="Payment amount"
        min={0}
        max={100}
        value={75}
        showPercentage
        marks={[0, 25, 50, 75, 100]}
      />
      
      <VisaSlider 
        label="Interest rate range"
        min={0}
        max={30}
        value={[12, 18]}
        range
        suffix="%"
      />
    </div>
  );
};
`,
    34,
    "https://design.visa.com/components/slider/"
);
data["Slider"] = slider;

const switchComponent = new Code(
    "Switch",
    `
import { VisaSwitch, VisaSwitchGroup } from '@visa/nova-react';

export const VisaSwitchExample = () => {
  return (
    <div>
      <VisaSwitch 
        label="Enable notifications"
        description="Receive alerts about your account activity"
      />
      
      <VisaSwitch 
        label="Autopay"
        description="Automatically pay your minimum balance each month"
        defaultChecked
      />
      
      <VisaSwitchGroup label="Security settings">
        <VisaSwitch label="Two-factor authentication" />
        <VisaSwitch label="Email alerts for large purchases" defaultChecked />
        <VisaSwitch label="SMS fraud alerts" defaultChecked />
      </VisaSwitchGroup>
    </div>
  );
};
`,
    35,
    "https://design.visa.com/components/switch/"
);
data["Switch"] = switchComponent;

const tabBar = new Code(
    "Tab bar",
    `
import { VisaTabBar, VisaTabBarItem } from '@visa/nova-react';

export const VisaTabBarExample = () => {
  return (
    <VisaTabBar defaultActiveTab="overview">
      <VisaTabBarItem 
        tabId="overview" 
        icon="home"
        label="Overview"
      />
      <VisaTabBarItem 
        tabId="transactions" 
        icon="list"
        label="Transactions"
        badge={3}
      />
      <VisaTabBarItem 
        tabId="rewards" 
        icon="star"
        label="Rewards"
      />
      <VisaTabBarItem 
        tabId="settings" 
        icon="settings"
        label="Settings"
      />
    </VisaTabBar>
  );
};
`,
    36,
    "https://design.visa.com/components/tab-bar/"
);
data["Tab bar"] = tabBar;

const table = new Code(
    "Table",
    `
import { VisaTable, VisaTableHeader, VisaTableBody, VisaTableRow, VisaTableCell } from '@visa/nova-react';

export const VisaTableExample = () => {
  return (
    <VisaTable>
      <VisaTableHeader>
        <VisaTableRow>
          <VisaTableCell>Date</VisaTableCell>
          <VisaTableCell>Description</VisaTableCell>
          <VisaTableCell>Amount</VisaTableCell>
          <VisaTableCell>Status</VisaTableCell>
        </VisaTableRow>
      </VisaTableHeader>
      <VisaTableBody>
        <VisaTableRow>
          <VisaTableCell>Mar 15, 2024</VisaTableCell>
          <VisaTableCell>Amazon Purchase</VisaTableCell>
          <VisaTableCell>-$89.99</VisaTableCell>
          <VisaTableCell>
            <VisaBadge variant="success">Completed</VisaBadge>
          </VisaTableCell>
        </VisaTableRow>
        <VisaTableRow>
          <VisaTableCell>Mar 14, 2024</VisaTableCell>
          <VisaTableCell>Payment Received</VisaTableCell>
          <VisaTableCell>+$500.00</VisaTableCell>
          <VisaTableCell>
            <VisaBadge variant="success">Completed</VisaBadge>
          </VisaTableCell>
        </VisaTableRow>
      </VisaTableBody>
    </VisaTable>
  );
};
`,
    37,
    "https://design.visa.com/components/table/"
);
data["Table"] = table;

const tabs = new Code(
    "Tabs",
    `
import { VisaTabs, VisaTabList, VisaTab, VisaTabPanel } from '@visa/nova-react';

export const VisaTabsExample = () => {
  return (
    <VisaTabs defaultTab="account">
      <VisaTabList>
        <VisaTab tabId="account">Account Details</VisaTab>
        <VisaTab tabId="transactions">Recent Transactions</VisaTab>
        <VisaTab tabId="statements">Statements</VisaTab>
        <VisaTab tabId="rewards">Rewards</VisaTab>
      </VisaTabList>
      
      <VisaTabPanel tabId="account">
        <h3>Account Information</h3>
        <p>Current balance: $2,450.00</p>
        <p>Available credit: $7,550.00</p>
      </VisaTabPanel>
      
      <VisaTabPanel tabId="transactions">
        <h3>Recent Transactions</h3>
        <p>Your latest account activity</p>
      </VisaTabPanel>
      
      <VisaTabPanel tabId="statements">
        <h3>Monthly Statements</h3>
        <p>Download your account statements</p>
      </VisaTabPanel>
      
      <VisaTabPanel tabId="rewards">
        <h3>Rewards Program</h3>
        <p>Current points: 12,450</p>
      </VisaTabPanel>
    </VisaTabs>
  );
};
`,
    38,
    "https://design.visa.com/components/tabs/"
);
data["Tabs"] = tabs;

const toggleButton = new Code(
    "Toggle button",
    `
import { VisaToggleButton, VisaToggleButtonGroup } from '@visa/nova-react';

export const VisaToggleButtonExample = () => {
  return (
    <div>
      <VisaToggleButtonGroup label="View options" exclusive>
        <VisaToggleButton value="list" pressed>
          List View
        </VisaToggleButton>
        <VisaToggleButton value="grid">
          Grid View
        </VisaToggleButton>
        <VisaToggleButton value="card">
          Card View
        </VisaToggleButton>
      </VisaToggleButtonGroup>
      
      <VisaToggleButtonGroup label="Filter transactions" multiple>
        <VisaToggleButton value="pending">Pending</VisaToggleButton>
        <VisaToggleButton value="completed" pressed>Completed</VisaToggleButton>
        <VisaToggleButton value="declined">Declined</VisaToggleButton>
      </VisaToggleButtonGroup>
    </div>
  );
};
`,
    39,
    "https://design.visa.com/components/toggle-button/"
);
data["Toggle button"] = toggleButton;

const tooltip = new Code(
    "Tooltip",
    `
import { VisaTooltip, VisaTooltipTrigger, VisaTooltipContent } from '@visa/nova-react';

export const VisaTooltipExample = () => {
  return (
    <div>
      <VisaTooltip>
        <VisaTooltipTrigger>
          <VisaButton variant="secondary">
            Available Balance
          </VisaButton>
        </VisaTooltipTrigger>
        <VisaTooltipContent>
          This is the amount you can spend on your card right now
        </VisaTooltipContent>
      </VisaTooltip>
      
      <VisaTooltip placement="top">
        <VisaTooltipTrigger>
          <VisaBadge variant="info">APR</VisaBadge>
        </VisaTooltipTrigger>
        <VisaTooltipContent>
          Annual Percentage Rate - the yearly cost of your loan
        </VisaTooltipContent>
      </VisaTooltip>
      
      <VisaTooltip delay={500}>
        <VisaTooltipTrigger>
          <VisaLink href="/help">Learn more</VisaLink>
        </VisaTooltipTrigger>
        <VisaTooltipContent>
          Get detailed information about this feature
        </VisaTooltipContent>
      </VisaTooltip>
    </div>
  );
};
`,
    40,
    "https://design.visa.com/components/tooltip/"
);
data["Tooltip"] = tooltip;

const topAppBar = new Code(
    "Top app bar",
    `
import { VisaTopAppBar, VisaAppBarTitle, VisaAppBarActions, VisaIconButton } from '@visa/nova-react';

export const VisaTopAppBarExample = () => {
  return (
    <VisaTopAppBar>
      <VisaIconButton icon="menu" aria-label="Open menu" />
      <VisaAppBarTitle>Visa Account Dashboard</VisaAppBarTitle>
      <VisaAppBarActions>
        <VisaIconButton icon="search" aria-label="Search" />
        <VisaIconButton icon="notifications" aria-label="Notifications" badge={2} />
        <VisaIconButton icon="profile" aria-label="Profile menu" />
      </VisaAppBarActions>
    </VisaTopAppBar>
  );
};
`,
    41,
    "https://design.visa.com/components/top-app-bar/"
);
data["Top app bar"] = topAppBar;

const verticalNavigation = new Code(
    "Vertical navigation",
    `
import { VisaVerticalNav, VisaNavSection, VisaNavItem, VisaNavLink } from '@visa/nova-react';

export const VisaVerticalNavigationExample = () => {
  return (
    <VisaVerticalNav>
      <VisaNavSection>
        <VisaNavItem>
          <VisaNavLink href="/dashboard" icon="home" active>
            Dashboard
          </VisaNavLink>
        </VisaNavItem>
        <VisaNavItem>
          <VisaNavLink href="/cards" icon="credit-card">
            My Cards
          </VisaNavLink>
        </VisaNavItem>
        <VisaNavItem>
          <VisaNavLink href="/transactions" icon="list">
            Transactions
          </VisaNavLink>
        </VisaNavItem>
      </VisaNavSection>
      
      <VisaNavSection title="Account">
        <VisaNavItem>
          <VisaNavLink href="/profile" icon="user">
            Profile
          </VisaNavLink>
        </VisaNavItem>
        <VisaNavItem>
          <VisaNavLink href="/security" icon="shield">
            Security
          </VisaNavLink>
        </VisaNavItem>
        <VisaNavItem>
          <VisaNavLink href="/settings" icon="settings">
            Settings
          </VisaNavLink>
        </VisaNavItem>
      </VisaNavSection>
      
      <VisaNavSection title="Support">
        <VisaNavItem>
          <VisaNavLink href="/help" icon="help">
            Help Center
          </VisaNavLink>
        </VisaNavItem>
        <VisaNavItem>
          <VisaNavLink href="/contact" icon="phone">
            Contact Us
          </VisaNavLink>
        </VisaNavItem>
      </VisaNavSection>
    </VisaVerticalNav>
  );
};
`,
    42,
    "https://design.visa.com/components/vertical-navigation/"
);
data["Vertical navigation"] = verticalNavigation;

export default data;