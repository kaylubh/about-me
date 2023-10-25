'use strict';

// welcome user to the page
let userName = prompt('What is your name?');
alert('Hi ' + userName + '! Welcome to my about me page.');

// prompt user with about me guessing game questions
let button = document.getElementById('playGame');
button.addEventListener('click', guessingGame);

function guessingGame (){
  alert('Alright, ' + userName + ', let\'s get started!');

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

  let question6 = prompt('Now let\'s try something different...What is my favorite number? Answer with a NUMBER between 1 and 10.');
  question6 = parseInt(question6);
  let question6Counter = 0;
  while (question6 !== 7 && question6Counter < 3) {
    if (question6 > 7) {
      question6 = prompt('Try Again. That number was too high.');
      question6 = parseInt(question6);
      question6Counter++;
    } else if (question6 < 7) {
      question6 = prompt('Try Again. That number was too low.');
      question6 = parseInt(question6);
      question6Counter++;
    } else {
      question6 = prompt('Try Again. That wasn\'t a number.');
      question6 = parseInt(question6);
      question6Counter++;
    }
  }
  if (question6 === 7 && question6Counter <= 3) {
    alert('Correct! My favorite number is 7.');
  } else {
    alert('So Close! My favorite number is 7.');
  }

  let question7 = prompt('Now for the final and most difficult question...Guess one of the countries I would like to vacation in. Spelling matters but capitalization does not.');
  question7 = question7.toLowerCase();
  let question7Answers = ['spain', 'sweden', 'chile', 'south korea', 'australia', 'new zealand'];
  let question7Counter = 0;


}
