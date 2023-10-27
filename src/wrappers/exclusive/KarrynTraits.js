import { CheatParam } from "../CheatTraits";
import { TextManager, $dataSystem } from "../Constants";

export const KARRYN_TRAIT_TYPE = {
  PARAM: "Stat",
  XPARAM: "XParam",
  SPARAM: "SParam",
  ELEMENT: "Element",
};

export class KarrynTrait extends CheatParam {
  constructor(actor, paramId) {
    super(actor, paramId);
  }

  get type() {
    return this._type;
  }

  get displayValue() {
    try {
      return this.value;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  static getAll(actor, traitType) {
    try {
      switch (traitType) {
        case KARRYN_TRAIT_TYPE.PARAM:
          return KarrynParam.getAll(actor);
        case KARRYN_TRAIT_TYPE.XPARAM:
          return KarrynXParam.getAll(actor);
        case KARRYN_TRAIT_TYPE.SPARAM:
          return KarrynSParam.getAll(actor);
        case KARRYN_TRAIT_TYPE.ELEMENT:
          return KarrynResistParam.getAll(actor);
        default:
          return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class KarrynParam extends KarrynTrait {
  constructor(actor, paramId) {
    super(actor, paramId);

    this._type = KARRYN_TRAIT_TYPE.PARAM;
  }

  //#region Getters and Setters
  get name() {
    try {
      return TextManager.param(this._paramId);
    } catch (error) {
      console.error(error);
      return "undefined";
    }
  }

  get level() {
    try {
      return this._actor._paramLvl[this._paramId];
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get value() {
    try {
      return this._actor.param(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get plusValue() {
    try {
      return this._actor.paramPlus(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set plusValue(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this._actor.paramPlus(this._paramId);

      if (delta === 0) return;

      this._actor.addParam(this._paramId, delta);
    } catch (error) {
      console.error(error);
    }
  }

  get rateValue() {
    try {
      return this._actor.paramRate(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get flatValue() {
    try {
      return this._actor.paramFlat(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  //#endregion Getters and Setters

  //#region Functions
  static getAll(actor) {
    try {
      return Array.from({ length: actor._paramPlus.length }, (_, i) => {
        return new KarrynParam(actor, i);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  //#endregion Functions
}

export class KarrynXParam extends KarrynTrait {
  constructor(actor, paramId) {
    super(actor, paramId);

    this._type = KARRYN_TRAIT_TYPE.XPARAM;
  }

  //#region Getters and Setters
  get name() {
    try {
      return TextManager.xparam(this._paramId);
    } catch (error) {
      console.error(error);
      return "undefined";
    }
  }

  get displayValue() {
    try {
      return (this.value * 100).toFixed(0) + "%";
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get value() {
    try {
      return this._actor.xparam(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get plusValue() {
    try {
      return this._actor._xparamPlus[this._paramId] || 0;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set plusValue(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this.plusValue;

      if (delta === 0) return;

      this._actor.addXParam(this._paramId, delta);
    } catch (error) {
      console.error(error);
    }
  }

  get rateValue() {
    try {
      return this._actor.xparamRate(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get flatValue() {
    try {
      return this._actor.xparamFlat(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  //#endregion Getters and Setters

  //#region Functions
  static getAll(actor) {
    try {
      return Array.from({ length: actor._xparamPlus.length }, (_, i) => {
        return new KarrynXParam(actor, i);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class KarrynSParam extends KarrynTrait {
  constructor(actor, paramId) {
    super(actor, paramId);

    this._type = KARRYN_TRAIT_TYPE.SPARAM;
  }

  //#region Getters and Setters
  get name() {
    try {
      return TextManager.sparam(this._paramId);
    } catch (error) {
      console.error(error);
      return "undefined";
    }
  }

  get displayValue() {
    try {
      return (this.value * 100).toFixed(0) + "%";
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get value() {
    try {
      return this._actor.sparam(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get plusValue() {
    try {
      return this._actor._sparamPlus[this._paramId] || 0;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set plusValue(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this.plusValue;

      if (delta === 0) return;

      this._actor.addSParam(this._paramId, delta);
    } catch (error) {
      console.error(error);
    }
  }

  get rateValue() {
    try {
      return this._actor.sparamRate(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get flatValue() {
    try {
      return this._actor.sparamFlat(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  //#endregion Getters and Setters

  //#region Functions
  static getAll(actor) {
    try {
      return Array.from({ length: actor._sparamPlus.length }, (_, i) => {
        return new KarrynSParam(actor, i);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  //#endregion Functions
}

export class KarrynResistParam extends KarrynTrait {
  constructor(actor, paramId) {
    super(actor, paramId);

    this._type = KARRYN_TRAIT_TYPE.ELEMENT;
  }

  shouldDisplay() {
    try {
      if (this._paramId <= 1) return false;
      return TextManager.element(this._paramId) != "";
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  //#region Getters and Setters
  get name() {
    try {
      return TextManager.element(this._paramId) + TextManager.resistName;
    } catch (error) {
      console.error(error);
      return "undefined";
    }
  }

  get displayValue() {
    try {
      return ((this.value * 100).toFixed(0) - 100) * -1 + "%";
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get value() {
    try {
      return this._actor.elementRate(this._paramId);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set value(v) {
    throw new Error("Cannot set value of resist params");
  }

  //#endregion Getters and Setters

  //#region Functions
  static getAll(actor) {
    try {
      return Array.from({ length: $dataSystem.elements.length }, (_, i) => {
        return new KarrynResistParam(actor, i);
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  //#endregion Functions
}
