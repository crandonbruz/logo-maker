const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const differentShapes = require('./shapes');

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
            const newShape = new Circle(results.shapes.color, results.shapes.text, results.shapes.textColor);
            
        }
    })
}
}

module.exports = CLI;