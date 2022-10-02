const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const local = data.employees;

function obj(arr) {
  return {
    id: arr.id,
    fullName: `${arr.firstName} ${arr.lastName}`,
    species: species.filter((el, _) => (arr.responsibleFor.includes(species[_].id)))
      .map((a) => a.name),
    locations: species.filter((el, _) => (arr.responsibleFor.includes(species[_].id)))
      .map((a) => a.location),
  };
}

function getEmployeesCoverage(search) {
  if (!search) return obj(local);
  const { name, id } = search;
  const clt = local.find((pers) =>
    (pers.lastName === name || pers.firstName === name || pers.id === id));
  return obj(clt);
}

console.log((getEmployeesCoverage({ name: 'Spry' })));
module.exports = getEmployeesCoverage;

// const obj = {
//   id: clt.id,
//   fullName: `${clt.firstName} ${clt.lastName}`,
//   species: species.filter((el, _) => (clt.responsibleFor.includes(species[_].id)))
//     .map((a) => a.name),
//   locations: species.filter((el, _) => (clt.responsibleFor.includes(species[_].id)))
//     .map((a) => a.location),
// };
// return obj;
