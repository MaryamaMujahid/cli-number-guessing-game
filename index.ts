#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\Welcome to code with Maryum- Cli Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 2 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(number limit 1 to 2);",
    
    },
]);

if(answer.userGuessedNumber === answer.randomNumber){
    console.log("congragulation! you guess a correct number.");
}
else{
    console.log(`ops!correct number was ${randomNumber}plz try again`);
}
