// Question 1: Larger Number
// let num1 = prompt("Enter the first number");

// let num2 = prompt("Enter the second number");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log("The two numbers are equal.");
// }

// Question 1 End!

// Question 2: 

// let number = prompt("Enter a number:");

// if (number > 0) {
//   alert("The sign is +");
// } else if (number < 0) {
//   alert("The sign is -");
// } else {
//   alert("The number is 0");
// }

// Question 2: Ends!

// Question 3:

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// let num3 = prompt("Enter the third number:");
// let num4 = prompt("Enter the fourth number:");
// let num5 = prompt("Enter the fifth number:");

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// num3 = parseInt(num3);
// num4 = parseInt(num4);
// num5 = parseInt(num5);

// let largestNumber = Math.max(num1, num2, num3, num4, num5);

// console.log("The largest number is: " + largestNumber);

// Question 3 End!

// Question 4:

// for (let i = 0; i <= 15; i++) {

//   if (i % 2 == 0) {
//     alert(i + " is even");
//   } else {
//     alert(i + " is odd");
//   }

// }

// Question 4 End!

// Question 5:

// let marks = [80, 70, 85, 90, 60];

// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }
// let average = total / marks.length;

// let grade;
// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("The average marks are: " + average);
// console.log("The corresponding grade is: " + grade);
// Question 5 End!

// Question 6:

// for (let i = 1; i <= 100; i++) {

//   // Check if the number is a multiple of 3 and/or 5
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// }

// Question 6 End!

// Question 7:

const rows = 5;


for (let i = 1; i <= rows; i++) {

 
  let row = "";

  
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  
  console.log(row);

}

// Question 7 End!
