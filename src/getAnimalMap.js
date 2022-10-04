const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function bySexAndOrder(gender) {
  const position = species.map(({ location }) => location)
    .filter((local, index, array) => array.indexOf(local) === index)
    .reduce((objeto, bussola) => ({ ...objeto,
      [bussola]: species.filter(({ location }) => location.includes(bussola)).map((tipo) =>
        ({ [tipo.name]: species.filter((residente) =>
          residente.name === tipo.name)
          .map(({ residents }) => residents).flat(1)
          .filter(({ sex }) => sex === gender)
          .map(({ name }) => name)
          .sort() })),
    }), {});
  return position;
}
function bySex(gender) {
  const position = species.map(({ location }) => location)
    .filter((local, index, array) => array.indexOf(local) === index)
    .reduce((objeto, bussola) => ({ ...objeto,
      [bussola]: species.filter(({ location }) => location.includes(bussola)).map((tipo) =>
        ({ [tipo.name]: species.filter((residente) =>
          residente.name === tipo.name)
          .map(({ residents }) => residents).flat(1)
          .filter(({ sex }) => sex === gender)
          .map(({ name }) => name) })),
    }), {});
  return position;
}
function fullMapWithNamesAndSorted() {
  const position = species.map(({ location }) => location)
    .filter((local, idx, array) => array.indexOf(local) === idx)
    .reduce((objeto, nomes) => ({ ...objeto,
      [nomes]: species.filter(({ location }) => location.includes(nomes)).map((tipo) =>
        ({ [tipo.name]: species.filter((residente) => residente.name === tipo.name)
          .map(({ residents }) => residents).flat(1)
          .map(({ name }) => name)
          .sort() })),
    }), {});
  return position;
}
function fullMapWithNames() {
  const position = species.map(({ location }) => location)
    .filter((local, index, arr) => arr.indexOf(local) === index)
    .reduce((objeto, nomes) => ({ ...objeto,
      [nomes]: species.filter(({ location }) => location.includes(nomes))
        .map((tipo) => ({ [tipo.name]: species.filter((residentes) =>
          residentes.name === tipo.name)
          .map(({ residents }) => residents).flat(1)
          .map(({ name }) => name) })),
    }), {});
  return position;
}
function fullMap() {
  const pos = data.species.map(({ location }) => location)
    .filter((local, index, arr) => arr.indexOf(local) === index)
    .reduce((obj, nome) => ({ ...obj,
      [nome]: species.filter(({ location }) => location.includes(nome))
        .map(({ name }) => name),
    }), {});

  return pos;
}
function statements(get) {
  const staged = get;
  if (!staged) return fullMapWithNames();
  if (staged) return fullMapWithNamesAndSorted();
}
function getAnimalMap(options) {
  if (!options) return fullMap();
  const { includeNames, sex, sorted } = options;
  if (!includeNames) return fullMap();
  if (!sex) return statements(sorted);
  return sorted ? bySexAndOrder(sex) : bySex(sex);
}

module.exports = getAnimalMap;
