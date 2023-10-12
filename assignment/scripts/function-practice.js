console.log("***** Function Practice *****")

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!"
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello())

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
/**
 * @param {string} name
 * @returns {string}
 */
function helloName(name) {
  return `Hello, ${name}!`
}
// Remember to call the function to test
console.log(`Test - Should say "Hello, Jaden! ---- ${helloName("Jaden")}`)

// 3. Function to add two numbers together & return the result
/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function addNumbers(x, y) {
  return x + y
}
console.log(`Test - should be 5 ---- ${addNumbers(3, 2)}`)

// 4. Function to multiply three numbers & return the result
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {number}
 */
function multiplyThree(x, y, z) {
  return x * y * z
}
console.log(`Test - should be 266 ---- ${multiplyThree(2, 7, 19)}`)

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true
  }
  return false
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(`Test
1 = positive: ${isPositive(1) === true}
0 != positive: ${isPositive(0) === false}
-1.5 != positive: ${isPositive(-1.5) === false}`)

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
/**
 * @template T
 * @param {T[]} array
 * @returns {T}
 */
function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1]
  }
  return undefined
}
console.log(`Last element of []: ${getLast([])}
Last element of [1, 2]: ${getLast([1, 2])}`)

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
//
// tecnically this doesn't include Array.some, but I will just use that for testing
function find(value, array) {
  for (const element of array) {
    if (element === value) {
      return true
    }
  }
  return false
}
{
  const array = [1, 2, 3, 17, 351]
  console.log(`Test:
  ${array} has 3 in it: ${find(3, array) === array.some((x) => x === 3)}
  ${array} does not have 5 in it: ${
    find(5, array) === array.some((x) => x === 5)
  }`)
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {}

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  }
} catch (e) {
  // Do nothing
}
