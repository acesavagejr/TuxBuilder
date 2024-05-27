import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';
import { compileVars } from '../compiler/compileVarSection';

const categoryPrefix = 'sprites_';
const categoryColor = '#4C97FF';

function register() {
    registerBlock(`${categoryPrefix}stage`, {
        message0: 'stage',
        args0: [],
        output: "Sprite",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`Scratch.vm.runtime._stageTarget`, javascriptGenerator.ORDER_ATOMIC];
    })

    registerBlock(`${categoryPrefix}getsprite`, {
        message0: 'get sprite named %1',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "String"
            },
        ],
        output: "Sprite",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        return [`Scratch.vm.runtime.getSpriteTargetByName("${SPRITE}")`, javascriptGenerator.ORDER_ATOMIC];
    })

    registerBlock(`${categoryPrefix}isstage`, {
        message0: 'is %1 stage',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
        ],
        output: "Boolean",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        return [`((function(){const ${variable} = (${SPRITE || "undefined"}; return ${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.isStage : false)})())`, javascriptGenerator.ORDER_ATOMIC]
    })

    registerBlock(`${categoryPrefix}getx`, {
        message0: 'x position of %1',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        return [`((function(){const ${variable} = (${SPRITE || "undefined"}; return ${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.x : 0)})())`, javascriptGenerator.ORDER_ATOMIC]
    })

    registerBlock(`${categoryPrefix}gety`, {
        message0: 'y position of %1',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        return [`((function(){const ${variable} = (${SPRITE || "undefined"}; return ${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.y : 0)})())`, javascriptGenerator.ORDER_ATOMIC]
    })

    registerBlock(`${categoryPrefix}getdir`, {
        message0: 'direction of %1',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        const variable = compileVars.next();
        return [`((function(){const ${variable} = (${SPRITE || "undefined"}; return ${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.direction : 0)})())`, javascriptGenerator.ORDER_ATOMIC]
    })

    registerBlock(`${categoryPrefix}setx`, {
        message0: 'set x position of %1 to %2',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
            {
                "type": "input_value",
                "name": "NEWVALUE",
                "check": "Number"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        const NEWVALUE = javascriptGenerator.valueToCode(block, 'NEWVALUE', javascriptGenerator.ORDER_ATOMIC);
        const variable = compileVars.next();
        // hack to get rid of the variable defined after by creating a new scope.
        return `{const ${variable} = ${SPRITE || "undefined"};${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.setXY(${NEWVALUE || 0}, ${variable}.y)};\n`;
    })

    registerBlock(`${categoryPrefix}sety`, {
        message0: 'set y position of %1 to %2',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
            {
                "type": "input_value",
                "name": "NEWVALUE",
                "check": "Number"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        const NEWVALUE = javascriptGenerator.valueToCode(block, 'NEWVALUE', javascriptGenerator.ORDER_ATOMIC);
        const variable = compileVars.next();
        // hack to get rid of the variable defined after by creating a new scope.
        return `{const ${variable} = ${SPRITE || "undefined"};${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.setXY(${variable}.x, ${NEWVALUE || 0})};\n`;
    })

    registerBlock(`${categoryPrefix}setdir`, {
        message0: 'make %1 point in direction %2',
        args0: [
            {
                "type": "input_value",
                "name": "SPRITE",
                "check": "Sprite"
            },
            {
                "type": "input_value",
                "name": "NEWVALUE",
                "check": "Number"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const SPRITE = javascriptGenerator.valueToCode(block, 'SPRITE', javascriptGenerator.ORDER_ATOMIC);
        const NEWVALUE = javascriptGenerator.valueToCode(block, 'NEWVALUE', javascriptGenerator.ORDER_ATOMIC);
        const variable = compileVars.next();
        // hack to get rid of the variable defined after by creating a new scope.
        return `{const ${variable} = ${SPRITE || "undefined"};${variable} instanceof Scratch.vm.exports.RenderedTarget ? ${variable}.setDirection(${NEWVALUE || 0})};\n`;
    })
}

export default register;
