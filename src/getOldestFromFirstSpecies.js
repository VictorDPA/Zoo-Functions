const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionario = data.employees.filter((pessoa) => (pessoa.id === id))
    .map((el) => el.responsibleFor[0]).toString();
  const animal = data.species.filter((bicho) =>
    bicho.id === funcionario)
    .map((el) => el.residents).flat(1)
    .reduce((fim, inicio) =>
      (fim.age > inicio.age ? fim : inicio));

  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
