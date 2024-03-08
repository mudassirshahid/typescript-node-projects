"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer_1.default.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your TOdo List:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
