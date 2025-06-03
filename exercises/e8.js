import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // filter() to filter for planets with moons
  var planetWithMoons = data.planets.filter(function (hasMoons) {
    return hasMoons.moonsCount;
  });
  var hasSameNameMoon = planetWithMoons.find(function (moon) {
    // finding through nested array "moons" to find the moon that has the same name as moonName and returns the planet object
    return moon.moons.find(function (value) {
      return value === moonName;
    });
  });

  return hasSameNameMoon.name;
  // unsolved and stumped with this exercise
  // outputs 'undefined'
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
