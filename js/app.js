'use strict';
console.log('Hello, this is only a test');

const pastaArray = ['lasagna', 'ravioli', 'stuffed giant shells', 'tortellini' ];
console.log('This is the Pasta Array', pastaArray);
let guessScore = 0;


let userName = prompt('Welcome, my name is Spenser. What is your name?');
console.log('This users name is ' + userName);
alert('Welcome ' + userName);

alert ('Please answer all questions with yes or no responses.');

let questionOne = prompt('Do I like fish?');
console.log(questionOne);
let fish = questionOne.toLowerCase();
if (fish === 'no' || fish === 'n') {
    alert('Correct, I  do not like fish.');
    guessScore++;
} else if (fish === 'yes' || fish === 'y') {
    alert('Sorry, that is not correct. I don\'t like fish.');
} else {
    alert('I didn\'t understand your answer.');
}
console.log(fish);

let questionTwo = prompt('Do I live in Washington?');
console.log(questionTwo);
let home = questionTwo.toLowerCase();
if (home === 'yes' || home === 'y') {
    alert ('Yes I do live in Washington.');
    guessScore++;
} else if (home === 'no' || home === 'n') {
    alert ('Sorry, that is not correct. I do live in Washington.');
} else {
    alert ('I didn\'t understand your answer. Make sure your responses are yes or no only.' );
}
console.log(home);

let questionThree = prompt('Is my favorite color green?');
console.log(questionThree);
let color = questionThree.toLowerCase();
if (color === 'yes' || color === 'y'){
    alert ('Correct! My favorite color is green! I wonder what your favorite color is.');
    guessScore++;
} else if (color === 'no' || color === 'n') {
    alert ('That is not correct. Indeed my favorite color is green.');
} else {
    alert ('I didn\'t understand your response. I can only understand yes or no responses at this time.');
}
console.log(color);

let questionFour = prompt('Do I like soccer?');
console.log(questionFour);
let sport = questionFour.toLowerCase();
if (sport === 'yes' || sport === 'y') {
    alert ('Yes! I love soccer. It is my favorite sport!');
    guessScore++;
} else if (sport === 'no' || sport === 'n') {
    alert ('Wrong, its like you don\'t even know me! Soccer is my favorite sport.');
} else {
    alert ('I didn\'t get that. Plaese answer these questions with a yes or no only.');
}
console.log(sport);

let questionFive = prompt('Am I decent at coding?');
console.log(questionFive);
let coding = questionFive.toLowerCase();
if (coding === 'no' || coding === 'n') {
    alert ('You did it! you got it right. I think I am terrible at coding right now!');
    guessScore++;
} else if (coding === 'yes' || coding === 'y'){
    alert ('I think you may have higher regard for my skills than I do right now.');
} else {
    alert ('I only understand yes or no responses.');
}

console.log(coding);
let questionSix = parseInt(prompt('Guess the number from 1- 100'));
let correctNumber = Math.floor(Math.random() * 100) +1;
console.log(correctNumber);
let guessAttempts = 4;
for (let i = 0; i < guessAttempts; i++) {
    while(questionSix < 1 || questionSix > 100) {
        questionSix = parseInt(prompt('Wrong range. Please enter a number 1- 100'));
    }
    if (questionSix === correctNumber) {
        alert('Wow good guess, you got it right!');
        guessScore++;
        break;
    } else if (questionSix < correctNumber) {
        alert ('To low, guess again.');
    } else if (questionSix > correctNumber) {
        alert ('To high, guess again.');
    } else {
        alert ('I didn\'t understand that, try agian.');
    }
    console.log(i);
    if (i === guessAttempts -1) {
        alert('You did not guess correctly. The correct answer is ' + correctNumber);
    }
    questionSix = parseInt(prompt('Guess the number from 1- 100'));
}
alert('This is not a yes or no question.');
// let pastaGuess = prompt('Can you guess one of my favorite types of Pasta?');
// let pasta = pastaGuess.toLowerCase();
let correctAnswer = false;
let guesses = 6;
let guessAmount = 5;
let i = 0;
// for (let i = 0; i < guessAmount; i++) {
while(i < guessAmount) {
    let pastaGuess = prompt('Can you guess one of my favorite types of Pasta?');
    console.log(userName + ' guessed that one of my favorite pasta dishes is ', pastaGuess);
    for (let j = 0; j < pastaArray.length; j++){
        if (pastaGuess === pastaArray[j]) {
            alert('Nice! you guessed correctly! I really like ' + pastaGuess + '. Its one of my favorites!');
            correctAnswer = true;
            guessScore++;
            i += 6;
            break;
        }
    }
    if ( correctAnswer === false && guesses > 0){
        alert ('Sorry, that is not one of my favorite pasta dishes. Guess again.');
    }
    guesses--;
    console.log('This is user guess ' + (6 - guesses));
    if (i === guessAmount && !correctAnswer) {
        alert('Sorry you got it wrong, correct answers were: ' + pastaArray);
    }
    i++;
}


alert (userName + ', thank you for taking my quiz. My name is Spenser, I don\'t like fish, even though I live in Washington, my favorite color is green, my favorite sport is soccer, go Sounders! Lastly, I don\'t think I am very good at coding yet. I know I still have a lot to learn. You answered ' + guessScore + ' questions correctly.');
