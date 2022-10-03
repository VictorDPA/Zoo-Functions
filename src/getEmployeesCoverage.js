const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const local = data.employees;
const ids = local.map((el) => el.id);
const nomes = local.map((el) => `${el.firstName} ${el.lastName}`);

function obj(arr) {
  return {
    id: arr.id,
    fullName: `${arr.firstName} ${arr.lastName}`,
    species: species.filter((el, _) =>
      (arr.responsibleFor.includes(species[_].id))).map((a) => a.name),
    locations: species.filter((el, _) =>
      (arr.responsibleFor.includes(species[_].id))).map((a) => a.location),
  };
}

function whenNull() {
  const pos = local.reduce((final, arroz) => ([...final, obj(arroz)]), []);
  return pos;
}
console.log(whenNull());
function getEmployeesCoverage(search) {
  if (!search) return whenNull();
  const { name, id } = search;
  if (!ids.includes(id)) {
    throw new Error('Informações inválidas');
  }
  const clt = local.find((pers) =>
    (pers.lastName === name || pers.firstName === name || pers.id === id));
  if (nomes.includes(name)) return obj(clt);
  return obj(clt);
}
// console.log((getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' })));
module.exports = getEmployeesCoverage;
