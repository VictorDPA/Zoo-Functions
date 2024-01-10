const { species } = require('../data/zoo_data');

/**
 * Counts the number of animals based on the provided parameters.
 * If no parameters are provided, counts all species and their quantities.
 * If `animal` is provided, counts the animals based on the specified specie and sex.
 *
 * @param {object} animal An object containing the specie and optional sex of the animal to count.
 *                        If not provided, counts all species and their quantities.
 *                        Example: { specie: 'bears', sex: 'female' }
 *
 * @returns {number|object} The count of animals or an object with counts for each specie.
 *                          It depends on the parameters.
 */
const countAnimals = (animal) => {
  // If no animal parameter is provided, count all species and their quantities
  if (!animal) {
    return species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }

  const { specie, sex } = animal;
  // Find the species that matches the provided specie
  const { residents } = species.find(({ name }) => name === specie);

  // If sex is not provided, count all residents of the specified specie
  if (!sex) {
    return residents.length;
  }

  // Filter the residents based on the provided sex and count them
  return residents.filter(({ sex: gender }) => gender === sex).length;
};

module.exports = countAnimals;
