import Character from '../components/Character';
import Daemon from '../components/Daemon';

describe('Character name', () => {
    test.each([
        ['D', new Error('Wrong name')],
        [0, new Error('Wrong name')],
        ['DaemonDaemon', new Error('Wrong name')],
    ])('should Wrong type or type not found', (name, error) => {
        expect(() => new Character(name, 'Daemon')).toThrowError(error);
    });
});


describe('Character components check', () => {
    const deamon = new Daemon({
        name: 'Crouly',
    });
  
    test('should to set attack and defence', () => {
        expect(deamon.attack).toBe(10);
        expect(deamon.defence).toBe(40);
    });

    test("should denied if dead", () => {
        const received = new Character('Crouly', 'Daemon');
        received.health = 0;
      
        expect(() => received.levelUp()).toThrowError(new Error('Character DEAD'));
    });    
});

test("should refresh caracter's health if it was damaged", () => {
    const received = new Character('Crouly', 'Daemon');
    received.attack = 10;
    received.defence = 40;
  
    const expected = {
        name: 'Crouly',
        type: 'Daemon',
        level: 1,
        health: 88,
        attack: 10,
        defence: 40,
    };
  
    received.damage(20);
    expect(received.health).toBeCloseTo(expected.health);
});