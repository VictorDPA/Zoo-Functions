const data = require('../data/zoo_data');

const local = data.employees;

const isManager = (id) =>
  local.map((el) => el.managers)
    .reduce((el1, el2) => el1.concat(el2))
    .filter((item, pos, arr) => arr.indexOf(item) === pos)
    .includes(id); // includes cai muito melhor e mais rápido, neste caso.

const getRelatedEmployees = (managerId) => {
  //  local.map((el) => el.managers)
  //   .reduce((el1, el2) => el1.concat(el2))
  //   .filter((item, pos, arr) => arr.indexOf(item) === pos);
  const empregados = local.reduce((final, atual) => {
    if (atual.managers.includes(managerId)) {
      final.push(atual);
    } return final;
  }, [])
    .map((el) => `${el.firstName} ${el.lastName}`);
  return empregados;
};
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
