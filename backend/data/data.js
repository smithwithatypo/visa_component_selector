import Code from "../models/code.js"

/*  
Code = {
    tabLabel: String,
    text: String,
    id: Number
}
*/

// export default data = {}
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