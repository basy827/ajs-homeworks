export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  get settings() {
    const settings = new Map(this.defaultSettings);

    this.userSettings.forEach((value, key) => {
      settings.set(key, value);
    });

    return settings;
  }
}
