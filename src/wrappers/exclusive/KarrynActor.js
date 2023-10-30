import { ACTOR_KARRYN_ID } from "./KarrynConstants";
import { KarrynTrait, KARRYN_TRAIT_TYPE } from "./KarrynTraits";

export const wrapper = {
  level: "xLevel",
  wardenLevelLimit: "yLevelLimit",
  hp: "xStamina",
  mp: "xEnergy",
  tp: "xPleasure",
  cockiness: "xCockiness",
  clothingDurability: "xClothingDurability",
  clothingMaxDurability: "yClothingMaxDurability",
  will: "xWill",
  exp: "xExp",
  nextLevelExp: "yNextLevelExp",
  fatigue: "xFatigue",
  slutLvl: "xSlutLevel",
  params: "yParams",
  xParams: "yXParams",
  sParams: "ySParams",
  elements: "yElements",

  cd: "yCritDmg",
};

//#region Game_Actor properties for cheat functions
export class KarrynActorHelper {
  constructor() {
    throw new Error("KarrynActorHelper is a static class.");
  }

  static init() {
    if (!opener.KarrynActorHelper) {
      opener.KarrynActorHelper = KarrynActorHelper;
    }

    try {
      KarrynActorHelper.registerWrapperProperties();
      KarrynActorHelper.registerWrapperMethods();
      KarrynActorHelper.registerCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  //#region Cheat Toggles
  static get isInvincible() {
    const actor = this.getActor();
    return actor.isInvincible && actor.isInvincible();
  }

  static set isInvincible(value) {
    const actor = this.getActor();
    if (value) {
      actor.isInvincible = () => true;
    } else {
      actor.isInvincible = () => false;
    }
  }

  static get isNoClothingDamage() {
    const actor = this.getActor();
    return actor.isNoClothingDamage && actor.isNoClothingDamage();
  }

  static set isNoClothingDamage(value) {
    const actor = this.getActor();
    if (value) {
      actor.isNoClothingDamage = () => true;
    } else {
      actor.isNoClothingDamage = () => false;
    }
  }

  static get isNoPaySkillCost() {
    return (
      opener.Game_Actor.isNoPaySkillCost && opener.Game_Actor.isNoPaySkillCost()
    );
  }

  static set isNoPaySkillCost(value) {
    if (value) {
      opener.Game_Actor.isNoPaySkillCost = () => true;
    } else {
      opener.Game_Actor.isNoPaySkillCost = () => false;
    }
  }

  static get isNoStaminaCost() {
    return (
      opener.Game_Actor.isNoStaminaCost && opener.Game_Actor.isNoStaminaCost()
    );
  }

  static set isNoStaminaCost(value) {
    if (value) {
      opener.Game_Actor.prototype.isNoStaminaCost = () => true;
    } else {
      opener.Game_Actor.prototype.isNoStaminaCost = () => false;
    }
  }

  static get isNoEnergyCost() {
    return (
      opener.Game_Actor.isNoEnergyCost && opener.Game_Actor.isNoEnergyCost()
    );
  }

  static set isNoEnergyCost(value) {
    if (value) {
      opener.Game_Actor.isNoEnergyCost = () => true;
    } else {
      opener.Game_Actor.isNoEnergyCost = () => false;
    }
  }

  static get isNoWillCost() {
    return opener.Game_Actor.isNoWillCost && opener.Game_Actor.isNoWillCost();
  }

  static set isNoWillCost(value) {
    if (value) {
      opener.Game_Actor.isNoWillCost = () => true;
    } else {
      opener.Game_Actor.isNoWillCost = () => false;
    }
  }

  static get isNoCooldown() {
    return opener.Game_Actor.isNoCooldown && opener.Game_Actor.isNoCooldown();
  }

  static set isNoCooldown(value) {
    if (value) {
      opener.Game_Actor.isNoCooldown = () => true;
    } else {
      opener.Game_Actor.isNoCooldown = () => false;
    }
  }
  //#endregion Cheat Toggles

  static getActor() {
    try {
      return opener.$gameActors.actor(ACTOR_KARRYN_ID);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static registerWrapperProperties() {
    //#region Game_Actor wrapper properties
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, wrapper.level, {
      get: function () {
        return this._level;
      },
      set: function (value) {
        this._level = value;
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.wardenLevelLimit, {
      get: function () {
        return this.getWardenLevelLimit();
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.hp, {
      get: function () {
        return this._hp;
      },
      set: function (value) {
        this.setHp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.mp, {
      get: function () {
        return this._mp;
      },
      set: function (value) {
        this.setMp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.tp, {
      get: function () {
        return this._tp;
      },
      set: function (value) {
        this.setTp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.will, {
      get: function () {
        return this._will;
      },
      set: function (value) {
        this.setWill(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.exp, {
      get: function () {
        return this.currentExp();
      },
      set: function (value) {
        this.changeExp(value, false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.nextLevelExp, {
      get: function () {
        return this.nextLevelExp();
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.fatigue, {
      get: function () {
        return this._fatigue;
      },
      set: function (value) {
        this.setFatigue(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.slutLvl, {
      get: function () {
        return this._slutLvl;
      },
      set: function (value) {
        this.setSlutLvl(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.cockiness, {
      get: function () {
        return this.cockiness;
      },
      set: function (value) {
        try {
          if (isNaN(value) || value < 0) {
            return;
          }

          let delta = value - this.cockiness;

          if (delta === 0) {
            return;
          }

          this.addCockiness(delta);
        } catch (e) {
          console.error(e);
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.clothingDurability, {
      get: function () {
        return this._clothingDurability;
      },
      set: function (value) {
        try {
          if (isNaN(value) || value < 0) {
            return;
          }

          this._clothingDurability = value.clamp(
            0,
            this.getClothingMaxDurability(false)
          );
        } catch (e) {
          console.error(e);
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.clothingMaxDurability, {
      get: function () {
        return this.getClothingMaxDurability(false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.params, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.PARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.xParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.XPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.sParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.SPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.elements, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.ELEMENT);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, wrapper.cd, {
      get: function () {
        try {
          let value = 1;
          let user = KarrynActorHelper.getActor();
          // eslint-disable-next-line no-unused-vars
          let bonus = user.criticalMultiplierBonus();
          // eslint-disable-next-line no-unused-vars
          let target = false;
          eval(opener.Yanfly.Param.critMult);

          return (value * 100).toFixed(0);
        } catch (error) {
          console.error(error);
          return (100).toFixed(0);
        }
      },
      configurable: true,
    });

    //#endregion Game_Actor wrapper properties
  }

  static registerWrapperMethods() {
    //#region Game_Actor wrapper functions
    opener.Game_Actor.prototype.hasTitle = function (title) {
      try {
        return opener.$gameParty.hasItem(opener.$dataArmors[title], true);
      } catch (error) {
        console.error(error);
        return false;
      }
    };
    //#endregion Game_Actor wrapper functions
  }

  static registerCheatFunctions() {
    try {
      KarrynActorHelper.registerInvincibleCheatFunctions();
      KarrynActorHelper.registerClothingDamageCheatFunctions();
      KarrynActorHelper.registerStaminaCostCheatFunctions();
      KarrynActorHelper.registerEnergyCostCheatFunctions();
      KarrynActorHelper.registerWillpowerCheatFunctions();
      KarrynActorHelper.registerCooldownCheatFunctions();
      KarrynActorHelper.registerPaySkillCostCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  static registerInvincibleCheatFunctions() {
    try {
      console.log(`Invincible cheat is not implemented`);
    } catch (error) {
      console.error(error);
    }
  }

  static registerClothingDamageCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_damageClothing) {
        self.Game_Actor_damageClothing = Game_Actor.prototype.damageClothing;
      }

      Game_Actor.prototype.damageClothing = function (damage, selfDamage) {
        if (this.isNoClothingDamage && this.isNoClothingDamage()) {
          return 0;
        }

        return self.Game_Actor_damageClothing.call(this, damage, selfDamage);
      };
    } catch (error) {
      console.error(error);
    }
  }

  static registerStaminaCostCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_skillHpCost) {
        self.Game_Actor_skillHpCost = Game_Actor.prototype.skillHpCost;
      }

      Game_Actor.prototype.skillHpCost = function (skill) {
        if (this.isNoStaminaCost && this.isNoStaminaCost()) {
          return 0;
        }

        return self.Game_Actor_skillHpCost.call(this, skill);
      };
    } catch (error) {
      console.error(error);
    }
  }

  static registerEnergyCostCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_skillMpCost) {
        self.Game_Actor_skillMpCost = Game_Actor.prototype.skillMpCost;
      }

      Game_Actor.prototype.skillMpCost = function (skill) {
        if (this.isNoEnergyCost && this.isNoEnergyCost()) {
          return 0;
        }

        return self.Game_Actor_skillMpCost.call(this, skill);
      };
    } catch (e) {
      console.error(e);
    }
  }

  static registerWillpowerCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_calculateWillSkillCost) {
        self.Game_Actor_calculateWillSkillCost =
          Game_Actor.prototype.calculateWillSkillCost;
      }

      Game_Actor.prototype.calculateWillSkillCost = function (cost, skill) {
        if (this.isNoWillCost && this.isNoWillCost()) {
          return 0;
        }

        return self.Game_Actor_calculateWillSkillCost.call(this, cost, skill);
      };
    } catch (e) {
      console.error(e);
    }
  }

  static registerCooldownCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_payCooldownCost) {
        self.Game_Actor_payCooldownCost = Game_Actor.prototype.payCooldownCost;
      }

      Game_Actor.prototype.payCooldownCost = function (skill) {
        if (this.isNoCooldown && this.isNoCooldown()) {
          return;
        }

        return self.Game_Actor_payCooldownCost.call(this, skill);
      };
    } catch (e) {
      console.error(e);
    }
  }

  static registerPaySkillCostCheatFunctions() {
    try {
      const Game_Actor = opener.Game_Actor;
      const self = opener.KarrynActorHelper;

      if (!self.Game_Actor_paySkillCost) {
        self.Game_Actor_paySkillCost = Game_Actor.prototype.paySkillCost;
      }

      Game_Actor.prototype.paySkillCost = function (skill) {
        if (this.isNoPaySkillCost && this.isNoPaySkillCost()) {
          return;
        }

        return self.Game_Actor_paySkillCost.call(this, skill);
      };
    } catch (e) {
      console.error(e);
    }
  }
  //#endregion
}
