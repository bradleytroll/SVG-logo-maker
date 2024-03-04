const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square} = require('./lib/shapes');

function generateLogo(text, textColor, shape, shapeColor) {
    const shapes = {
        circle: Circle,
        triangle: Triangle,
        square: Square,
        }
    const newShape = new shapes[shape](shapeColor);
    const shapeEl = newShape.render();
    const logoText = `<text fill="${textColor}">${text}</text>`;
        return `${logoText}${shapeEl}`
}
    

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
    .then((answers) => {
        const logo = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        fs.writeFileSync('logo.svg', logo);
        console.log('done');
}).catch((err) => console.log(err));
    
    
    
