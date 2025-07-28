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
    "code goes here",
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