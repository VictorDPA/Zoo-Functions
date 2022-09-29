const data = require('../data/zoo_data');

const local = data.employees;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const clt = local.filter((el) =>
    (el.firstName === employeeName) || el.lastName === employeeName);

  return clt[0];
}

console.log(getEmployeeByName('Bethea'));
module.exports = getEmployeeByName;
