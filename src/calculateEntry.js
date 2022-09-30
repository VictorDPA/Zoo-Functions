const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const adulto = entrants.filter((el) =>
    (el.age >= 18 && el.age < 50)).length;
  const cria = entrants.filter((el) =>
    (el.age < 18)).length;
  const ido = entrants.filter((el) =>
    (el.age >= 50)).length;
  return { adult: adulto, child: cria, senior: ido };
};

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const adulto = entrants.filter((el) =>
    (el.age >= 18 && el.age < 50)).length * data.prices.adult;
  const child = entrants.filter((el) =>
    (el.age < 18)).length * data.prices.child;
  const senior = entrants.filter((el) =>
    (el.age >= 50)).length * data.prices.senior;
  const total = adulto + child + senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
