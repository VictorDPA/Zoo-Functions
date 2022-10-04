const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('sem parâmetros, a função handlerElephantsretorna uma undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna o número de elefantes caso o parâmetro seja count', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });
  it('retorna um array com o nome de todos os elefantes, caso o parâmetro seja "names"', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('retorna a média das idades dos elefantes, caso o parâmetro seja "averageAge"', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toEqual(10.5);
  });
  it('retorna a localização dos elefantes, caso o parâmetro seja "location"', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('caso NÃO seja passado como parâmetro uma string, retorna a mensagem "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(4)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('caso NÃO seja passado um parâmetro válido, retorna null', () => {
    expect(handlerElephants('sex')).toBeNull();
  });
});
