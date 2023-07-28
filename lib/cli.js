const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes');
const { error } = require('console');

class CLI {
    constructor(){
        this.title = '';
        this.tasks = [];
    }
run() {
    return inquirer
    .prompt([
        {
            type: 'imput',
            name: 'text',
            message: 'Enter the text for your save logo:',
        },
        {
            type: 'imput',
            name: 'textColor',
            message: 'Enter the color for the text in the logo:',
        },
        {
            type: 'imput',
            name: 'color',
            message: 'Enter the color for the selected shape:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the desired shape:',
            choices: ['circle', 'triangle', 'square'],
        },
    ])
    .then((results) => {
        console.log(results);

        if(results.shape === "circle"){
            const newShape = new Circle(results.text, results.color , results.textColor);
            const newSVG = newShape.render()
            fs.writeFile('./output/logo.svg', newSVG, (error) =>{
                error ? console.log(error): console.log("Generated logo.svg")
            })


        }else if (results.shape === "triangle") {
            const newShape = new Triangle(results.text, results.color , results.textColor);
            const newSVG = newShape.render()
            fs.writeFile('./output/logo.svg', newSVG, (error) =>{
                error ? console.log(error): console.log("Generated logo.svg")
            })
        } else if(results.shape === "square") {
            const newShape = new Square(results.text, results.color , results.textColor);
            const newSVG = newShape.render()
            fs.writeFile('./output/logo.svg', newSVG, (error) =>{
                error ? console.log(error): console.log("Generated logo.svg")
            })
        }
    })
}
}

module.exports = CLI;