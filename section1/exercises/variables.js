/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var hogwartsStatus = "Harry Potter must not return to Hogwarts!";
console.log(hogwartsStatus);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName;
var isHungry;
var numberOfPets;

var firstName = "Steph";
var isHungry = true;
var numberOfPets = 1;

console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
// I decided that var firstName should be a string since I need to save the characters in the same order and the info won't change systematically. Since my appetite will change throughout the day, I decided to make it a Boolean since "Am I Hungry?" is a simple yes or no question. numberOfPets is likely to grow over time, so I decided to make that a number so I can easily manipulate as needed.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Stephanie";
isHungry = false;
numberOfPets = 2;

console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
//Yes, everything printed as expected!
