const max = 5;
const ranNumber = Math.floor(Math.random() * max) + 1;
// console.log(ranNumber);
let correct = false;
while (!correct) {
    let guess = Number(prompt("Guess a Number 1 - " + max));
    console.log(guess);

if (guess === ranNumber) {
        correct = true;
        console.log("You got it right, it is " + ranNumber);
    } else if (guess > ranNumber) {
        console.log("Too high");
    } else {
        console.log("Too Low");
    }
} 
