/* 
***********************************************
*Author: Baruch Flores                        *
*Homework 11: Hangman on NodeJS               *
*UCB Extension - Full-Stack Bootcamp          *
*August 2018                                  *
*********************************************** 
*/

const Letter = function (uchar) {
    this.uchar = uchar;
    this.guessed = false;
    this.printChar = function () {
        return this.guessed ? this.uchar : "-";
    };
    this.resolveChar = function (userChar) {
        //IF it's already guessed, skip it
        if (!this.guessed) {
            this.guessed = this.uchar == " " || this.uchar == userChar ? true : false;
        }
    }
}

module.exports = Letter;