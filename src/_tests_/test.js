import { sortHeroes } from '../sort';

describe('sortHeroes', () => {
  test('sorts heroes by health descending', () => {
    const input = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const result = sortHeroes(input);

    expect(result).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });

  test('works with 2 heroes', () => {
    const input = [
      { name: 'лучник', health: 30 },
      { name: 'маг', health: 90 },
    ];

    expect(sortHeroes(input)).toEqual([
      { name: 'маг', health: 90 },
      { name: 'лучник', health: 30 },
    ]);
  });

  test('works with 1 hero', () => {
    const input = [{ name: 'маг', health: 100 }];
    expect(sortHeroes(input)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('works with empty array', () => {
    expect(sortHeroes([])).toEqual([]);
  });
});
