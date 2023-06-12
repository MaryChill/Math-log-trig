import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.stoned = false;
    this.distance = distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let damage = this._attack * ((11 - this.distance) / 10);
    if (this.stoned) {
      damage -= Math.log2(this.distance) * 5;
    }
    if (damage > 0) {
      return damage = Math.round(damage);
    }
    return damage = 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
