const data = require('../data/zoo_data');

const local = data.species;

function countAnimals(animal) {
  const quant = local.map((el) => el.residents.length);
  const nomes = local.map((el) => el.name)
    .reduce((a, b, c) => ({ ...a, [b]: quant[c] }), {});
  if (!animal) return nomes;
  const { specie, sex } = animal;
  if (!sex) {
    const nome = local.filter((el, _, arr) => (el.name === specie))
      .map((el) => el.residents.length).at();
    return nome;
  }
  const genero = local.filter((el, _, arr) => (el.name === specie))
    .map((el) => el.residents).flat()
    .filter((gender) => gender.sex === sex).length;
  return genero;
}
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
