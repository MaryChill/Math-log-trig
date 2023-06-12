import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(name, type = 'Magician', distance) {
    super(name, type, distance);
    this.attack = 25;
    this.defence = 25;
  }
}
