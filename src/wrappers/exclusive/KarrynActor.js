import { CheatActor } from "../CheatActor";
import { ACTOR_KARRYN_ID } from "./KarrynConstants";
import { KarrynTrait, KARRYN_TRAIT_TYPE } from "./KarrynTraits";

export const wrapper = {
  level: "xLevel",
  wardenLevelLimit: "yLevelLimit",
  hp: "xStamina",
  mp: "xEnergy",
  tp: "xPleasure",
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

  noClothingDmg: "_cClothingDmg",
  noPaySkillCost: "_cPaySkillCost",
  noStaminaCost: "_cStaminaCost",
  noEnergyCost: "_cEnergyCost",
  noWillCost: "_cWillCost",
  invincible: "_cInvincible",
};

//#region Game_Actor properties for cheat functions
export class KarrynActorHelper {
  static init() {
    if (!opener.KarrynActorHelper) {
      opener.KarrynActorHelper = KarrynActorHelper;
    }

    try {
      KarrynActorHelper.registerWrapperProperties();
      KarrynActorHelper.registerWrapperMethods();
    } catch (error) {
      console.error(error);
    }
  }

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

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.level, {
      get: function () {
        return this._level;
      },
      set: function (value) {
        this._level = value;
      },
      configurable: true,
    });

    Object.defineProperty(
      opener.Game_Actor.prototype,
      wrapper.wardenLevelLimit,
      {
        get: function () {
          return this.getWardenLevelLimit();
        },
        configurable: true,
      }
    );

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.hp, {
      get: function () {
        return this._hp;
      },
      set: function (value) {
        this.setHp(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.mp, {
      get: function () {
        return this._mp;
      },
      set: function (value) {
        this.setMp(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.tp, {
      get: function () {
        return this._tp;
      },
      set: function (value) {
        this.setTp(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.will, {
      get: function () {
        return this._will;
      },
      set: function (value) {
        this.setWill(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.exp, {
      get: function () {
        return this.currentExp();
      },
      set: function (value) {
        this.changeExp(value, false);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.nextLevelExp, {
      get: function () {
        return this.nextLevelExp();
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.fatigue, {
      get: function () {
        return this._fatigue;
      },
      set: function (value) {
        this.setFatigue(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.slutLvl, {
      get: function () {
        return this._slutLvl;
      },
      set: function (value) {
        this.setSlutLvl(value);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.params, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.PARAM);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.xParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.XPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.sParams, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.SPARAM);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.elements, {
      get: function () {
        return KarrynTrait.getAll(this, KARRYN_TRAIT_TYPE.ELEMENT);
      },
      configurable: true,
    });

    Object.defineProperty(opener.Game_Actor.prototype, wrapper.cd, {
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
      // KarrynActorHelper.registerInvincibleFunctions();
      KarrynActorHelper.registerClothingDamageCheatFunctions();
      // KarrynActorHelper.registerStaminaCostCheatFunctions();
      // KarrynActorHelper.registerEnergyCostCheatFunctions();
      // KarrynActorHelper.registerWillpowerCheatFunctions();
      // KarrynActorHelper.registerCooldownCheatFunctions();
      // KarrynActorHelper.registerPaySkillCostCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  static unregisterCheatFunctions() {
    try {
      // KarrynActorHelper.unregisterInvincibleFunctions();
      KarrynActorHelper.unregisterClothingDamageCheatFunctions();
      // KarrynActorHelper.unregisterStaminaCostCheatFunctions();
      // KarrynActorHelper.unregisterEnergyCostCheatFunctions();
      // KarrynActorHelper.unregisterWillpowerCheatFunctions();
      // KarrynActorHelper.unregisterCooldownCheatFunctions();
      // KarrynActorHelper.unregisterPaySkillCostCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  static registerClothingDamageCheatFunctions() {
    try {
      if (!opener.KarrynActorHelper.Game_Actor_damageClothing) {
        this.damageClothing = opener.Game_Actor.prototype.damageClothing;
      } else {
        this.damageClothing = opener.KarrynActorHelper.damageClothing;
      }

      opener.Game_Actor.prototype.damageClothing = function (
        damage,
        selfDamage
      ) {
        if (this.isNoClothingDamage && this.isNoClothingDamage()) {
          return 0;
        }

        return opener.KarrynActorHelper.Game_Actor_damageClothing.call(
          this,
          damage,
          selfDamage
        );
      };
    } catch (error) {
      console.error(error);
    }
  }

  static unregisterClothingDamageCheatFunctions() {
    try {
      if (opener.KarrynActorHelper.Game_Actor_damageClothing) {
        opener.Game_Actor.prototype.damageClothing =
          opener.KarrynActorHelper.Game_Actor_damageClothing;

        delete opener.KarrynActorHelper.Game_Actor_damageClothing;
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export class KarrynActor extends CheatActor {
  constructor(actor) {
    super(actor);
  }

  get actor() {
    this._actor = opener.$gameActors.actor(ACTOR_KARRYN_ID);
    KarrynActor.registerCheatFunctions(this._actor);
    return this._actor;
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
}
