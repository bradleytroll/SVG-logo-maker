const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square} = require('./lib/shapes');

function generateSVG(text, textColor, shape, shapeColor) {
    const header = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    const footer = '</svg>';
    const textElement = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    let shapeElement = '';

    switch (shape) {
        case 'circle':
            shapeElement = new Circle(shapeColor).render();
            break;
        case 'triangle':
            shapeElement = new Triangle(shapeColor).render();
            break;
        case 'square':
            shapeElement = new Square(shapeColor).render();
            break;
    }

    return `${header}${shapeElement}${textElement}${footer}`;
}
    

inquirer
    .prompt([
        {
            name: "text",
            type: "input",
            message: "Enter up to three characters for the logo",
            validate: (text) => 
                text.length <= 3 ? true : "The logo can not contain more than three characters"
            
        },
        {
            name: "textColor",
            type: "input",
            message: "Enter a color for the text",
                    },
        {
            name: "shape",
            type: "list",
            message: "Choose a shape for the logo",
            choices: [
                'circle', 'triangle', 'square'
            ],
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Enter a color to fill the shape",
                    },
])
         .then((answers) => {
            const svgContent = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
            fs.writeFile('logo.svg', svgContent, (err) => {
                if (err) {
                    console.error('Failed to write logo.svg', err);
                } else {
                    console.log('Generated logo.svg')
                }
            })
        })
        .catch((err) => console.log(err));

    
    
    

    
    
    
    
    
    
    
    
    
    