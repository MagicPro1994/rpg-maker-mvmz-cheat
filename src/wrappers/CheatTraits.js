export const PARAM_TRAIT_NAMES = [
  "Max HP",
  "Max MP",
  "Attack",
  "Defense",
  "M.Attack",
  "M.Defense",
  "Agility",
  "Luck",
];

export const XPARAM_TRAIT_NAMES = [
  "Hit Rate",
  "Evasion Rate",
  "Critical Rate",
  "Critical Evasion Rate",
  "Magic Evasion Rate",
  "Magic Reflection Rate",
  "Counter Attack Rate",
  "HP Regeneration Rate",
  "MP Regeneration Rate",
  "TP Regeneration Rate",
];

export const SPARAM_TRAIT_NAMES = [
  "Target Rate",
  "Guard Effect Rate",
  "Recovery Effect Rate",
  "Pharmacology",
  "MP Cost Rate",
  "TP Charge Rate",
  "Physical Damage Rate",
  "Magical Damage Rate",
  "Floor Damage Rate",
  "Experience Rate",
];

export class CheatParam {
  constructor(actor, paramId) {
    this._actor = actor;
    this._paramId = paramId;
  }

  get id() {
    return this._paramId;
  }

  get name() {
    try {
      return PARAM_TRAIT_NAMES[this._paramId];
    } catch (error) {
      console.error(error);
      return "undefined";
    }
  }

  get accumulatedValue() {
    try {
      return this._actor.param(this._paramId);
    } catch (error) {
      console.error(error);
      console.log(`${this._actor._actorId} ${this._paramId}`);
      return 0;
    }
  }

  get value() {
    try {
      return this._actor.paramPlus(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set value(v) {
    try {
      if (isNaN(v)) {
        throw new Error(`Invalid value: ${v}`);
      }

      let delta = v - this._actor.paramPlus(this._paramId);

      if (delta === 0) return;

      this._actor.addParam(this._paramId, delta);
    } catch (error) {
      console.error(error);
    }
  }
}
