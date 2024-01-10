const { employees } = require('../data/zoo_data');

/**
 * Finds an employee by their first name or last name and returns the employee object.
 *
 * @param {string} employeeName - The name of the employee to search for.
 * @returns {object} - The employee object matching the specified name, or an empty object if not found.
 */
const getEmployeeByName = (employeeName) => employees.find(({ firstName, lastName }) =>
  (firstName === employeeName) || (lastName === employeeName)) || {};

module.exports = getEmployeeByName;
