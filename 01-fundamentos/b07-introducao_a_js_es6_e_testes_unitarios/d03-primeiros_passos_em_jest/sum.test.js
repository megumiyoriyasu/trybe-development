const { sum, myRemove, myFizzBuzz, mapString, encode, decode } = require('./sum');

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

describe('Testes relacionados as funções encode e decode', () => {
  it('Verifica a existência das funções encode e decode', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('Verifica se vogais são convertidas na codificação', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  it('Verifica se vogais são convertidas na decodificação', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  it('Verifica se somente as vogais sofrem alteração na codificação e decodificação', () => {
    expect(encode('cachorro')).toBe('c1ch4rr4');
    expect(encode('beluga')).toBe('b2l5g1');
    expect(encode('girafa')).toBe('g3r1f1');
    expect(decode('z2br1')).toBe('zebra');
    expect(decode('2squ3l4')).toBe('esquilo');
    expect(decode('p5m1')).toBe('puma');
  });
  it('Verifica se a string de saída contém a mesma quantidade de caracteres que a de entrada', () => {
    expect(encode('lobo').length).toBe(4);
    expect(encode('impala').length).toBe(6);
    expect(encode('porco').length).toBe(5);
    expect(decode('t3gr2').length).toBe(5);
    expect(decode('m1ng5st4').length).toBe(8);
    expect(decode('l1g4st1').length).toBe(7);
  });
})
