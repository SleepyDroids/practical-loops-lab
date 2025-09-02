// Jacqueline LaFontaine
// Lab ALAB 308.3.1: Practical Loops
// https://www.canva.com/design/DAFxi0NmQZg/C-TSOegNzPs6DYWoIm31WA/edit

// PART 1: FIZZ BUZZ
// To begin, solve the following classic “Fizz Buzz” problem. 
// There are a few different ways to do this - experiment with what you think is the most efficient. 
// Once you have solved the problem, ask yourself if there could be another way; and if so, 
// would it be better.

// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// function fizzBuzz () {
//     for (i = 1; i < 101; i++) {
//         console.log(i);
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('fizz buzz');
//         } else if (i % 3 == 0) {
//             console.log('fizz');
//         } else if (i % 5 == 0) {
//             console.log('buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(); 

// PART 2: PRIME NUMBERS
// Write a script that accomplishes the following:
// 1. Declare an arbitrary number, n.
// 2. Create a loop that searches for the next prime number, starting at n and incrementing from there.
// 3. As soon as you find the prime number, log that number and exit the loop.

let n;
// changed it to be interactive with the user  
n = window.prompt("Enter a number here: ");

// Part 1: create the loop for incrementation
// Part 2: create a loop that checks for prime number and breaks out of the first loop
// when it finds the prime number 

// create a new variable to connect n (the starting point)
// userPrompt++ for the incrementation (to calculate through the next numbers)
// true to make it an infinite loop to keep checking through the incrementation
for (let userPrompt = n; true; userPrompt++) {
        // declaring a new variable but not assigning it yet
        let checkIfPrime; 
        // doing outside of the for loop and if else statements since it is a variable that will be used inside another loop and a statement
        // starting at 2 to check if the userPrompt is divisible by 2 with no remainder
        // checkIfPrime will end at the next number in order that is being incremented by the outer loop
        for (checkIfPrime = 2; checkIfPrime < userPrompt; checkIfPrime++) {
            if (userPrompt % checkIfPrime == 0) break; // break out of inner loop, go back to outer loop
        }
        // prime numbers are divisible by themselves
        if (checkIfPrime == userPrompt && userPrompt > 0) {
            console.log(`${userPrompt} is the next prime number after the initial input of ${n}.`);
            break; // break out of the outer loop because I found a prime
        }
}
