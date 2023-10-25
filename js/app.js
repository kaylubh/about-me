'use strict';

// welcome user to the page
let userName = prompt('What is your name?');
alert('Hi ' + userName + '! Welcome to my about me page.');

// prompt user with about me guessing game questions
let button = document.getElementById('playGame');
button.addEventListener('click', guessingGame);

function guessingGame (){
  let question1 = prompt('Is this true: I\'m an Army Veteran? Answer with YES or Y for TRUE and NO or N for FALSE');
  question1 = question1.toLowerCase();
  if (question1 === 'yes' || question1 === 'y') {
    // console.log('Correct');
    alert('Correct');
  } else if (question1 === 'no' || question1 === 'n') {
    // console.log('Incorrect');
    alert('Incorrect');
  } else {
    // console.log('Invalid answer');
    alert('Invalid answer');
  }

  let question2 = prompt('Is this true: I don\'t currently have any formal degrees but have attended some college? Answer with YES or Y for TRUE and NO or N for FALSE');
  question2 = question2.toLowerCase();
  if (question2 === 'yes' || question2 === 'y') {
    // console.log('Correct');
    alert('Correct');
  } else if (question2 === 'no' || question2 === 'n') {
    // console.log('Incorrect');
    alert('Incorrect');
  } else {
    // console.log('Invalid answer');
    alert('Invalid answer');
  }

  let question3 = prompt('Is this true: My favorite color is yellow? Answer with YES or Y for TRUE and NO or N for FALSE');
  question3 = question3.toLowerCase();
  if (question3 === 'no' || question3 === 'n') {
    // console.log('Correct');
    alert('Correct');
    alert('My favorite color is actually orange');
  } else if (question3 === 'yes' || question3 === 'y') {
    // console.log('Incorrect');
    alert('Incorrect');
    alert('My favorite color is actually orange');
  } else {
    // console.log('Invalid answer');
    alert('Invalid answer');
  }

  let question4 = prompt('Is this true: I think Penguins are the cutest things to ever exist? Answer with YES or Y for TRUE and NO or N for FALSE');
  question4 = question4.toLowerCase();
  if (question4 === 'yes' || question4 === 'y') {
    // console.log('Correct');
    alert('Correct');
  } else if (question4 === 'no' || question4 === 'n') {
    // console.log('Incorrect');
    alert('Incorrect');
  } else {
    // console.log('Invalid answer');
    alert('Invalid answer');
  }

  let question5 = prompt('Is this true: Eventually, I would like to be unemployed? Answer with YES or Y for TRUE and NO or N for FALSE');
  question5 = question5.toLowerCase();
  if (question5 === 'no' || question5 === 'n') {
    // console.log('Correct');
    alert('Correct');
    alert('I don\'t want to be unemployed but rather self-employed');
  } else if (question5 === 'yes' || question5 === 'y') {
    // console.log('Incorrect');
    alert('Incorrect');
    alert('I don\'t want to be unemployed but rather self-employed');
  } else {
    // console.log('Invalid answer');
    alert('Invalid answer');
  }
}
