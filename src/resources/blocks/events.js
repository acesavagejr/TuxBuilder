import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'events_';
const categoryColor = '#FFBF00';

function register() {
    // setInterval
    registerBlock(`${categoryPrefix}interval`, {
        message0: 'every %1 seconds do %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "TIME",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TIME = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `setInterval(async () => { ${BLOCKS} }, (${TIME} * 1000));`;
        return `${code}\n`;
    })
    // setTimeout
    registerBlock(`${categoryPrefix}timeout`, {
        message0: 'in %1 seconds do %2 %3',
        args0: [
            {
                "type": "input_value",
                "name": "TIME",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const TIME = javascriptGenerator.valueToCode(block, 'TIME', javascriptGenerator.ORDER_ATOMIC);
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `setTimeout(async () => { ${BLOCKS} }, (${TIME} * 1000));`;
        return `${code}\n`;
    })

    // when flag

    registerBlock(`${categoryPrefix}flagclicked`, {
        message0: 'when flag clicked %1 %2 (ElectraMod and PenguinMod only)',
        args0: [
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        const code = `Scratch.vm.runtime.on('HATS_STARTED', async(opcodeVariable)=>{if(opcodeVariable==='event_whenflagclicked'){${BLOCKS}}})`;
        return `${code}\n`;
    })
}

export default register;
