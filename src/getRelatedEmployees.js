const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const local = data.employees;

const isManager = (id) =>
  local.map((el) => el.managers)
    .reduce((el1, el2) => el1.concat(el2))
    .filter((item, pos, arr) => arr.indexOf(item) === pos)
    .includes(id); // includes cai muito melhor e mais rápido, neste caso.
// .some((el) => el === id);

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const getRelatedEmployees = (managerId) => {
  const mapear = local.map((el) => el.managers)
    .reduce((el1, el2) => el1.concat(el2))
    .filter((item, pos, arr) => arr.indexOf(item) === pos);
  const verificar = () => {
    try {
      if (mapear.includes(managerId) === false) {
        throw new
        Error(/^O id inserido não é de uma pessoa colaboradora gerente!$/);
      }
    } catch (erro) { return erro.message; }
  };
  return verificar();
};
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = { isManager, getRelatedEmployees };
