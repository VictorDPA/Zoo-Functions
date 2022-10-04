const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const clt = employees.filter(({ firstName, lastName }) =>
    (firstName === employeeName) || (lastName === employeeName));
  return clt[0];
}

module.exports = getEmployeeByName;
