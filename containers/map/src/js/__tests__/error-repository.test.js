import ErrorRepository from '../error-repository';

describe('ErrorRepository', () => {
  test('stores error descriptions in a Map', () => {
    const repository = new ErrorRepository();

    expect(repository.errors).toBeInstanceOf(Map);
    expect(repository.errors.size).toBeGreaterThan(0);
  });

  test('translates a known error code', () => {
    const repository = new ErrorRepository();

    expect(repository.translate(404)).toBe('Not Found');
  });

  test('returns the fallback for an unknown error code', () => {
    const repository = new ErrorRepository();

    expect(repository.translate(999)).toBe('Unknown error');
  });
});
