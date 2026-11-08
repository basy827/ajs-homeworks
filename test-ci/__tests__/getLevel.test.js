jest.mock('../src/http', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import fetchData from '../src/http';
import { getLevel } from '../src/getLevel';

describe('getLevel', () => {
  beforeEach(() => {
    fetchData.mockReset();
  });

  test('returns the level when the response status is ok', () => {
    fetchData.mockReturnValue({ status: 'ok', level: 42 });

    expect(getLevel('user-1')).toBe('Ваш текущий уровень: 42');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/user-1');
  });

  test('returns the unavailable message when the response status is not ok', () => {
    fetchData.mockReturnValue({ status: 'error' });

    expect(getLevel('user-2')).toBe('Информация об уровне временно недоступна');
  });

  test('propagates errors thrown by fetchData', () => {
    const error = new Error('Network error');
    fetchData.mockImplementation(() => {
      throw error;
    });

    expect(() => getLevel('user-3')).toThrow(error);
  });
});
