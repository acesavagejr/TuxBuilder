import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'operators_';
const categoryColor = '#59C059';

function register() {
    // true
    registerBlock(`${categoryPrefix}true`, {
        message0: 'true',
        args0: [],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`true`, javascriptGenerator.ORDER_ATOMIC];
    })

    // false
    registerBlock(`${categoryPrefix}false`, {
        message0: 'false',
        args0: [],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, () => {
        return [`false`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
