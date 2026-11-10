import Settings from '../settings';

describe('Settings', () => {
  test('stores default and user settings in separate Maps', () => {
    const settings = new Settings();

    expect(settings.defaultSettings).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]));
    expect(settings.userSettings).toBeInstanceOf(Map);
    expect(settings.userSettings.size).toBe(0);
  });

  test('returns the default settings when the user has not customized any', () => {
    const settings = new Settings();

    expect(settings.settings).toEqual(settings.defaultSettings);
  });

  test('overlays user settings on defaults without changing either source Map', () => {
    const settings = new Settings();
    settings.userSettings.set('theme', 'light');
    settings.userSettings.set('music', 'off');

    expect(settings.settings).toEqual(new Map([
      ['theme', 'light'],
      ['music', 'off'],
      ['difficulty', 'easy'],
    ]));
    expect(settings.defaultSettings.get('theme')).toBe('dark');
    expect(settings.userSettings).toEqual(new Map([
      ['theme', 'light'],
      ['music', 'off'],
    ]));
  });

  test('returns a new merged Map each time', () => {
    const settings = new Settings();
    const merged = settings.settings;
    merged.set('theme', 'gray');

    expect(settings.settings.get('theme')).toBe('dark');
  });
});
