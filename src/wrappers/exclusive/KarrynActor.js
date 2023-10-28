import { CheatActor } from "../CheatActor";
import { ACTOR_KARRYN_ID } from "./KarrynConstants";
import { KarrynTrait, KARRYN_TRAIT_TYPE } from "./KarrynTraits";
import { KarrynUtils } from "./KarrynUtils";

const Yanfly = opener.Yanfly;
const Game_Actor = opener.Game_Actor;

Object.defineProperty(Game_Actor.prototype, "xLevel", {
  get: function () {
    return this._level;
  },
  set: function (value) {
    this._level = value;
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yLevelLimit", {
  get: function () {
    return this.getWardenLevelLimit();
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xStamina", {
  get: function () {
    return this._hp;
  },
  set: function (value) {
    this.setHp(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xEnergy", {
  get: function () {
    return this._mp;
  },
  set: function (value) {
    this.setMp(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xPleasure", {
  get: function () {
    return this._tp;
  },
  set: function (value) {
    this.setTp(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xWill", {
  get: function () {
    return this._will;
  },
  set: function (value) {
    this.setWill(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xExp", {
  get: function () {
    return this.currentExp();
  },
  set: function (value) {
    this.changeExp(value, false);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yNextLevelExp", {
  get: function () {
    return this.nextLevelExp();
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xFatigue", {
  get: function () {
    return this._fatigue;
  },
  set: function (value) {
    this.setFatigue(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "xSlutLevel", {
  get: function () {
    return this._slutLvl;
  },
  set: function (value) {
    this.setSlutLvl(value);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yParams", {
  get: function () {
    return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.PARAM);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yXParams", {
  get: function () {
    return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.XPARAM);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "ySParams", {
  get: function () {
    return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.SPARAM);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yElements", {
  get: function () {
    return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.ELEMENT);
  },
  configurable: true,
});

Object.defineProperty(Game_Actor.prototype, "yCritDmg", {
  get: function () {
    try {
      let value = 1;
      let user = KarrynUtils.karryn;
      // eslint-disable-next-line no-unused-vars
      let bonus = user.criticalMultiplierBonus();
      // eslint-disable-next-line no-unused-vars
      let target = false;
      eval(Yanfly.Param.critMult);

      return (value * 100).toFixed(0);
    } catch (error) {
      console.error(error);
      return (100).toFixed(0);
    }
  },
  configurable: true,
});

export class KarrynActor extends CheatActor {
  constructor(actor) {
    super(actor);
  }

  get actor() {
    this._actor = opener.$gameActors.actor(ACTOR_KARRYN_ID);
    KarrynActor.registerCheatFunctions(this._actor);
    return this._actor;
  }

  hasTitle(title) {
    try {
      return opener.$gameParty.hasItem(opener.$dataArmors[title], true);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  isUsingThisTitle(title) {
    try {
      return this.actor.isUsingThisTitle(title);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  //#region Cheat Functions
  get isInvincible() {
    try {
      return this.actor.isInvincible && this.actor.isInvincible();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isInvincible(value) {
    if (value) {
      this.actor.enableInvincible();
    } else {
      this.actor.disableInvincible();
    }
  }

  get isNoPaySkillCost() {
    try {
      return this.actor.isNoPaySkillCost && this.actor.isNoPaySkillCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoPaySkillCost(value) {
    if (value) {
      this.actor.enableNoSkillCost();
    } else {
      this.actor.disableNoNoSkillCost();
    }
  }

  get isNoStaminaCost() {
    try {
      return this.actor.isNoStaminaCost && this.actor.isNoStaminaCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoStaminaCost(value) {
    if (value) {
      this.actor.enableNoStaminaCost();
    } else {
      this.actor.disableNoStaminaCost();
    }
  }

  get isNoEnergyCost() {
    try {
      return this.actor.isNoEnergyCost && this.actor.isNoEnergyCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoEnergyCost(value) {
    if (value) {
      this.actor.enableNoEnergyCost();
    } else {
      this.actor.disableNoEnergyCost();
    }
  }

  get isNoWillCost() {
    try {
      return this.actor.isNoWillCost && this.actor.isNoWillCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoWillCost(value) {
    if (value) {
      this.actor.enableNoWillCost();
    } else {
      this.actor.disableNoWillCost();
    }
  }

  get isNoClothingDamage() {
    try {
      return this.actor.isNoClothingDamage && this.actor.isNoClothingDamage();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoClothingDamage(value) {
    if (value) {
      this.actor.enableNoClothingDamage();
    } else {
      this.actor.disableNoClothingDamage();
    }
  }

  get isNoCooldown() {
    try {
      return this.actor.isNoCooldown && this.actor.isNoCooldown();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoCooldown(value) {
    if (value) {
      this.actor.enableNoCooldown();
    } else {
      this.actor.disableNoCooldown();
    }
  }

  static registerCheatFunctions(actor) {
    try {
      this.registerInvincibleFunctions(actor);
      this.registerClothingDamageCheatFunctions(actor);
      this.registerStaminaCostCheatFunctions(actor);
      this.registerEnergyCostCheatFunctions(actor);
      this.registerWillpowerCheatFunctions(actor);
      this.registerCooldownCheatFunctions(actor);
      this.registerPaySkillCostCheatFunctions(actor);
    } catch (error) {
      console.error(error);
    }
  }

  static registerInvincibleFunctions(actor) {
    if (actor.enableInvincible) {
      return;
    }

    actor.enableInvincible = function () {
      this.isInvincible = () => true;
    };

    actor.disableInvincible = function () {
      if (this.isInvincible) {
        delete this.isInvincible;
      }
    };
  }

  static registerPaySkillCostCheatFunctions(actor) {
    if (actor.enableNoPaySkillCost) {
      return;
    }

    actor.enableNoPaySkillCost = function () {
      this.isNoPaySkillCost = () => true;

      this.paySkillCost_bk = this.paySkillCost;
      this.paySkillCost = function (skill) {
        if (this.isNoPaySkillCost()) {
          return;
        }

        this.paySkillCost_bk(skill);
      };
    };

    actor.disableNoPaySkillCost = function () {
      if (this.isNoPaySkillCost) {
        this.paySkillCost = this.paySkillCost_bk;
        delete this.isNoPaySkillCost;
        delete this.paySkillCost_bk;
      }
    };
  }

  static registerStaminaCostCheatFunctions(actor) {
    if (actor.enableNoStaminaCost) {
      return;
    }

    actor.enableNoStaminaCost = function () {
      this.isNoStaminaCost = () => true;

      this.skillHpCost_bk = this.skillHpCost;
      this.skillHpCost = function (skill) {
        if (this.isNoStaminaCost()) {
          return 0;
        }

        return this.skillHpCost_bk(skill);
      };
    };

    actor.disableNoStaminaCost = function () {
      if (this.isNoStaminaCost) {
        this.skillHpCost = this.skillHpCost_bk;
        delete this.isNoStaminaCost;
        delete this.skillHpCost_bk;
      }
    };
  }

  static registerEnergyCostCheatFunctions(actor) {
    if (actor.enableNoEnergyCost) {
      return;
    }

    actor.enableNoEnergyCost = function () {
      this.isNoEnergyCost = () => true;

      this.skillMpCost_bk = this.skillMpCost;
      this.skillMpCost = function (skill) {
        if (this.isNoEnergyCost()) {
          return 0;
        }

        return this.skillMpCost_bk(skill);
      };
    };

    actor.disableNoEnergyCost = function () {
      if (this.isNoEnergyCost) {
        this.skillMpCost = this.skillMpCost_bk;
        delete this.isNoEnergyCost;
        delete this.skillMpCost_bk;
      }
    };
  }

  static registerWillpowerCheatFunctions(actor) {
    if (actor.enableNoWillCost) {
      return;
    }

    actor.enableNoWillCost = function () {
      this.isNoWillCost = () => true;

      this.calculateWillSkillCost_bk = this.calculateWillSkillCost;
      this.calculateWillSkillCost = function (baseCost, skill) {
        if (this.isNoWillCost()) {
          return 0;
        }

        return this.calculateWillSkillCost_bk(baseCost, skill);
      };
    };

    actor.disableNoWillCost = function () {
      if (this.isNoWillCost) {
        this.calculateWillSkillCost = this.calculateWillSkillCost_bk;
        delete this.isNoWillCost;
        delete this.calculateWillSkillCost_bk;
      }
    };
  }

  static registerClothingDamageCheatFunctions(actor) {
    if (actor.enableNoClothingDamage) {
      return;
    }

    actor.enableNoClothingDamage = function () {
      this.isNoClothingDamage = () => true;

      this.damageClothing_bk = this.damageClothing;
      this.damageClothing = function (damage, selfDamage) {
        if (this.isNoClothingDamage()) {
          return 0;
        }

        return this.damageClothing_bk(damage, selfDamage);
      };
    };

    actor.disableNoClothingDamage = function () {
      if (this.isNoClothingDamage) {
        this.damageClothing = this.damageClothing_bk;
        delete this.isNoClothingDamage;
        delete this.damageClothing_bk;
      }
    };
  }

  static registerCooldownCheatFunctions(actor) {
    if (actor.enableNoCooldown) {
      return;
    }

    actor.enableNoCooldown = function () {
      this.isNoCooldown = () => true;

      this.payCooldownCost_bk = this.payCooldownCost;
      this.payCooldownCost = function (skill) {
        if (this.isNoCooldown()) {
          this.setCooldown(skill, 0);
          return;
        }

        this.payCooldownCost_bk(skill);
      };
    };

    actor.disableNoCooldown = function () {
      if (this.isNoCooldown) {
        this.payCooldownCost = this.payCooldownCost_bk;
        delete this.isNoCooldown;
        delete this.payCooldownCost_bk;
      }
    };
  }
  //#endregion Cheat Functions

  static getKarryn() {
    try {
      return opener.$gameActors.actor(ACTOR_KARRYN_ID);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
