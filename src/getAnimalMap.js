const { species } = require('../data/zoo_data');

/**
 * Returns an object with the species names as keys and an array of their names as values.
 * @returns {Object} - An object with the species names as keys and an array of their names as values.
 */

const speciesByLocation = species.reduce((section, { location, name }) => (
  { ...section, [location]: section[location] ? [...section[location], name] : [name] }
), {});

/**
 * Represents an array of entries for species by location.
 * @type {Array<[string, Array<string>]>}
 */

const speciesByLocationEntries = Object.entries(speciesByLocation);

/**
 * Returns an array of resident names based on the specified specie and gender.
 *
 * @param {Object} specie  The specie object.
 * @param {string} gender  The gender of the residents. (Optional)
 * @returns {string[]}  An array of resident names.
 */

const getResidentNamesBySpecie = (specie, gender) => {
  const namesFilter = gender ? (resident) => resident.sex === gender : () => true;

  return specie.residents.reduce((names, resident) => (
    namesFilter(resident) ? [...names, resident.name] : names), []);
};

/**
 * Return an object with the species names as keys and an array of their names as values.
 * @param {string} gender The gender of the residents. (Optional)
 * @returns {Object}  An object with the species names as keys and an array of their names as values.
 */

const animalsNames = (gender = false) => species.reduce((types, specie) => (
  { ...types, [specie.name]: getResidentNamesBySpecie(specie, gender) }),
{});

const animalsByNameCache = {}; // Cache to store animal names

/**
 * Returns a map of animals grouped by location and species, with optional sorting and filtering by sex.
 *
 * @param {boolean} [sorted=false] - Indicates whether the animal names should be sorted alphabetically.
 * @param {string} [sex] - The sex of the animals to filter by.
 * @returns {Object} - A map of animals grouped by location and species.
 */

const animalsByOrder = (sorted = false, sex) => {
  const cacheKey = `${sorted}-${sex}`; // Unique key for caching

  if (!animalsByNameCache[cacheKey]) {
    animalsByNameCache[cacheKey] = animalsNames(sex);
  }

  const animalsByName = animalsByNameCache[cacheKey];

  return speciesByLocationEntries.reduce((result, [location, specieNames]) => ({ ...result,
    [location]: specieNames.map((name) => (
      { [name]: sorted ? [...animalsByName[name]].sort() : animalsByName[name] })),
  }), {});
};

/**
 * Returns a map of animals based on the given options.
 *
 * @param {Object} options The options for filtering the animal map.
 * @param {boolean} options.includeNames Whether to include animal names in the map.
 * @param {string} options.sex The sex of the animals to include in the map.
 * @param {boolean} options.sorted Whether to sort the animals in the map.
 * @returns {Object} The animal map based on the given options.
 */

const getAnimalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;

  if (!includeNames) {
    return speciesByLocation;
  }

  return animalsByOrder(sorted, sex);
};

module.exports = getAnimalMap;

// Worst-Case Scenario: In the worst case, assuming that sorted is true, and assuming that each specie has an equal number of residents, we are doing m sort operations on n/m elements, leading to a complexity of O(m * (n/m) log (n/m)) = O(n log (n/m)). If m and n are roughly the same size, this is approximately O(n log n).
