const { prices } = require('../data/zoo_data');

/**
 * The prices for different entrant categories.
 */
const { adult: pAdult, child: pChild, senior: pSenior } = prices;

/**
 * Counts the number of entrants in different age categories.
 * @param {Array} entrants An array of objects representing the entrants, each containing an "age" property.
 * @returns {Object} An object with the count of entrants in different age categories: child, adult, senior.
 */
const countEntrants = (entrants) => entrants.reduce((acc, { age }) => ({
  // Counting the number of children (age < 18)
  child: acc.child + (age < 18 ? 1 : 0),
  // Counting the number of adults (17 > age < 50)
  adult: acc.adult + (age >= 18 && age < 50 ? 1 : 0),
  // Counting the number of seniors (age >= 50)
  senior: acc.senior + (age >= 50 ? 1 : 0),
}), { adult: 0, child: 0, senior: 0 });

/**
 * Calculates the total entry cost based on the number of entrants and corresponding prices.
 * @param {Array} entrants An array of objects representing the entrants, each containing an "age" property.
 * @returns {number} The total entry cost.
 */
function calculateEntry(entrants = []) {
  // Check if the entrants array is empty or undefined, return 0 if true
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // Call the countEntrants function to get the counts of different entrant categories
  const { adult, child, senior } = countEntrants(entrants);

  // Calculate the total entry cost by multiplying the counts with the respective prices
  return (adult * pAdult) + (child * pChild) + (senior * pSenior);
}

module.exports = { calculateEntry, countEntrants };
