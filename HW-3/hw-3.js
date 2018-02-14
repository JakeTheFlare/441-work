/**************************************************/
// PROBLEM 1 - "typeof Data Values"
//
// Write 3 statements that return prints the "type of" a value to the console.
// These 3 stataments should print out the 3 basic data types you learned about this week.
// (i.e. `number`, `string`, `boolean`)

console.log(typeof 24);
//number
console.log(typeof "Maddie");
//string
console.log(typeof 9 > 6);
//boolean -> true


/**************************************************/
// PROBLEM 2 - Using Loops to Create Pyramids
//
// Write a basic program that will print a pyramid to the web console.
// The pyramid should be made of the pound sign character (i.e. '#')
// The top of the pyramid should be 1 character wide
// The bottom of the pyramid should be 10 characters wide
//
// This should look like the following
/*

#
##
###
####
#####
######
#######
########
#########
##########

*/
// You program should utilize a control loop of somesort to solve this problem.

for (let pyramid = "#"; pyramid.length <= 10; pyramid += "#") {
  console.log(pyramid);
}


/**************************************************/
// PROBLEM 3 - FizzBuzz
//
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// For numbers that are divisible by both 3 and 5, the program should print out "FizzBuzz"
// (Your program should still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//
// Your program should output something like the following;
/*
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

-> etc....

*/

for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 == 0)
    output += "Fizz";
  if (number % 5 == 0)
    output += "Buzz";
  console.log(output || number);
}


/**************************************************/
