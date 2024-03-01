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
    .then((answers) => {
       //Now need to take answers and crate the shapes

    })
