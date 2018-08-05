let Letter = require("./Letter.js");
const Word = function (word) {

    this.createLetters = function () {
        let tmp = [];

        // word.split("").forEach(char => {
        [...word].forEach(char => {
            let letter = new Letter(char);
            tmp.push(letter);
        });
        return tmp;
    };

    this.letters = this.createLetters();

    this.toString = function () {
        let tmp = "";
        this.letters.forEach(letter => {
            tmp += letter.printChar();
        });
        return tmp;
    };

    this.resolveChars = function (userChar) {
        this.letters.forEach(letter => {
            letter.resolveChar(userChar);
        });
    }
};

module.exports = Word;