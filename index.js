const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square} = require('./lib/shapes');


inquirer
    .prompt([
        {
            type: "input",
            message: "Enter up to three characters for the logo",
            name: "text",
        },
        {
            type: "input",
            message: "Enter a color for the text",
            name: "textColor",
        },
        {
            type: "list",
            message: "Choose a shape for the logo",
            name: "shape",
            choices: [
                'circle', 'triangle', 'square'
            ],
        },
        {
            type: "input",
            message: "Enter a color to fill the shape",
            name: "shapeColor",
        },
])
    .then((answers) => console.log(answers))
    .catch((err) => console.log(err))
    

function generateLogo(text, textColor, shape, shapeColor) {
    const shapes = {
        circle: Circle,
        triange: Triangle,
        square: Square,
        }
    
    const logoText = `<text fill="${textColor}">${text}</text>`;
        return `${logoText}`
}
    
    

const logo = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
fs.writeFileSync('logo.svg', logo);
console.log('done')
