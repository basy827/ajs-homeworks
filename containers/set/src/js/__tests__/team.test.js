import Team from '../team';

describe('Team', () => {
  test('stores members in a Set', () => {
    const team = new Team();

    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('adds a character', () => {
    const team = new Team();
    const character = { name: 'Bowman' };

    team.add(character);

    expect(team.members.has(character)).toBe(true);
  });

  test('throws when adding the same character twice', () => {
    const team = new Team();
    const character = { name: 'Bowman' };
    team.add(character);

    expect(() => team.add(character)).toThrow('Character is already in the team');
    expect(team.members.size).toBe(1);
  });

  test('adds multiple characters and ignores duplicates', () => {
    const team = new Team();
    const first = { name: 'Bowman' };
    const second = { name: 'Swordsman' };

    team.add(first);
    expect(() => team.addAll(first, second, second)).not.toThrow();

    expect(team.toArray()).toEqual([first, second]);
  });

  test('converts an empty Set to an empty array', () => {
    const team = new Team();

    expect(team.toArray()).toEqual([]);
  });
});
