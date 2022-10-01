const data = require('../data/zoo_data');

const local = data.species;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const check = ids;
  const mapear = local.filter((el, _) => (el.id === check[_]) || (el.id === check[0]));
  return mapear;
}

module.exports = getSpeciesByIds;
