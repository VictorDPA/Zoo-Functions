const data = require('../data/zoo_data');

const local = data.species;

function getAnimalsOlderThan(animal, age) {
  return local.filter((el) => el.name === animal)
    .map((el) => el.residents)
    .every((el, i) => el[i].age > age);
}
module.exports = getAnimalsOlderThan;
