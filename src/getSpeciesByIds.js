const data = require('../data/zoo_data');

const local = data.species;

function getSpeciesByIds(...ids) {
  const check = ids;
  console.log(check);
  const mapear = local.reduce((final, pesquisa, i) =>
    (final.filter((el) => el.id === check[i])
    + pesquisa.filter((el) => el.id === check[i])), []);
  return mapear;
}
// console.log(local);
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;

// function getSpeciesByIds(...ids) {
//   const check = { ids };
//   console.log(check);
//   const mapear = species.filter((animal, i) => (animal.id === check.ids ? local[i] : false))
//     .map((mapa) => mapa);
//   return mapear;
// }
