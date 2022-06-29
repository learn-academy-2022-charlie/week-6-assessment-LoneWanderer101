// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { createTestScheduler } = require("jest")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
 
describe ("action", () => {
  it("takes an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }]
    expect(action(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// action
//   ✕ takes an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)
// ● action › takes an array of objects and returns an array with a sentence about each person with their name capitalized
//   ReferenceError: action is not defined

// b) Create the function that makes the test pass.

  // create a function (action) that that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
  // first separate first and last name to capitalize the first letter of each.
  // then join first and last name.
  // finally return the required sentence using string interpolation.
  // possible methods.., .toUpperCase(), .split(), .join()
  // return finalArray  

const action = (array) => {
  return array.map(sentence => {
    let upper = sentence.name.split(" ").map(value => value.charAt(0).toUpperCase() + value.substring(1))
    let joined = upper.join(" ")
    return `${joined} is ${sentence.occupation}.`
  })
}

// PASS  ./code-challenges.test.js
// action
//   ✓ takes an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.408 s
// Ran all test suites.
// ✨  Done in 1.33s.

  // the code below was my original but returns the complete sentence with only the first name capitalized
// const action = (array) => {
//   let newArray = array.map(value => `${value.name} is ${value.occupation}.`)
//   let newString = newArray.map(value => value.charAt(0).toUpperCase() + value.substring(1))
//   return newString
// }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("finalArray", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(finalArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(finalArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

  // FAIL  ./code-challenges.test.js
  // finalArray
  //   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
  // ● finalArray › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
  //   ReferenceError: finalArray is not defined


// b) Create the function that makes the test pass.

// Create a function named finalArray that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// first you have to filter through the array and return only values with typof numbers since it is a mixed array with strings and boolean.
// iterate through the array of numbers and divide each index in the array by 3 and return only the remainders.

const finalArray = (array) => {
  let numArray = array.filter(value => typeof value === "number")
  for (i = 0; i < numArray.length; i++) {
  numArray[i] = numArray[i] % 3;
  }
  return numArray
}

  // PASS  ./code-challenges.test.js
  // finalArray
  //   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.464 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 1.37s.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("iceCube", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(iceCube(cubeAndSum1)).toEqual(99)
    expect(iceCube(cubeAndSum2)).toEqual(1125)
  })
}) 

// FAIL  ./code-challenges.test.js
// iceCube
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
// ● iceCube › takes in an array of numbers and returns the sum of all the numbers cubed
//   ReferenceError: iceCube is not defined


// b) Create the function that makes the test pass.

// Create a function called iceCube that takes in an array of numbers and returns the sum of all the numbers cubed
// first find the cube of each index then sum the values of the array
// iterate through array and cube each index
// then add each index of the array using sum. += takes all the values from the right and adds it to the variable on the left, index by index.
// then return the sum of each cubed index within the array.

const iceCube = (array) => {
  let sum = 0
  for (i = 0; i < array.length; i++) {
  array[i] = array[i]**3;
  sum += array[i];
  }
return sum
}

  // PASS  ./code-challenges.test.js
  // iceCube
  //   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (3 ms)

  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total
  // Snapshots:   0 total
  // Time:        0.772 s, estimated 1 s
  // Ran all test suites.
  // ✨  Done in 3.18s.

  

  // ALL TESTS
//   PASS  ./code-challenges.test.js
//   action
//     ✓ takes an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)
//   finalArray
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//   iceCube
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.344 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.48s.
