import MathChar from './MathChar';

export default class Deamon extends MathChar {
  constructor(name, type = 'Deamon', distance) {
    super(name, type, distance);
    this.attack = 25;
    this.defence = 25;
  }
}
