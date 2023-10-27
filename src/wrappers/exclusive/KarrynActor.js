import { $gameActors } from "../Constants";
import { CheatActor } from "../CheatActor";
import { ACTOR_KARRYN_ID } from "./KarrynConstants";
import { KarrynTrait, KARRYN_TRAIT_TYPE } from "./KarrynTraits";
import { KarrynPassive, KarrynPassiveCategory } from "./KarrynPassives";

const Yanfly = opener.Yanfly;

export class KarrynActor extends CheatActor {
  constructor(actor) {
    super(actor);

    try {
      this.registerInvincibleFunctions();
      this.registerClothingDamageCheatFunctions();
      this.registerStaminaCostCheatFunctions();
      this.registerEnergyCostCheatFunctions();
      this.registerWillpowerCheatFunctions();
      this.registerCooldownCheatFunctions();
      this.registerPaySkillCostCheatFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  get will() {
    try {
      return this._actor._will;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set will(value) {
    try {
      this._actor.setWill(value);
    } catch (error) {
      console.error(error);
    }
  }

  get maxWill() {
    try {
      return this._actor.maxWill();
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  get fatigue() {
    try {
      return this._actor.fatigue;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set fatigue(value) {
    try {
      this._actor.setFatigue(value);
    } catch (error) {
      console.error(error);
    }
  }

  get slutLevel() {
    try {
      return this._actor.slutLvl;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set slutLevel(value) {
    try {
      this._actor.setSlutLvl(value);
    } catch (error) {
      console.error(error);
    }
  }

  get critDamage() {
    try {
      let value = 1;
      let user = this._actor;
      // eslint-disable-next-line no-unused-vars
      let bonus = user.criticalMultiplierBonus();
      // eslint-disable-next-line no-unused-vars
      let target = false;
      eval(Yanfly.Param.critMult);

      return (value * 100).toFixed(0) + "%";
    } catch (error) {
      console.error(error);
      return (100).toFixed(0) + "%";
    }
  }

  get passiveCategories() {
    try {
      if (!this._passiveCategories) {
        this._passiveCategories = this._actor._passiveCategory.map(
          (_, index) => new KarrynPassiveCategory(index)
        );
      }

      return this._passiveCategories;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  hasPassive(passive) {
    try {
      if (passive instanceof KarrynPassive) {
        return this._actor.hasPassive(passive.id);
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getPassiveDayObtained(passive) {
    try {
      if (passive instanceof KarrynPassive) {
        return this._actor._passivesObtainedOn_keySkillID_valueDate[passive.id];
      }

      if (typeof passive === "number") {
        return this._actor._passivesObtainedOn_keySkillID_valueDate[passive];
      }

      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  //#region Sex Levels
  get kissLvl() {
    return this._actor.kissLvl();
  }

  get pettingLvl() {
    return this._actor.pettingLvl();
  }

  get handjobLvl() {
    return this._actor.handjobLvl();
  }

  get blowjobLvl() {
    return this._actor.blowjobLvl();
  }

  get tittyFuckLvl() {
    return this._actor.tittyFuckLvl();
  }

  get footjobLvl() {
    return this._actor.footjobLvl();
  }

  get rimjobLvl() {
    return this._actor.rimjobLvl();
  }

  get pussySexLvl() {
    return this._actor.pussySexLvl();
  }

  get analSexLvl() {
    return this._actor.analSexLvl();
  }

  get masturbateLvl() {
    return this._actor.masturbateLvl();
  }

  get sadismLvl() {
    return this._actor.sadismLvl();
  }

  get masochismLvl() {
    return this._actor.masochismLvl();
  }

  //#endregion Sex Levels

  //#region Stats / Attributes
  get stats() {
    try {
      return KarrynTrait.getAll(this._actor, KARRYN_TRAIT_TYPE.PARAM);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get primaryAttributes() {
    try {
      return KarrynTrait.getAll(this._actor, KARRYN_TRAIT_TYPE.XPARAM);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get secondaryAttributes() {
    try {
      return KarrynTrait.getAll(this._actor, KARRYN_TRAIT_TYPE.SPARAM);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get resistAttributes() {
    try {
      return KarrynTrait.getAll(this._actor, KARRYN_TRAIT_TYPE.ELEMENT);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  //#endregion Stats / Attributes

  //#region Cheat Functions
  get isInvincible() {
    try {
      return this._actor.isInvincible && this._actor.isInvincible();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isInvincible(value) {
    if (value) {
      this._actor.enableInvincible();
    } else {
      this._actor.disableInvincible();
    }
  }

  get isNoPaySkillCost() {
    try {
      return this._actor.isNoPaySkillCost && this._actor.isNoPaySkillCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoPaySkillCost(value) {
    if (value) {
      this._actor.enableNoSkillCost();
    } else {
      this._actor.disableNoNoSkillCost();
    }
  }

  get isNoStaminaCost() {
    try {
      return this._actor.isNoStaminaCost && this._actor.isNoStaminaCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoStaminaCost(value) {
    if (value) {
      this._actor.enableNoStaminaCost();
    } else {
      this._actor.disableNoStaminaCost();
    }
  }

  get isNoEnergyCost() {
    try {
      return this._actor.isNoEnergyCost && this._actor.isNoEnergyCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoEnergyCost(value) {
    if (value) {
      this._actor.enableNoEnergyCost();
    } else {
      this._actor.disableNoEnergyCost();
    }
  }

  get isNoWillCost() {
    try {
      return this._actor.isNoWillCost && this._actor.isNoWillCost();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoWillCost(value) {
    if (value) {
      this._actor.enableNoWillCost();
    } else {
      this._actor.disableNoWillCost();
    }
  }

  get isNoClothingDamage() {
    try {
      return this._actor.isNoClothingDamage && this._actor.isNoClothingDamage();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoClothingDamage(value) {
    if (value) {
      this._actor.enableNoClothingDamage();
    } else {
      this._actor.disableNoClothingDamage();
    }
  }

  get isNoCooldown() {
    try {
      return this._actor.isNoCooldown && this._actor.isNoCooldown();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isNoCooldown(value) {
    if (value) {
      this._actor.enableNoCooldown();
    } else {
      this._actor.disableNoCooldown();
    }
  }

  registerInvincibleFunctions() {
    if (this._actor.enableInvincible) {
      return;
    }

    this._actor.enableInvincible = function () {
      this.isInvincible = () => true;
    };

    this._actor.disableInvincible = function () {
      if (this.isInvincible) {
        delete this.isInvincible;
      }
    };
  }

  registerPaySkillCostCheatFunctions() {
    if (this._actor.enableNoPaySkillCost) {
      return;
    }

    this._actor.enableNoPaySkillCost = function () {
      this.isNoPaySkillCost = () => true;

      this.paySkillCost_bk = this.paySkillCost;
      this.paySkillCost = function (skill) {
        if (this.isNoPaySkillCost()) {
          return;
        }

        this.paySkillCost_bk(skill);
      };
    };

    this._actor.disableNoPaySkillCost = function () {
      if (this.isNoPaySkillCost) {
        this.paySkillCost = this.paySkillCost_bk;
        delete this.isNoPaySkillCost;
        delete this.paySkillCost_bk;
      }
    };
  }

  registerStaminaCostCheatFunctions() {
    if (this._actor.enableNoStaminaCost) {
      return;
    }

    this._actor.enableNoStaminaCost = function () {
      this.isNoStaminaCost = () => true;

      this.skillHpCost_bk = this.skillHpCost;
      this.skillHpCost = function (skill) {
        if (this.isNoStaminaCost()) {
          return 0;
        }

        return this.skillHpCost_bk(skill);
      };
    };

    this._actor.disableNoStaminaCost = function () {
      if (this.isNoStaminaCost) {
        this.skillHpCost = this.skillHpCost_bk;
        delete this.isNoStaminaCost;
        delete this.skillHpCost_bk;
      }
    };
  }

  registerEnergyCostCheatFunctions() {
    if (this._actor.enableNoEnergyCost) {
      return;
    }

    this._actor.enableNoEnergyCost = function () {
      this.isNoEnergyCost = () => true;

      this.skillMpCost_bk = this.skillMpCost;
      this.skillMpCost = function (skill) {
        if (this.isNoEnergyCost()) {
          return 0;
        }

        return this.skillMpCost_bk(skill);
      };
    };

    this._actor.disableNoEnergyCost = function () {
      if (this.isNoEnergyCost) {
        this.skillMpCost = this.skillMpCost_bk;
        delete this.isNoEnergyCost;
        delete this.skillMpCost_bk;
      }
    };
  }

  registerWillpowerCheatFunctions() {
    if (this._actor.enableNoWillCost) {
      return;
    }

    this._actor.enableNoWillCost = function () {
      this.isNoWillCost = () => true;

      this.calculateWillSkillCost_bk = this.calculateWillSkillCost;
      this.calculateWillSkillCost = function (baseCost, skill) {
        if (this.isNoWillCost()) {
          return 0;
        }

        return this.calculateWillSkillCost_bk(baseCost, skill);
      };
    };

    this._actor.disableNoWillCost = function () {
      if (this.isNoWillCost) {
        this.calculateWillSkillCost = this.calculateWillSkillCost_bk;
        delete this.isNoWillCost;
        delete this.calculateWillSkillCost_bk;
      }
    };
  }

  registerClothingDamageCheatFunctions() {
    if (this._actor.enableNoClothingDamage) {
      return;
    }

    this._actor.enableNoClothingDamage = function () {
      this.isNoClothingDamage = () => true;

      this.damageClothing_bk = this.damageClothing;
      this.damageClothing = function (damage, selfDamage) {
        if (this.isNoClothingDamage()) {
          return 0;
        }

        return this.damageClothing_bk(damage, selfDamage);
      };
    };

    this._actor.disableNoClothingDamage = function () {
      if (this.isNoClothingDamage) {
        this.damageClothing = this.damageClothing_bk;
        delete this.isNoClothingDamage;
        delete this.damageClothing_bk;
      }
    };
  }

  registerCooldownCheatFunctions() {
    if (this._actor.enableNoCooldown) {
      return;
    }

    this._actor.enableNoCooldown = function () {
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

    this._actor.disableNoCooldown = function () {
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
      return new KarrynActor($gameActors.actor(ACTOR_KARRYN_ID));
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
