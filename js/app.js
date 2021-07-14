'use strict';

// The user's name from the greeting!
let username= prompt('Might I inquire your name?');

// Greet the user
alert('Hello ' + username);

let answerOne = prompt('Welcome to this web page! Is this your first time on this page? Please reply with a \'yes\' or \'no\'').toLowerCase();


if (answerOne === 'yes' || answerOne === 'y' || answerOne === 'ya') {
  alert('Pray tell why you would journey back, mortal.');
}

else if (answerOne === 'no' || answerOne === 'n') {
  alert('Welcome, Foolish Mortal, to this spooky web page!');
}

else {
  alert('I am sorry, I could not quite catch that. Please respond with a yes or no!');
}

// console.log('user replied to question 1 with: ' + answerOne');

let answerTwo = prompt('There is no turning back now. Our spooky Q&A begins here! Was the name of the killer in the film, \'Halloween\', named Michael Myers? Mortal! Answer now with a \'yes\' or \'no\'').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y' || answerTwo === 'ya') {
  alert('Well, well. You are correct. Begginer\'s\ luck I suppose.');
}

else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong! Perhaps you are more foolish than I thought');
}

else {
  alert('Mortal! Please enter a viable answer! \'yes\' or \'no\'!');
}

// console.log('user replied to question 2 with: ' + answerTwo');

let answerThree = prompt('Hmm...that was just a warmup question. This is a bunch of hocus pocus... Speaking of which, mortal, did Bette Midler portray the character, Winifred Sanderson, in the movie, \'Hocus Pocus\'? Reply with \'yes\' or \'no\'').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y' || answerThree === 'ya') {
  alert('Correct! Well, what do you know. Third time really is the charm')
}

else if (answerThree === 'no' || answerThree === 'n') {
  alert('Incorrect! Horror, you are not very well versed, because you are \'cursed\'!');
}

else {
  alert('Mortal! Again, please enter a viable answer! \'yes\' or \'no\'!');
}

// console.log('user replied to question 3 with: ' + answerThree');

let answerFour = prompt('Nearing the end of our questions. Halloween...Did this holiday originate in Ireland? Reply with \'yes\' or \'no\'').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y' || answerFour === 'ya') {
  alert('Correct! Im assuming you are well versed in all that is spooky and scary');
}

else if (answerFour === 'no' || answerFour === 'n') {
  alert('Incorrect! You are having bad luck with these questions...aren\'t\ you?')
}

else {
  alert('Mortal! Please enter a viable answer! \'yes\' or \'no\'!');
}

// console.log('user replied to question 4 with: ' + answerFour');

let answerFive = prompt('Well our questions end here with this last one. Answer wisely....Was this game enjoyable? Reply with \'yes\' or \'no\'').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y' || answerFive === 'ya') {
  alert('Phew! Mortal, I am glad I didn\'t\ have to curse you! Thank you for answering correctly! Have a pleasant life! Goodbye for now....')
}

else if (answerFour === 'no' || answerFour === 'n') {
  alert('You did not like the game...Fine! I won\'t\ curse you, but I will make sure that you enjoy my next game!')
}

else {
  alert('This is the end of the game! Please enter a viable answer! \'yes\' or \'no\'!')
}

// console.log('user replied to question 5 with: ' + answerFive');