// QNO:1

// //sum of Two Numbers:
// //Write a function that takes two numbers as arguments and returns their sum

// function sum(num1, num2) {
//   return num1 + num2;
// }
// alert(sum(4, 8));  ////Result :12

// QNO: 2

// ////Convert Celsius to Fahrenheit:
// /////Create a function that converts a temperature from Celsius to Fahrenheit using the formula F = C * 9/5 + 32.              

// function celsiusToFahrenheit(celsius) {
//   return celsius * (9 / 5) + 32;
// }
// const tempCelsius = 35;
// const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
// document.write(`${tempCelsius}°C is equal to ${tempFahrenheit}°F`);

// Result: 35°C is equal to 95°F//

// QNO: 3

// Check for Prime Number:
// /Write a function that takes a number as input and returns true if the number is prime, and false otherwise.


// function user(yes) {
//   return yes;
// }

// let user = prompt("enter your no");
// if (user > 1) {
//   console.log("is Prime");
// }
// else {
//   console.log("is not prime");
// }


// if (year % 400 === 0) {
//   console.log(`${year} is a leap year `)
// } else if (year % 100 === 0) {
//   console.log(`${year} is not a leap year `)
// } else {
//   console.log(`you did not enter anything `)
// }

// QNO: 4

// ///Reverse a String:
// ///Create a function that takes a string as input and returns the string reversed.


// function reverseString(input) {
//   let join = input.split("").reverse().join("")
//   console.log(join);

// }
// reverseString("ayesha")  //////result ahseya

// QNO: 5
// ///Factorial of a Number:
// ///Write a function that calculates the factorial of a given number (e.g., factorial(5) should return 120).

// function factorial(n) {
//   if (n < 5) {
//     return 'Invalid input';
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5)); //Result : 120


// QNO: 6

// ///Greet User (No Parameters):
// ///Write a function that prints a generic greeting message like "Hello, welcome!" without taking any parameter


// function greeting() {
//   console.log("Hello welcome");
// }
// greeting() ///Result :  Hello welcome

// QNO: 7

// ///Greet by Name (With Parameter):
// ///Create a function that takes a name as a parameter and prints a personalized greeting, e.g., "Hello, [name]!"

// function greeting(name) {
//   console.log("hello aslam");
// }
// greeting(name)  /////Result : hello aslam

// QNO: 8

// ///Sum of Two Numbers (With Parameters):
// //Write a function that accepts two numbers as parameters and returns their sum.

// function add(num1, num2) {
//   return num1 + num2
// }
// console.log(23 + 12);/////Result :35

// QNO: 9

//   / Random Number Generator(No Parameters):
// /Create a function that generates and returns a random number between 0 and 100. This function does not require any parameters.

// function getNum() {
//   return Math.floor(Math.random() * 101);
// }

// var randomNum = getNum();
// console.log(randomNum);

// Qno: 10

// ///Check Age for Voting (With Parameter):
// ///Write a function that takes age as a parameter and checks if the person is eligible to vote (18 years or older). It should return true or false.


// function isEligibleToVote(age) {
//   return age;
// }
// let age = prompt("enter your no")
// if (age >= 18) {
//   console.log("is Eligible ToVoter");
// }
// else {
//   console.log("is not Eligible ToVoter");
// }



// 11.////// Arrow Function
// ///Square of a Number:
// ///Write an arrow function that takes a number as input and returns its square.
// Qno: 1
// var square = (num) => num * num;
// console.log(square(5));


// Qno2
// ///Array of Even Numbers:
// ///Create an arrow function that takes an array of numbers and returns a new array containing only the even numbers.

// var arr = [1, 2, 3, 4, 5, 6];
// var evenNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumbers.push(arr[i]);
//   }
// }

// console.log(evenNumbers);


// //     Qno:3

// // ///Concatenate Strings:
// // ////Write an arrow function that takes two strings as arguments and returns them concatenated.

// const concatenateStrings = (str1, str2) => str1 + str2;
// console.log(concatenateStrings("Hello, ", "World!"));


// // Qno:4

// ///Find Maximum Number in an Array:
// ////Create an arrow function that accepts an array of numbers and returns the maximum value in the array.

// var findMax = (arr) => Math.max(...arr);
// console.log(findMax([1, 3, 2, 5, 4]));


// Qno: 5

// /////Sum of All Numbers in an Array:
// //// Write an arrow function that takes an array of numbers as input and returns the sum of all the numbers.

// function sumArray(numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// const numbers = [8, 8, 10, 5];
// const result = sumArray(numbers);
// console.log(result);

