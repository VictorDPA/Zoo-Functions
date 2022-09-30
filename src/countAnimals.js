const data = require('../data/zoo_data');

const local = data.species;

function countAnimals(animal) {
  const quant = local.map((el) => el.residents.length);
  const nomes = local.map((el) => el.name)
    .reduce((a, b, c) => ({ ...a, [b]: quant[c] }), {});
  return nomes;
}
console.log(countAnimals());
module.exports = countAnimals;
