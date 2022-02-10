`use strict`;


let userName = prompt('What is your name');
alert(`welcome ${userName} , it's very nice to meet you.`);

let score = 0

function questionOne(){
  //first question
  let answerOne = prompt('Do I like anime?').toLowerCase();
  if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are Correct!!');
    score++
  } else if (answerOne === 'no' || answerOne === 'n') {
  
    alert('you are incorrect!!');
  }
  else {
    alert('Input not valid');
  }
}
questionOne();
function questionTwo(){
  //second question
  let answerTwo = prompt('Do I like to play games?').toLowerCase();
  console.log(answerTwo);
  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('You are Correct!!');
    score++
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('you are incorrect!! ');
  }
  else {
    alert('Input not valid');
  }

}
questionTwo();

function questionThree(){
  //third question
  let answerThree = prompt('Do I like fishing?').toLowerCase();
  if (answerThree === 'yes' || answerThree === 'y') {
    alert('You are Correct!!');
    score++
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('you are incorrect!! ');
  }
  else {
    alert('Input not valid');
  }

}
questionThree();

function questionFour(){
  //fourth question
  let answerFour = prompt('Do I like Pizza?').toLowerCase();
  console.log(answerFour);
  if (answerFour === 'yes' || answerFour === 'y') {
    alert('You are Correct!!');
    score++
  } else if (answerFour === 'no' || answerFour === 'n') {
    alert('you are incorrect!! ');
    console.log('you are incorrect.');
  }
  else {
    alert('Input not valid');
  }

}
questionFour();

function questionFive(){
  let answerFive = prompt('Do I like snowboarding?').toLowerCase();
  console.log(answerFive);
  if (answerFive === 'yes' || answerFive === 'y') {
    alert('You are Correct!!');
    score++
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('you are incorrect!! ');
    console.log('you are incorrect.');
  }
  else {
    alert('Input not valid');
  }

}
questionFive();
function questionSix(){
  //6th questions
  const myNumber = 2
  for (let counter = 0; counter < 4; counter++) {
    let input = prompt('Guess a number 1-10.');
    
  // review this part!!!! you needed to use strictly equals
    if (+input === myNumber) {
      alert('congrats you got it right!!!');
      score++;
      break;
    } else if (input > myNumber) {
      alert('too high');
    } else if (input < myNumber) {
      alert('too low');
    } else {
      alert('Input invalid');
    }
  
  }

}
questionSix();

function questionSeven(){
  //7th questions
  
  
  let snacks = ['chips', 'cookies', 'fruit', 'vegetables'];
  let rightAnswer = false // false becuase so far they haven't got it right
  
  for (let tries = 0; tries < 6; tries++) {
    let  input = prompt('Guess my favorite snack.');
    // this loop is to access the values of the array.
    for (let i = 0; i < snacks.length; i++) { 
      // this checks the input against the array 
      if (input === snacks[i]) {
        rightAnswer = true //to get out of the outer for loop
        score++;
        console.log(snacks[i]);
        alert('You are correct!');
        break;//gets you out of inner loop
      }
    }
    // this loop is to get out of the outer for loop
    if (rightAnswer === true) {
      break;
    }
    alert('You are wrong');
  }
  alert(`The correct answers are ${snacks}`)

}
questionSeven();
alert(`You answered ${score} out of 7 questions right`)





