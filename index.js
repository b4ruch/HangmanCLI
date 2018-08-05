const Word = require("./Word.js");
const inquirer = require("inquirer");

let Words = [
    `BREAKING BAD`,
    `FRIENDS`,
    `HOUSE OF CARDS`,
    'GREYS ANATOMY',
    `PRISON BREAK`,
    `THE SOPRANOS`,
    `SEINFELD`,
    `THE TWILIGHT ZONE`,
    `ALL IN THE FAMILY`,
    `MAD MEN`
];

const _GUESSES_ = 2;
let numGuesses = _GUESSES_;
let wins = 0;
let losses = 0;
let exit = false;



function showStats() {
    console.log(`\n\t\tWins: ${wins}\n\t\tLosses: ${losses}\n`);
}


function guessWord(word) {
    if (word.toString().includes("-") && numGuesses > 0) {

        console.log(`\nword: ${word.toString()}`);
        inquirer.prompt([
            {
                type: "input",
                name: "userChar",
                message: `Guess a letter: `
            }
        ]).then(ans => {
            //Save current guess
            let currentGuess = word.toString();
            //update characters that match user input
            word.resolveChars(ans.userChar.toUpperCase());
            //compare currentGuess with newGuess
            if (currentGuess == word.toString()) {
                numGuesses--;
                console.log(`INCORRECT\nRemaining guesses: ${numGuesses}`);
            }
            else {
                console.log(`CORRECT!`);
            }
            guessWord(word);
        });
    }
    else {
        if (numGuesses > 0) {

            console.log(`\n\t\t${word.toString()}\n\t\t----You win!----\n`);
            wins++;
            showStats();
        }
        else {
            console.log(`\n\t\t----You lose----\n`);
            losses++;
        }
        start();
    }
}


function start() {

    if (!exit) {
        inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "\n\nSelect your option",
                choices: [`New Game`, `Stats`, `Exit`]
            }
        ]).then(ans => {

            switch (ans.option) {
                case "New Game":
                    numGuesses = _GUESSES_;
                    let word = new Word(Words[Math.floor(Math.random() * Words.length)]);
                    word.resolveChars("");
                    guessWord(word);
                    break;

                case "Stats":
                    showStats();
                    start();
                    break;

                case "Exit":
                    exit = true;
                    break;
            }
        });
    }
}

start();