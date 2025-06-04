/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  var temp = 0;
  var greatestYear = 0;
  
  // made array with discoveryYear
  var arrayYears = data.asteroids.map(function(year) {
    return year.discoveryYear;
  });

  // iterate each year in arrayYears
  var yearCompare = arrayYears.map(function(currYear) {
    // creates a new array using the iterated year and checks through the arrayYears again for matching year
    var test = arrayYears.filter(function(val) {
      return val === currYear;      
    });
    // outputs an array of arrays with its elements as the same year to each other
    return test;
  });
  // arrayYears is viewed as yearCompare in this scope

  // checking each array of yearCompare which has the most discoveryYear by the arrays' length
  // outputs as an array of all elements with same year
  greatestYear = maxBy(yearCompare, (year) => year.length);
  // points to first element to output the year properly
  return greatestYear[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
