const data = require('../data/zoo_data');

function todosDias() {
  const dia = Object.keys(data.hours)
    .reduce((a, b) => ({ ...a,
      [b]: {
        officeHour: `Open from ${data.hours[b].open}am until ${data.hours[b].close}pm`,
        exhibition: data.species.filter((el) => el.availability.includes(b)).map((ta) => ta.name),
      } }), {});
  dia.Monday.officeHour = 'CLOSED';
  dia.Monday.exhibition = 'The zoo will be closed!';
  return dia;
}

function qualquerDia(day) {
  const dia = Object.keys(data.hours).filter((el) => el === day)
    .reduce((a, c) => ({ ...a,
      [c]: {
        officeHour: `Open from ${data.hours[c].open}am until ${data.hours[c].close}pm`,
        exhibition: data.species.filter((el) => el.availability.includes(c)).map((ta) => ta.name),
      } }), {});
  if (dia.Monday) {
    dia.Monday.officeHour = 'CLOSED';
    dia.Monday.exhibition = 'The zoo will be closed!';
  }
  return dia;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return todosDias();
  if (Object.keys(data.hours).includes(scheduleTarget)) return qualquerDia(scheduleTarget);

  const nomesAnimais = data.species.map((a) => a.name);
  if (!nomesAnimais.includes(scheduleTarget)) return todosDias();

  const exhibition = data.species.filter((el) =>
    el.name === scheduleTarget)
    .map((a) => a.availability).flat();

  return exhibition;
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
