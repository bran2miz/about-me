 `use strict`;

let correctAnswers= 0;

let username= prompt(`Might I inquire your name?`);

alert('Hello ' + username);

function questionOne(){
  let answerOne = prompt(`Welcome to this web page! Is this your first time on this page? Please reply with a yes or no`).toLowerCase();


  if (answerOne === `yes` || answerOne === `y` || answerOne === `ya`) {
    alert('Pray tell why you would journey back, mortal.');
    correctAnswers++;
  }

  else if (answerOne === 'no' || answerOne === 'n') {
    alert(`Welcome, Foolish Mortal, to this spooky web page!`);
  }

  else {
    alert(`I am sorry, I could not quite catch that. Please respond with a yes or no!`);
  }
}

questionOne();

function questionTwo(){
  let answerTwo = prompt(`There is no turning back now. Our spooky Q&A begins here! Was the name of the killer in the film, Halloween, named Michael Myers? Mortal! Answer now with a yes or no`).toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y' || answerTwo === `ya`) {
    alert(`Well, well. You are correct. Begginer luck I suppose.`);
    correctAnswers++;
  }

  else if (answerTwo === `no` || answerTwo === `n`) {
    alert(`Wrong Perhaps you are more foolish than I thought!`);
  }

  else {
    alert('Mortal! Please enter a viable answer! yes or no!');
  }
}
questionTwo();

function questionThree(){
  let answerThree = prompt(`Hmm...that was just a warmup question. This is a bunch of hocus pocus... Speaking of which, mortal, did Bette Midler portray the character, Winifred Sanderson, in the movie, Hocus Pocus? Reply with yes or no`).toLowerCase();

  if (answerThree === `yes` || answerThree === `y` || answerThree === `ya`) {
    alert(`Correct! Well, what do you know. Third time really is the charm`);
    correctAnswers++;
  }

  else if (answerThree === 'no' || answerThree === 'n') {
    alert(`Incorrect! Horror, you are not very well versed, because you are cursed!`);
  }

  else {
    alert(`Mortal! Again, please enter a viable answer! yes or no!`);
  }
}
questionThree();

function questionFour(){
  let answerFour = prompt(`Nearing the end of our questions. Halloween...Did this holiday originate in Ireland? Reply with yes or no`).toLowerCase();

  if (answerFour === `yes` || answerFour === `y` || answerFour === `ya`) {
    alert(`Correct! Im assuming you are well versed in all that is spooky and scary`);
    correctAnswers++;
  }

  else if (answerFour === `no` || answerFour === `n`) {
    alert(`Incorrect! You are having bad luck with these questions...`);
  }

  else {
    alert(`Mortal! Please enter a viable answer! yes or no!`);
  }
}
questionFour();

function questionFive(){
  let answerFive = prompt(`Well our questions end here with this last one. Answer wisely....Was this game enjoyable? Reply with yes or no`).toLowerCase();

  if (answerFive === `yes` || answerFive === `y` || answerFive === `ya`) {
    alert(`Phew! Mortal, I am glad I did not have to curse you! Thank you for answering correctly! Have a pleasant life! Goodbye for now....`);
    correctAnswers++;
  }

  else if (answerFive === `no` || answerFive === `n`) {
    alert(`You did not like the game...Fine! I will not curse you, but I will make sure that you enjoy my next game!`);
  }

  else {
    alert(`This is the end of the game! Please enter a viable answer! yes or no!`);
  }
}
questionFive();

function questionSix(){
  let correctAnswer = 7;
  // first this is the actual answer
  let userGuess = +prompt('Fortune Teller: I Am Thinking of a Number Between 1-10. Please Enter Your Guess Should You Dare...');
  // using a prompt the user will input their answer which will be saved into userGuess

  let guessAttempts = 3;
  // amount of the guess attempts
  let attempts = 3;
  // attempts left

  while (guessAttempts) {
  // while there are guessAttempts left
    for (let i = 0; i < attempts; i++){
    // using a for loop with the amount of attempts still left
      if (userGuess === correctAnswer){
        guessAttempts = 0;
        alert(`Fortune Teller: Wait..ARE YOU A MIND READER?!! You got it right!`);
        correctAnswers++;
        // user gets it right and then set the guess attempts to 0 (since it was guessed correctly)
        // correctAnswers is added to the counter
        break;
        // code breaks and while loops ends
      }
      else if (userGuess < correctAnswer){
        //conditional if the guess is less than the answer
        alert(`Fortune Teller: Hmm..no..too low..Would you like to try again? You have ${guessAttempts} attempts remaining.`);
        // alert the user and give them the remaining guess attempts left using template literals
        userGuess = +prompt(`Please enter another number`);
        // prompt the user to input and guess again
      }
      else if (userGuess > correctAnswer){
        // conditional if the user's guess is larger than the answer
        alert(`Fortune Teller: Hmm..your number is too great..Would you like to try again? You have ${guessAttempts} attempts remaining.`);
        // alert user that it is too large and provide the remaining guess attempts left using the template literals
        userGuess = +prompt(`Can you try another number?`);
        // prompt the user to input and guess again
      }
      guessAttempts--;
      // this will decrement all the guessAttempts by 1
      if (guessAttempts === 0 && userGuess !== correctAnswer){
        // conditional if there are no guessAttempts left and the user's guess does not equate to the correct answer
        alert(`Fortune Teller: The correct answer was ` + correctAnswer);
        // tell the correct answer with an alert
      }
      else if (userGuess === correctAnswer) {
      // right answer conditional solves an issue that exits out of program if they guess correctly (because the correct answer conditional was only written in the beginning and not the end) 
        alert(`Fortune Teller: Wait..ARE YOU A MIND READER?!! You got it right!`);
        correctAnswers++;
      }
    }
  }
}
questionSix();

function questionSeven(){
  let favDestination = [`PARIS`, `BARCELONA`,`CABO`, `VIENNA`, `ANTWERP`];
  let listOfAnswers = [`PARIS`, `BARCELONA`, `CABO`];
  let guessUser = 6;

  while (guessUser) {
    let favWorld = prompt(`What is one of my favorite destinations to visit?\nPossible Answers:\n\n${favDestination[0]}\n${favDestination[1]}\n${favDestination[2]}\n${favDestination[3]}\n${favDestination[4]}\n`);

    guessUser--;

    let correct = false;

    for (let i = 0; i < listOfAnswers.length; i++){
      if (favWorld.toUpperCase() === listOfAnswers[i]){
        alert(`That's correct. ${listOfAnswers[i]} is one of my favorite destinations!`);
        correct = true;
        break;
      } else {
        continue;
      }
    }
    if (correct === true) {
      correctAnswers++;
      break;
    }
    else {
      alert(`That is not one of my destinations. You have ${guessUser} attempts remaining.`);
    }
  }
}
questionSeven();

function questionEight(){
  alert(`You got `  + correctAnswers + ` answers correct!`);
}

questionEight();

