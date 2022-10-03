// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function bySexAndOrder(gender) {
//   const pos = species.map((el) => el.location)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind)
//     .reduce((fim, ini) => ({ ...fim,
//       [ini]:
//   species.filter((proj) => proj.location.includes(ini))
//     .map((tipo) => ({ [tipo.name]: species.filter((res) =>
//       res.name === tipo.name).map((k) => k.residents).flat(1)
//       .filter((again) => again.sex === gender)
//       .map((l) => l.name)
//       .sort(),
//     })),
//     }), {});
//   return pos;
// }
// function bySex(gender) {
//   const pos = species.map((el) => el.location)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind)
//     .reduce((fim, ini) => ({ ...fim,
//       [ini]: species.filter((proj) => proj.location.includes(ini))
//         .map((tipo) => ({ [tipo.name]: species.filter((res) => res.name === tipo.name)
//           .map((k) => k.residents).flat(1).filter((again) => again.sex === gender)
//           .map((l) => l.name),
//         })),
//     }), {});
//   return pos.NE[1];
// }
// function fullMapWithNamesAndSorted() {
//   const pos = species.map((el) => el.location)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind).reduce((fim, ini) => ({ ...fim,
//       [ini]: species.filter((proj) => proj.location.includes(ini)).map((tipo) =>
//         ({ [tipo.name]: species.filter((res) => res.name === tipo.name)
//           .map((k) => k.residents).flat(1).map((l) => l.name)
//           .sort() })),
//     }), {});
//   return pos;
// }

// function fullMapWithNames() {
//   const pos = species.map((el) => el.location)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind).reduce((fim, ini) => ({ ...fim,
//       [ini]: species.filter((proj) => proj.location.includes(ini))
//         .map((tipo) => ({ [tipo.name]: species.filter((res) => res.name === tipo.name)
//           .map((k) => k.residents).flat(1).map((l) => l.name) })),
//     }), {});
//   return pos.NE[0];
// }
// console.log(fullMapWithNames());
// function fullMap() {
//   const pos = data.species.map((el) => el.location)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind).reduce((a, b) => ({ ...a,
//       [b]: species.filter((proj) => proj.location.includes(b))
//         .map((loc) => loc.name),
//     }), {});

//   return pos;
// }

function getAnimalMap(options) {

}
// console.log((getAnimalMap({ sex: 'female' })));

module.exports = getAnimalMap;

// if (!options) return fullMap();
//   const { includeNames, sex, sorted } = options;
//   return sex === 'female' ? bySex('female') : bySex('male');

//   return fullMapWithNames();
