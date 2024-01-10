const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined if param is undefined', () => {
    const result = handlerElephants(undefined);
    expect(result).toBeUndefined();
  });

  it('should return "Parâmetro inválido, é necessário uma string" if param is not a string', () => {
    const result = handlerElephants(123);
    expect(result).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('should return undefined if elephants are not found in the species data', () => {
    jest.spyOn(species, 'find').mockReturnValueOnce(undefined);
    const result = handlerElephants('count');
    expect(result).toBeUndefined();
  });
  it('should return the location if param is "location"', () => {
    const mockElephants = {
      location: 'NW',
    };
    jest.spyOn(species, 'find').mockReturnValueOnce(mockElephants);
    expect(handlerElephants('location')).toBe('NW');
  });
  it('should return the count of residents if param is "count"', () => {
    const mockElephants = {
      residents: [
        { name: 'Elephant 1' },
        { name: 'Elephant 2' },
        { name: 'Elephant 3' },
      ],
    };
    jest.spyOn(species, 'find').mockReturnValueOnce(mockElephants);

    const result = handlerElephants('count');
    expect(result).toBe(3);
  });

  it('should return an array of names if param is "names"', () => {
    const mockElephants = {
      residents: [
        { name: 'Elephant 1' },
        { name: 'Elephant 2' },
        { name: 'Elephant 3' },
      ],
    };
    jest.spyOn(species, 'find').mockReturnValueOnce(mockElephants);

    const result = handlerElephants('names');
    expect(result).toEqual(['Elephant 1', 'Elephant 2', 'Elephant 3']);
  });

  it('should return the average age if param is "averageAge"', () => {
    const mockElephants = {
      residents: [
        { name: 'Elephant 1', age: 10 },
        { name: 'Elephant 2', age: 20 },
        { name: 'Elephant 3', age: 30 },
      ],
    };
    jest.spyOn(species, 'find').mockReturnValueOnce(mockElephants);

    const result = handlerElephants('averageAge');
    expect(result).toBe(20);
  });

  it('should return null for unknown params', () => {
    const mockElephants = {
      residents: [
        { name: 'Elephant 1' },
        { name: 'Elephant 2' },
        { name: 'Elephant 3' },
      ],
    };
    jest.spyOn(species, 'find').mockReturnValueOnce(mockElephants);

    const result = handlerElephants('unknownParam');
    expect(result).toBeNull();
  });
});
