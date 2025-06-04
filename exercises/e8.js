import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  var planetWithMoons = data.planets.filter((hasMoons) => hasMoons.moonsCount);
  var hasSameNameMoon = planetWithMoons.find((moon) => moon.moons.find((value) => value === moonName));
  
  return hasSameNameMoon.name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
