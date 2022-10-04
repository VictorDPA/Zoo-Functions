const { employees } = require('../data/zoo_data');

const bigManagers = employees.map(({ managers }) => managers)
  .reduce((total, ids) => total.concat(ids))
  .filter((item, position, arr) => arr.indexOf(item) === position);

const isManager = (id) => bigManagers.includes(id); // includes cai muito melhor e mais rápido, neste caso.

const getRelatedEmployees = (managerId) => {
  const empregados = employees.reduce((final, atual) => {
    if (atual.managers.includes(managerId)) {
      final.push(atual);
    } return final;
  }, [])
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  if (!bigManagers.includes(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return empregados;
};

module.exports = { isManager, getRelatedEmployees };
