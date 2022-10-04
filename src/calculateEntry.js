const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const adulto = entrants.filter(({ age }) => (age >= 18 && age < 50)).length;
  const cria = entrants.filter(({ age }) => (age < 18)).length;
  const ido = entrants.filter(({ age }) => (age >= 50)).length;
  return { adult: adulto, child: cria, senior: ido };
};

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const adulto = entrants.filter(({ age }) => (age >= 18 && age < 50)).length * prices.adult;
  const child = entrants.filter(({ age }) => (age < 18)).length * prices.child;
  const senior = entrants.filter(({ age }) => (age >= 50)).length * prices.senior;
  const total = adulto + child + senior;
  return total;
}

module.exports = { calculateEntry, countEntrants };
