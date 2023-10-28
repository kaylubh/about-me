'use strict';

// welcome user to the page
let userName = prompt('What is your name?');
alert('Hi ' + userName + '! Welcome to my about me page.');

// prompt user with about me guessing game questions
let button = document.getElementById('playGame');
button.addEventListener('click', guessingGame);

function guessingGame() {
  alert('Alright, ' + userName + ', let\'s get started!');

  let results = [];
  let question1 = ['Is this true: I\'m an Army Veteran? Answer with YES or Y for TRUE and NO or N for FALSE', 'yes', 'y', 'no', 'n'];
  let question2 = ['Is this true: I don\'t currently have any formal degrees but have attended some college? Answer with YES or Y for TRUE and NO or N for FALSE', 'yes', 'y', 'no', 'n'];
  let question3 = ['Is this true: My favorite color is yellow? Answer with YES or Y for TRUE and NO or N for FALSE', 'no', 'n', 'yes', 'y'];
  let question4 = ['Is this true: I think Penguins are the cutest things to ever exist? Answer with YES or Y for TRUE and NO or N for FALSE', 'yes', 'y', 'no', 'n'];
  let question5 = ['Is this true: Eventually, I would like to be unemployed? Answer with YES or Y for TRUE and NO or N for FALSE', 'no', 'n', 'yes', 'y'];

  // questions 1-5
  function askQuestion(question) {
    let response = prompt(question[0]);
    response = response.toLowerCase();
    if (response === question[1] || response === question[2]) {
      alert('Correct');
      results.push(true);
    } else if (response === question[3] || response === question[4]) {
      alert('Incorrect');
      results.push(false);
    } else {
      alert('Invalid answer');
      results.push(false);
    }
  }
  for (let i = 0; i < 5; i += 1) {
    let questionHolder = [question1, question2, question3, question4, question5];
    askQuestion(questionHolder[i]);
  }

  // question 6
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
    results.push(true);
  } else {
    alert('So Close! My favorite number is 7.');
    results.push(false);
  }

  // question 7
  let question7 = prompt('Now for the final and most difficult question...Guess one of the countries I would like to vacation in. Spelling matters but capitalization does not.');
  question7 = question7.toLowerCase();
  let question7Answers = ['spain', 'sweden', 'chile', 'south korea', 'australia', 'new zealand'];
  let question7Counter = 0;
  let question7CorrectAnswer;
  while (question7Counter < 5 && question7CorrectAnswer !== true) {
    for (let i = 0; i < question7Answers.length; i++) {
      if (question7Answers[i] === question7) {
        alert('Correct!');
        question7CorrectAnswer = true;
        break;
      } else if (question7Counter >= 5) {
        break;
      }
    }
    if (question7CorrectAnswer !== true) {
      question7 = prompt('Try Again...Guess one of the countries I would like to vacation in. Spelling matters but capitalization does not.');
      question7 = question7.toLowerCase();
      question7Counter++;
    }
  }
  if (question7CorrectAnswer) {
    alert('Great Guess! I want to visit these countries: ' + question7Answers);
    results.push(true);
  } else {
    alert('Good Guesses but I want to visit these countries: ' + question7Answers);
    results.push(false);
  }
  // classmates Immanuel and Andrea helped me create this loop

  // generate final score
  let correctAnswers = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] === true) {
      correctAnswers.push(results[i]);
    }
  }
  console.log(correctAnswers);
  alert('You got ' + correctAnswers.length + ' out of ' + results.length + ' questions correct!');
}
