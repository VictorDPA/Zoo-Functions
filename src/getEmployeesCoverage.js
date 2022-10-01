const data = require('../data/zoo_data');

const local = data.employees;

function getEmployeesCoverage(search) {
  if (!search) return local;
  const { name, id } = search;
  const clt = local.find((pessoa) =>
    (pessoa.lastName || pessoa.firstName) === name || (pessoa.id === id));
  const obj = {
    id: clt.id,
    fullName: `${clt.firstName} ${clt.lastName}`,
    species: clt.responsibleFor,
  }; return obj;
}

console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;

// .reduce((final, inicial, i) => {
//   console.log(anm.indexOf(responsibleFor[inicial]));
//   if (inicial.id === anm.indexOf(responsibleFor[i])) {
//     final.push(inicial[i].id);
//   }
//   return final;
// }, []);
