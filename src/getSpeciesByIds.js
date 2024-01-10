const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ID) => {
  if (ID.length === 0) return [];

  const idsSet = new Set(ID);

  return species.filter(({ id }) => idsSet.has(id));
};

module.exports = getSpeciesByIds;