// // Qno:6

// // ////Print "Hello World" (No Parameters):
// // ///Write an arrow function that takes no parameters and simply prints "Hello World" to the console.log

// var messege = () =>
//   console.log("Hello World");
// messege();

// // Qno:7

// // //Calculate Square of a Number (With Parameter):
// // ///Create an arrow function that takes a number as a parameter and returns its square.


// var calculateSquare = (num) => num * num;
// console.log(calculateSquare(8));


// // Qno:8
// ///Check if Number is Positive (With Parameter):
// // /////Write an arrow function that accepts a number as a parameter and returns true if the number is positive, and false if it is negative or zero.


// const isPositive = (num) => num > 0;
// const userInput = prompt("Enter a number:");
// const Numbers = Number(userInput);
// if (isPositive(number)) {
//   console.log("The number is positive.");
// } else {
//   console.log("The number is negative or zero.");
// }


// // Qno:9

// // ////Generate a Random Number (No Parameters):
// // /////Create an arrow function that takes no parameters and returns a random number between 1 and 50.

// var generateRandomNumber = () => Math.floor(Math.random() * 50) + 1;
// console.log(generateRandomNumber());


// // Qno:10

// // //////Convert Minutes to Seconds (With Parameter):
// // /////Write an arrow function that takes minutes as a parameter and returns the equivalent time in seconds.


// var convertMinutesToSeconds = (minutes) => minutes * 60;
// console.log(convertMinutesToSeconds(3));



// //               ///// 12.Annoynumus Function

// // Qno:1

// //  ///Print "Hello" (No Parameters):
// //   ////Create an anonymous function that prints "Hello" to the console. Immediately invoke the function.

// (function () {
//   console.log("Hello");
// })();

// // Qno:2

// // //////Sum of Two Numbers (With Parameters):
// // //////Write an anonymous function that takes two numbers as arguments and returns their sum. Assign it to a variable and call the function

// var sum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum(13, 4));


// // Qno:3

// // //////Array Sorting (With Parameters):
// // ////////Use an anonymous function as a callback in Array.sort() to sort an array of numbers in ascending order.

// var number = [5, 3, 8, 1];
// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);


// // Qno:4

// // /////Greeting Message (With Parameter):
// // /////Create an anonymous function that takes a name as a parameter and logs a greeting message like "Hello, [name]!". Immediately invoke the function.




// (function (name) {
//   console.log("hello aslam");
// }
//   (name))  /////Result : hello aslam

// // Qno:5

// // //////Check if Number is Even or Odd (With Parameter):
// // ///////Write an anonymous function that takes a number as a parameter and logs whether the number is even or odd. Store it in a variable and then invoke it.


// let number = function (even, odd) {
//   return even, odd
// }
// let a = prompt("enter your number?");
// if (a % 2 == 0) {
//   console.log("is number even");

// } else {
//   console.log("is number odd");
// }



// // Qno:6
// // ////////Filter Odd Numbers from an Array (With Parameters):
// // //////Use an anonymous function as a callback in Array.filter() to return only the odd numbers from an array of integers.

// var numbersArray = [1, 2, 3, 4, 5, 6];
// var oddNumbers = numbersArray.filter(function (num) {
//   return num % 2 !== 0;
// });
// console.log(oddNumbers);


// // Qno:7
// // ///////Factorial Calculation (With Parameter):
// // ////////Create an anonymous function that takes a number as input and returns its factorial. Assign the function to a variable and call it with different inputs.

// var factorial = function (n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));


// // Qno:8
// // ////////Anonymous Function in Timeout (No Parameters):
// // ////////Use an anonymous function inside setTimeout() to print a message like "Time's up!" after 2 seconds.

// setTimeout(() => {
//   console.log("Time's up!");
// }, 2000);


// // Qno:9

// // //////Sum of All Elements in an Array (With Parameter):
// // /////Write an anonymous function as a callback in Array.reduce() to sum all the elements in an array.


// var arraySum = function (arr) {
//   return arr.reduce(function (acc, num) {
//     return acc + num;
//   }, 0);
// };
// console.log(arraySum([1, 2, 3, 4]));


// // Qno:10

// // //////Check Voting Eligibility (With Parameter):
// // /////////Create an anonymous function that takes an age as input and logs whether the person is eligible to vote (age >= 18). Immediately invoke the function with different ages.

// function myAge(p1,p2,p3) {
//   return  p1+p2+p3
// }
// let user = prompt("enter your no");
// if (user >= 18) {
//   console.log("your are eligible");
// } else {
//   console.log("Not eligible");
// }




