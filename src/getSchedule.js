const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(hours);
const MondayExhibition = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
const animals = new Set(species.map(({ name }) => name));

const openingHours = (open, closed) => `Open from ${open}am until ${closed}pm`;

const exhibition = (day) => species.reduce((creatures, { name, availability }) => (
  availability.includes(day) ? [...creatures, name] : creatures), []);

const everyDay = () => daysOfTheWeek.reduce((object, day) => (
  day !== 'Monday' ? { ...object,
    [day]: {
      officeHour: openingHours(hours[day].open, hours[day].close),
      exhibition: exhibition(day) } }
    : { ...object, [day]: MondayExhibition }), {});

function getSchedule(schedule) {
  if (!schedule) return everyDay();
  if (daysOfTheWeek.includes(schedule)) return { [schedule]: everyDay()[schedule] };
  if (!animals.has(schedule)) return everyDay();

  return species.find(({ name }) => name === schedule).availability;
}

module.exports = getSchedule;
