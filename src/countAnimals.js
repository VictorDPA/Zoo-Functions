const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const quantidade = species.map(({ residents }) => residents.length);
  const nomes = species.map(({ name }) => name)
    .reduce((objeto, anim, idx) => ({ ...objeto,
      [anim]: quantidade[idx] }), {});
  if (!animal) return nomes;
  const { specie, sex } = animal;
  if (!sex) {
    const nome = species.filter(({ name }) => (name === specie))
      .map(({ residents }) => residents.length).at();
    return nome;
  }
  const genero = species.filter(({ name }) => (name === specie))
    .map(({ residents }) => residents).flat()
    .filter((gender) => gender.sex === sex).length;
  return genero;
}

module.exports = countAnimals;
