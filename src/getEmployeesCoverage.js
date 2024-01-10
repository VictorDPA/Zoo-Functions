const { species, employees } = require('../data/zoo_data');

/**
 * Returns a new Map object containing species information based on type.
 *
 * @param {string} type - The type of species information to retrieve. Valid values are 'name' or 'location'.
 * @returns {Map} - A Map object where the keys are species ids and the values are corresponding species information based on the specified type.
 */
const getSpecies = (type) => new Map(species.map((specie) => ([specie.id, specie[type]])));

/**
 * Returns a Set of employee objects with additional properties including species and locations.
 *
 * @returns {Set} - A Set of employee objects with properties including id, fullName, species, and locations.
 */
const getEmployees = new Set(employees.map((person) => (
  {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((id) => getSpecies('name').get(id)),
    locations: person.responsibleFor.map((id) => getSpecies('location').get(id)),
  }
)));

/**
 * Returns the coverage details of an employee based on search criteria.
 *
 * @param {object} search - An object representing the search criteria. It may include properties like name or id.
 * @returns {object|array} - If search is not provided, it returns an array containing all the employee coverage details. If search is provided and matches an employee, it returns the coverage details of that employee. Otherwise, it throws an error.
 * @throws {Error} - Throws an error if no matching employee is found based on the search criteria.
 */
const getEmployeesCoverage = (search) => {
  if (!search) return [...getEmployees];
  const { name } = search;
  const person = [...getEmployees].find(({ fullName, id }) =>
    (fullName.includes(name) || id === search.id));
  if (!person) throw new Error('Invalid Details');
  return person;
};

module.exports = getEmployeesCoverage;
