import { sortByHealth } from '../src/sortByHealth';

describe('sortByHealth', () => {
  test('sorts characters from highest health to lowest', () => {
    const characters = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const sortedCharacters = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortByHealth(characters);

    expect(result).toEqual(sortedCharacters);
    expect(result).not.toBe(sortedCharacters);
    expect(characters[0].name).toBe('мечник');
  });
});
