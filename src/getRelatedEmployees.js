const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const local = data.employees;

const isManager = (id) =>
  local.map((el) => el.managers)
    .reduce((el1, el2) => el1.concat(el2))
    .filter((item, pos, arr) => arr.indexOf(item) === pos)
    .some((el) => el === id);

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

const getRelatedEmployees = (managerId) => {
  local.map((el) => el.managers)
    .reduce((el1, el2) => el1.concat(el2))
    .filter((item, pos, arr) => arr.indexOf(item) === pos);
  return managerId;
};

module.exports = { isManager, getRelatedEmployees };
