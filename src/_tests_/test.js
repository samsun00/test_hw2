import { getHealthStatus } from '../health';
import { sortHeroes } from '../sort';

describe('getHealthStatus', () => {
  // Зеленый - здоров
  test('health > 50 returns healthy', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Маг', health: 51 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Маг', health: 100 })).toBe('healthy');
  });

  // Желтый - ранен
  test('health between 15 and 50 returns wounded', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  // Красный - критический
  test('health < 15 returns critical', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 5 })).toBe('critical');
    expect(getHealthStatus({ name: 'Маг', health: 0 })).toBe('critical');
  });
});

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
