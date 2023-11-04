// 1 - Iterate 0 to 10 using for loop, do the same using while and do while loop
// Using for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Using while loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

// Using do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

//2 - Iterate 10 to 0 using for loop, do the same using while and do while loop
// Using for loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Using while loop
let m = 10;
while (m >= 0) {
  console.log(m);
  m--;
}

// Using do-while loop
let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 0);

// 3 - Iterate 0 to n using for loop
const n = 5;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// // 4 - Use for loop to iterate from 0 to 100 and print only even numbers
// let sumEvens = 0;
// let sumOdds = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEvens += i;
//   } else {
//     sumOdds += i;
//   }
// }
// console.log("The sum of all evens from 0 to 100 is " + sumEvens + ".");
// console.log("The sum of all odds from 0 to 100 is " + sumOdds + ".");

//5 - Use for loop to iterate from 0 to 100 and print only odd numbers
// let sumEvens = 0;
// let sumOdds = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEvens += i;
//   } else {
//     sumOdds += i;
//   }
// }
// console.log("The sum of all evens from 0 to 100 is " + sumEvens + ".");
// console.log("The sum of all odds from 0 to 100 is " + sumOdds + ".");

//6 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log("The sum of all numbers from 0 to 100 is " + sum + ".");

// 7 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    // If the number is even
    sumEvens += i;
  } else {
    // If the number is odd
    sumOdds += i;
  }
}

console.log("The sum of all evens from 0 to 100 is " + sumEvens + ".");
console.log("The sum of all odds from 0 to 100 is " + sumOdds + ".");

// 8 - Develop a small script which generate array of 5 random numbers
const randomArray = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(randomArray);

// 9 - Write a script which generates a random hexadecimal number.
//     ex: '#ee33df'
const randomHex =
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
console.log(randomHex);

// 10 - Write a script which generates a random rgb color number.
//     rgb(240,180,80)

function getRandomRGBValue() {
  return Math.floor(Math.random() * 256);
}

const randomRGB = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
console.log(randomRGB);
