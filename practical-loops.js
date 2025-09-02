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

let n = 3;

// just a little testing with a basic loop
// for (n = 0; n <= 41; n++) {
//     console.log(n);
// }

// first step - determine if a number is prime or not (true/false - boolean)

for (i = 0; i < 48; i++) {
    n += i
    if (n % n == 0) {
        console.log(n);
    } else {
        console.log(`${n} is not a prime number.`);
    }
}
