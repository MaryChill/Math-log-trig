import Deamon from '../Deamon';

test('check get attack', () => {
  const gamer = new Deamon('gamer', 'Deamon', 2);
  expect(gamer.attack).toEqual(23);
});

test('check get attack = 0', () => {
  const gamer = new Deamon('gamer', 'Deamon', 11);
  expect(gamer.attack).toEqual(0);
});

test('check get attack with stoned', () => {
  const gamer = new Deamon('gamer', 'Deamon', 2);
  gamer.stoned = true;
  expect(gamer.attack).toEqual(18);
});

test('check error name', () => {
  expect(() => {
    const gamer = new Deamon('g');
  }).toThrowError('некорректное имя');
});

test('check error type', () => {
  expect(() => {
    const gamer = new Deamon('gamer', 'D');
  }).toThrowError('Неверный тип');
});
