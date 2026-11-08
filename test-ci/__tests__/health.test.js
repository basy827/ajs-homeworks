import { getHealthStatus } from '../src/health';

describe('getHealthStatus', () => {
  test('returns healthy for health above 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('returns wounded for health from 50 to 15 inclusive', () => {
    expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
  });

  test('returns critical for health below 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
  });
});
