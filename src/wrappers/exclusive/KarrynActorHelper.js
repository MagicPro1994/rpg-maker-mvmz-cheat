import { ACTOR_KARRYN_ID } from "./KarrynConstants";
import { KarrynTrait, KARRYN_TRAIT_TYPE } from "./KarrynTraits";
import {
  properties as desires,
  setupDesireCheat,
} from "./actor/DesireRequirements";

const properties = {
  level: "xLevel",
  wardenLevelLimit: "yLevelLimit",
  hp: "xStamina",
  mp: "xEnergy",
  tp: "xPleasure",
  maxTp: "yMaxPleasure",
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

export const propertyMapper = Object.assign({}, properties, desires);

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
      KarrynActorHelper.setupWrapperProperties();
      KarrynActorHelper.setupWrapperMethods();
      KarrynActorHelper.registerCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  static get karryn() {
    try {
      return opener.$gameActors.actor(ACTOR_KARRYN_ID);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static setupWrapperProperties() {
    //#region Game_Actor wrapper properties
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, propertyMapper.level, {
      get: function () {
        return this._level;
      },
      set: function (value) {
        this._level = value;
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.wardenLevelLimit, {
      get: function () {
        return this.getWardenLevelLimit();
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.hp, {
      get: function () {
        return this._hp;
      },
      set: function (value) {
        this.setHp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.mp, {
      get: function () {
        return this._mp;
      },
      set: function (value) {
        this.setMp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.tp, {
      get: function () {
        return this._tp;
      },
      set: function (value) {
        this.setTp(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.maxTp, {
      get: function () {
        return this.orgasmPoint();
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.will, {
      get: function () {
        return this._will;
      },
      set: function (value) {
        this.setWill(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.exp, {
      get: function () {
        return this.currentExp();
      },
      set: function (value) {
        this.changeExp(value, false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.nextLevelExp, {
      get: function () {
        return this.nextLevelExp();
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.fatigue, {
      get: function () {
        return this._fatigue;
      },
      set: function (value) {
        this.setFatigue(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.slutLvl, {
      get: function () {
        return this._slutLvl;
      },
      set: function (value) {
        this.setSlutLvl(value);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.cockiness, {
      get: function () {
        return this.cockiness;
      },
      set: function (value) {
        try {
          if (isNaN(value)) {
            throw new Error(`Invalid value: ${value}`);
          }

          value = Math.max(value, 0);

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

    Object.defineProperty(prototype, propertyMapper.clothingDurability, {
      get: function () {
        return this._clothingDurability;
      },
      set: function (value) {
        try {
          if (isNaN(value)) {
            throw new Error(`Invalid value: ${value}`);
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

    Object.defineProperty(prototype, propertyMapper.clothingMaxDurability, {
      get: function () {
        return this.getClothingMaxDurability(false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.params, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.PARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.xParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.XPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.sParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.SPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.elements, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.ELEMENT);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, propertyMapper.cd, {
      get: function () {
        try {
          let value = 1;
          let user = KarrynActorHelper.karryn;
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

    setupDesireCheat();
    //#endregion Game_Actor wrapper properties
  }

  static setupWrapperMethods() {
    //#region Game_Actor wrapper functions
    opener.Game_Actor.prototype.hasTitle = function (title) {
      try {
        return opener.$gameParty.hasItem(opener.$dataArmors[title], true);
      } catch (error) {
        console.error(error);
        return false;
      }
    };

    opener.Game_Actor.prototype.setDesires = function (value) {
      this.setMouthDesire(value, false);
      this.setBoobsDesire(value, false);
      this.setPussyDesire(value, false);
      this.setButtDesire(value, false);
      this.setCockDesire(value, false);
    };
    //#endregion Game_Actor wrapper functions
  }

  static registerCheatFunctions() {
    try {
      KarrynActorHelper.setupInvincibleCheat();
      KarrynActorHelper.setupClothingDamageCheat();
      KarrynActorHelper.setupStaminaCostCheat();
      KarrynActorHelper.setupEnergyCostCheat();
      KarrynActorHelper.setupWillpowerCheat();
      KarrynActorHelper.setupCooldownCheat();
      KarrynActorHelper.setupPaySkillCostCheat();
    } catch (error) {
      console.error(error);
    }
  }

  static setupInvincibleCheat() {
    try {
      console.log(`Invincible cheat is not implemented`);
    } catch (error) {
      console.error(error);
    }
  }

  static setupClothingDamageCheat() {
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

  static setupStaminaCostCheat() {
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

  static setupEnergyCostCheat() {
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

  static setupWillpowerCheat() {
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

  static setupCooldownCheat() {
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

  static setupPaySkillCostCheat() {
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
