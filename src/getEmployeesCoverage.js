const { species, employees } = require('../data/zoo_data');

const bigManager = (person, type) => species.filter(({ id }) =>
  (person.responsibleFor.includes(id))).map((found) => found[type]);

const obj = (person) => ({ id: person.id,
  fullName: `${person.firstName} ${person.lastName}`,
  species: bigManager(person, 'name'),
  locations: bigManager(person, 'location') });

const whenNull = () => employees.reduce((array, employee) =>
  ([...array, obj(employee)]), []);

function getEmployeesCoverage(search) {
  if (!search) return whenNull();
  const { name } = search;
  const clt = employees.find(({ lastName, firstName, id }) =>
    (lastName === name || firstName === name || id === search.id));
  if (!clt) throw new Error('Informações inválidas');
  return obj(clt);
}
module.exports = getEmployeesCoverage;
