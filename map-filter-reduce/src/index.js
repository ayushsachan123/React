// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//     return x*2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//Using for each
// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//In map also we can put function inside function
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);



//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num){
//     return num>10;
// });
// console.log(newNumbers);

// var newNumbers = [];
// numbers.forEach(function(num){
//     if(num<10){
//         newNumbers.push(num);
//     }
// });



//Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function(accumulator, currentNumber){
//     return accumulator + currentNumber;
// });

// var newNumber = 0;
// numbers.forEach(function(currentNumber){
// newNumber +=currentNumber;
// })
// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num){
//     return num>10;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
 
// const newNumber = numbers.findIndex(function (num){
//     return num>10;
// })
// console.log(newNumber);

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0,100);
});

console.log(newEmojipedia);
