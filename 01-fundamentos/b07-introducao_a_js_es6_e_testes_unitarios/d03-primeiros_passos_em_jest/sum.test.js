const {sum, myRemove, myFizzBuzz} = require('./sum');

describe('Testes relacionados a função sum', () => {
  it('Verifica retorno da soma dos parâmetros', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Verifica o erro gerado quando pelo menos um dos parâmetros é uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
})

describe('Testes relacionados a função myRemove', () => {
  it('Verifica se retorna um array sem o item do parâmetro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Testes relacionados a função myFizzBuzz', () => {
  it('Verifica se o parâmetro é divisível por 3 e/ou 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(12)).toBe('fizz');
    expect(myFizzBuzz(20)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('Nala')).toBeFalsy();
  });
})
