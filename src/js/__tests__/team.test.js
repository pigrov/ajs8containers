import Team from '../team';
import Character from '../character';

test('Adding a player', () => {
    const character = new Character('Sam', 'Daemon');
    const team = new Team();
    team.add(character);
    const newContainer = new Set();
    newContainer.add({ name: 'Sam', type: 'Daemon' });
    expect(team.members).toEqual(newContainer);
});

test('Adding multiple players', () => {
    const character1 = new Character('Tony', 'Undead');
    const character2 = new Character('Sam', 'Daemon');
    const character3 = new Character('Bobbi', 'Zombie');
    const team = new Team();
    team.addAll(character1, character2, character3, character2);
    expect(team.members.size).toBe(3);
});

test('check Set === array', () => {
    const character1 = new Character('Tony', 'Undead');
    const character2 = new Character('Sam', 'Daemon');
    const team = new Team();
    team.addAll(character1, character2);
    team.toArray();
    expect(team.members).toEqual([{ name: 'Tony', type: 'Undead' }, { name: 'Sam', type: 'Daemon' }]);
});

test('Adding an existing player', () => {
    const character = new Character('Sam', 'Daemon');
    const team = new Team();
    team.add(character);
    expect(() => {
        team.add(character);
    }).toThrow();
});