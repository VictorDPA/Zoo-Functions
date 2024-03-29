const { getOpeningHours, openForVisitation } = require('../src/getOpeningHours');

const open = 'The zoo is open';
const closed = 'The zoo is closed';
describe('Testes da função getOpeningHours', () => {
  it('quando o parâmetro da função estiver vazio, retorna um objeto com todos os horários', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('quando chamado na segunda feira, espera-se que retorne o "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toEqual(closed);
  });
  it('quando passado um valor de horas diferente de 0 até 12, retorna erro', () => {
    expect(() => getOpeningHours('Friday', '16:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('quando passado um valor de minuto diferente de 0 até 59, retorna erro', () => {
    expect(() => getOpeningHours('Friday', '09:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('quando passado um horário sem ser upper case, retorna erro', () => {
    expect(() => getOpeningHours('Friday', '09:30-MA')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('quando passado um dia inválido, retorna erro', () => {
    expect(() => getOpeningHours('Fryday', '09:30-MA')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('quando passado algo que não seja número na string de horário, retorna erro', () => {
    expect(() => getOpeningHours('Friday', 'dez:30-MA')).toThrow(new Error('The hour should represent a number'));
  });
  it('quando passado algo que não seja número na string de minutos, retorna erro', () => {
    expect(() => getOpeningHours('Friday', '09:dez-MA')).toThrow(new Error('The minutes should represent a number'));
  });
  it('quando chamado em qualquer outro dia da semana, dentro do horário de funcionamento, espera-se que retorne o "The zoo is open"', () => {
    const actual = getOpeningHours('Wednesday', '11:00-AM');
    expect(actual).toEqual(open);
  });
  it('quando chamado em qualquer outro dia da semana, fora do horário de funcionamento, espera-se que retorne o "The zoo is closed"', () => {
    const actual = getOpeningHours('Wednesday', '07:00-AM');
    expect(actual).toEqual(closed);
  });
  it('quando chamado em qualquer outro dia da semana, dentro do horário de fechamento, na parte da tarde, espera-se que retorne o "The zoo is closed"', () => {
    const actual = getOpeningHours('Wednesday', '06:00-PM');
    expect(actual).toEqual(closed);
  });
  it('quando chamado com horário válido no período da manhã, espera-se que retorne o "The zoo is open"', () => {
    const actual = openForVisitation('10', 'AM', '8', '6');
    expect(actual).toEqual(open);
  });
  it('quando chamado com horário válido no período da tarde, espera-se que retorne o "The zoo is open"', () => {
    const actual = openForVisitation('2', 'PM', '8', '6');
    expect(actual).toEqual(open);
  });
  it('quando chamado com horário inválido no período da manhã, espera-se que retorne o "The zoo is closed"', () => {
    const actual = openForVisitation('7', 'AM', '8', '6');
    expect(actual).toEqual(closed);
  });
  it('quando chamado com horário inválido no período da tarde, espera-se que retorne o "The zoo is closed"', () => {
    const actual = openForVisitation('7', 'PM', '8', '6');
    expect(actual).toEqual(closed);
  });
});
