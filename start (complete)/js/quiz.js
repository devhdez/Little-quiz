/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let answerOne = false;
let answerTwo = false;
let answerThree = false;
let answerFour = false; 
let answerFive = false;

// 2. Store the rank of a player

let points = 0;


// 3. Select the <main> HTML element


const main = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the z`number of correct answers
*/

const questionOne = prompt("What's the capital of Spain?");
const questionTwo = prompt("What's the closest planet to the Sun?");
const questionThree = prompt("What's the capital of Scotland?");
const questionFour = prompt("Where was football invented?"); 
const questionFive = prompt("What's the capital of Venezuela?");



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if ( questionOne.toUpperCase().trim().includes('MADRID')) {
  answerOne = true;
}
if ( questionTwo.toUpperCase().trim().includes('MERCURY')) {
  answerTwo = true;    
}
if ( questionThree.toUpperCase().trim().includes('EDINBURGH')) {
  answerThree = true;  
}
if ( questionFour.toUpperCase().trim().includes('ENGLAND')) {
  answerFour = true;  
}
if ( questionFive.toUpperCase().trim().includes('CARACAS')) {
  answerFive = true;  
}

// 6. Output results to the <main> element
if ( answerOne ) {
  points += 1;  
}
if ( answerTwo ) {
  points += 1;
}
if ( answerThree ) {
  points += 1;
}
if ( answerFour ) {
  points += 1;
}
if ( answerFive ) {
  points += 1;
}

if ( points === 0) {
  main.innerHTML = `<p> Unfortunately you scored ${points}. Better luck next time! </p>` ;
}
if ( points === 1 || points === 2 ) {
  main.innerHTML = `<p> ${points} points! You get a bronze crown! </p>` ;
}
if ( points === 3 || points === 4){
  main.innerHTML = `<p> ${points} points! You get a silver crown! </p>` ;
}
if ( points === 5){
  main.innerHTML = `<p> ${points} points! Congratulations! You get a gold crown! </p>` ;
}

