const { species } = require('../data/zoo_data');

/**
 * Returns a boolean indicating whether all residents of a given animal species are older than the specified age.
 *
 * @param {string} animal - The name of the animal species.
 * @param {number} age - The age to compare against.
 * @returns {boolean} - True if all residents of the species are older than the specified age, false otherwise.
 */
const getAnimalsOlderThan = (animal, age) => (
  species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age)
);

module.exports = getAnimalsOlderThan;
