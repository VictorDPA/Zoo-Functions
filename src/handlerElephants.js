const { species } = require('../data/zoo_data');

/**
 * Retrieves the elephants species from the list of species.
 * @returns {Object} The elephants species object.
 */
const getElephants = () =>
  species.find(({ name }) => name === 'elephants');

/**
 * Calculates the average age of a group of elephants.
 * @param {Object} elephantGroup - The group of elephants.
 * @param {Array} elephantGroup.residents - The array of elephant objects.
 * @param {number} elephantGroup.residents[].age - The age of an elephant.
 * @returns {number} The average age of the elephants.
 */
const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

/**
 * Computes data based on the given parameter and elephants array.
 *
 * @param {string} param - The parameter to compute data for.
 * @param {Array} elephants - The array of elephants.
 * @returns {number|string|null} - The computed data based on the parameter.
 */
const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    // If the parameter is 'count', return the length of the residents array in the elephants object
    return elephants.residents.length;
  case 'names':
    // If the parameter is 'names', extract the names of the residents from the elephants object using map()
    // and return an array of resident names
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    // If the parameter is 'averageAge', call the averageAge() function passing the elephants object as argument
    // and return the computed average age
    return averageAge(elephants);
  default:
    // If the parameter does not match any cases, return null
    return null;
  }
};

/**
 * Handles the logic for retrieving data related to elephants.
 * @param {string} param - The parameter used to retrieve the data.
 * @returns {undefined|string|object} - The data related to the specified parameter, or undefined if the parameter is undefined or if there is no data available.
 */
const handlerElephants = (param) => {
  if (param === undefined) return undefined;
  if (typeof param !== 'string') return 'Parâmetro inválido, é necessário uma string';

  const elephants = getElephants();
  if (elephants === undefined) return undefined;
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

module.exports = handlerElephants;
