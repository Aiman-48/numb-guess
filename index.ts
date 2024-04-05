#! /usr/bin/env node

import inquirer from "inquirer";

// const randomNumber = Math.random();

// console.log (randomNumber);

const randomNumber = Math.floor(Math.random() * 6 + 1);




const answers = await inquirer.prompt([

{
    name : "userGuessedNumber",
    type :"number",
    message : "guess a number between 1-10:"

}

]);

if(answers.userGuessedNumber === randomNumber ){

    console.log("congrats")

} else {

    console.log("wrong numb")
}