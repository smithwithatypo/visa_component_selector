import Code from "../models/code.js"

/*  
Class Code = {
    tabLabel: String,
    text: String,
    id: Number
}
*/

const data = {};

const icon = new Code(
    "icon",
    `
import { VisaInformationLow } from '@visa/nova-icons-react';

export const VisaIcon = () => {
  return <VisaInformationLow aria-hidden="false" aria-label="info" />;
};
`, 
    0
)
data.icon = icon;

const button = new Code(
    "button",
    "code goes here",
    1
)
data.button = button;


export default data;