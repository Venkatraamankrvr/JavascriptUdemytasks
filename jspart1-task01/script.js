////TEST01;
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const heightJohn = 2;
// const massMark = ;
// const heightMark = ;
// const massJohn = ;
// const heightJohn = ;
///TEST02;
// let massMark = ;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// let massMark = ;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
