const { employees } = require('../data/zoo_data');

const getManagers = new Set(employees.flatMap(({ managers }) => managers));

const isManager = (id) => getManagers.has(id);

const getRelatedEmployees = (managerId) => {
  if (!getManagers.has(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return employees.reduce((final, { firstName, lastName, managers }) => (
    managers.includes(managerId) ? [...final, `${firstName} ${lastName}`] : final
  ), []);
};

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
