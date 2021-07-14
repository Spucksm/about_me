'use strict';
console.log('Hello, this is only a test');

let userName = prompt('Welcome, my name is Spenser. What is your name?');
console.log('This users name is ' + userName);
alert('Welcome ' + userName);

alert ('Please answer all questions with yes or no responses.');

let questionOne = prompt('Do I like fish?');
// console.log(questionOne);
let fish = questionOne.toLowerCase();
if (fish === 'no' || fish === 'n') {
    alert('No, I  do not like fish.');
} else if (fish === 'yes' || fish === 'y') {
    alert('Sorry, that is not correct. I don\'t like fish.');
} else {
    alert('I didn\'t understand your answer.');
}
// console.log(fish);

let questionTwo = prompt('Do I live in Washington?');
// console.log(questionTwo);
let home = questionTwo.toLowerCase();
if (home === 'yes' || home === 'y') {
    alert ('Yes I do live in Washington.');
} else if (home === 'no' || home === 'n') {
    alert ('Sorry, that is not correct. I do live in Washington.');
} else {
    alert ('I didn\'t understand your answer. Make sure your responses are yes or no only.' );
}
// console.log(home);

let questionThree = prompt('Is my favorite color green?');
// console.log(questionThree);
let color = questionThree.toLowerCase();
if (color === 'yes' || color === 'y'){
    alert ('Correct! My favorite color is green! I wonder what your favorite color is.');
} else if (color === 'no' || color === 'n') {
    alert ('That is not correct. Indeed my favorite color is green.');
} else {
    alert ('I didn\'t understand your response. I can only understand yes or no responses at this time.');
}
// console.log(color);

let questionFour = prompt('Do I like soccer?');
// console.log(questionFour);
let sport = questionFour.toLowerCase();
if (sport === 'yes' || sport === 'y') {
    alert ('Yes! I love soccer. It is my favorite sport!');
} else if (sport === 'no' || sport === 'n') {
    alert ('Wrong, its like you don\'t even know me! Soccer is my favorite sport.');
} else {
    alert ('I didn\'t get that. Plaese answer these questions with a yes or no only.');
}
// console.log(sport);

let questionFive = prompt('Am I decent at coding?');
// console.log(questionFive);
let coding = questionFive.toLowerCase();
if (coding === 'yes' || coding === 'y') {
    alert ('You did it! you got it right. I think I am terrible at coding right now!');
} else if (coding === 'no' || coding === 'n'){
    alert ('Wrong. I think you may have higher regard for my skills than I do right now.');
} else {
    alert ('I only understand yes or no responses.');
}
// console.log(coding);

alert (userName + ', thank you for taking my quiz. My name is Spenser, I don\'t like fish, even though I live in Washington, my favorite color is green, my favorite sport is soccer, go Sounders! Lastly, I don\'t think I am very good at coding yet. I know I still have a lot to learn.');
