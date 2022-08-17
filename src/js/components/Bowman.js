import Character from './Character';

export default class Bowman extends Character {
  constructor(options) {
    super({ ...options, type: 'Bowman' });
    this.attack = 25;
    this.defence = 25;
  }
}
