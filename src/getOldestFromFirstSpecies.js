const { employees, species } = require('../data/zoo_data');

/**
 * Finds the first duty of an employee with the given id.
 * @param {string} id - The id of the employee.
 * @returns {string} - The id of the first duty of the employee.
 */
const findEmployeeFirstDuty = (id) =>
  employees.find((worker) => worker.id === id).responsibleFor[0];

/**
 * Finds the oldest animal with the given animal id.
 * @param {string} animalId - The id of the animal.
 * @returns {object} - The oldest animal object.
 */
const findOldestAnimal = (animalId) =>
  species.find((animal) => animal.id === animalId).residents
    .reduce((oldest, resident) => (oldest.age > resident.age ? oldest : resident));

/**
 * Gets the oldest resident from the first duty of an employee with the given id.
 * @param {string} ID - The id of the employee.
 * @returns {array} - The values of the oldest resident's properties.
 */
function getOldestFromFirstSpecies(ID) {
  const animalId = findEmployeeFirstDuty(ID);
  const result = findOldestAnimal(animalId);

  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
