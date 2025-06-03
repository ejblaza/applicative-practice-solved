/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  // I cannot wrap my head around how to iterate through the objects by year and getting the sums for all the discoveries
  // for each year.
  // I am thinking getting the sum of times the year has discovered an asteroid by filtering by years.
  // Then, using reduce() to get the sums and use the maxBy() to point out which is the highest discovery and point the
  // year associated with the sum.
  // However, this feels beyond complex to plan with array methods.
  // If I can get any pointers, tips, or guides on how to approach this exericese, I can complete the assignment fully.
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
