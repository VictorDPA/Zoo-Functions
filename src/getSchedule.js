const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function todosDias() {
  const dia = Object.keys(hours)
    .reduce((object, horario) => ({ ...object,
      [horario]: {
        officeHour: `Open from ${hours[horario].open}am until ${hours[horario].close}pm`,
        exhibition: species.filter(({ availability }) => availability.includes(horario))
          .map(({ name }) => name),
      } }), {});
  dia.Monday.officeHour = 'CLOSED';
  dia.Monday.exhibition = 'The zoo will be closed!';
  return dia;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return todosDias();
  if (Object.keys(hours)
    .includes(scheduleTarget)) return { [scheduleTarget]: todosDias()[scheduleTarget] };
  const nomesAnimais = species.map(({ name }) => name);
  if (!nomesAnimais.includes(scheduleTarget)) return todosDias();
  const exhibition = species.filter(({ name }) => name === scheduleTarget)
    .map(({ availability }) => availability).flat();
  return exhibition;
}
console.log(getSchedule('Monday'));
module.exports = getSchedule;
