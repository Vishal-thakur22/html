let a = alert('click ok to play the game');
let b = prompt('Enter your name');
// it will generTe random number between 1 to 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

let c = prompt('Enter a number between 1 and 100');
// if the number is equal to the random number then the user wins the game
if (c == randomNumber) {
    alert('Congratulations ' + b + ' you won the game');
  } else if (c > randomNumber) {
    alert(`The number is greater than ${c}`);
    guessNumber();
  } else if (c < randomNumber) {
    alert(`The number is less than ${c}`);
    guessNumber();
  } 
  if (c != randomNumber) {
    alert('You lost the game');
  }