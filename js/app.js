`use strict`;
console.log('hey world');

let userName = prompt('What is your name');
      alert(`welcome ${userName} , it's very nice to meet you.`);

  //first question
let answerOne = prompt('Do I like anime?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are Correct!!');
  console.log('you are correct!')
} else if (answerOne === 'no' || answerOne === 'n') {

  alert('you are incorrect!!');
  console.log('you are incorrect.');
}
else {
  alert('Input not valid');
}

//second question
let answerTwo = prompt('Do I like to play games?').toLowerCase();
console.log(answerTwo);
if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are Correct!!');
  console.log('you are correct!')
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('you are incorrect!! ');
  console.log('you are incorrect.');
}
else {
  alert('Input not valid');
}
//third question
let answerThree = prompt('Do I like fishing?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  alert('You are Correct!!');
  console.log('you are correct!');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('you are incorrect!! ');
  console.log('you are incorrect');
}
else {
  alert('Input not valid');
}
//fourth question
let answerFour = prompt('Do I like Pizza?').toLowerCase();
console.log(answerFour);
if (answerFour === 'yes' || answerFour === 'y') {
  alert('You are Correct!!');
  console.log('you are correct!');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('you are incorrect!! ');
  console.log('you are incorrect.');
}
else {
  alert('Input not valid');
}














