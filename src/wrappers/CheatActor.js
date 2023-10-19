import { CheatParam, PARAM_TRAIT_NAMES } from "./CheatTraits";

export const PARAM_MAXHP_ID = 0;
export const PARAM_MAXMP_ID = 1;

export class CheatActor {
  constructor(actor) {
    try {
      this._actor = actor;
      this.registerGodModeFunctions();
    } catch (error) {
      console.error(error);
    }
  }

  //#region Game_Actor property wrappers
  get name() {
    return this._actor._name;
  }

  get level() {
    return this._actor._level;
  }

  set level(value) {
    this._actor._level = value;
  }

  get exp() {
    return this._actor.currentExp();
  }

  set exp(value) {
    this._actor.changeExp(value, false);
  }

  get hp() {
    return this._actor._hp;
  }

  set hp(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      this._actor.setHp(value);
    } catch (error) {
      console.error(error);
    }
  }

  get maxHp() {
    return this._actor.mhp;
  }

  set maxHp(value) {
    try {
      if (isNaN(value) || value < 0) {
        console.error(`Cannot set mhp to ${value} - value is NaN or negative`);
        return;
      }

      let delta = value - this._actor.mhp;

      if (delta === 0) return;

      this._actor.addParam(PARAM_MAXHP_ID, value - this._actor.mhp);
    } catch (error) {
      console.error(error);
    }
  }

  get mp() {
    return this._actor.mp;
  }

  set mp(value) {
    try {
      if (isNaN(value) || value < 0) {
        console.error(`Cannot set _mp to ${value} - value is NaN or negative`);
        return;
      }

      this._actor.setMp(value);
    } catch (error) {
      console.error(error);
    }
  }

  get maxMp() {
    return this._actor.mmp;
  }

  set maxMp(value) {
    try {
      if (isNaN(value) || value < 0) {
        console.error(`Cannot set mmp to ${value} - value is NaN or negative`);
        return;
      }

      let delta = value - this._actor.mmp;

      if (delta === 0) return;

      this._actor.addParam(PARAM_MAXMP_ID, value - this._actor.mmp);
    } catch (error) {
      console.error(error);
    }
  }

  get tp() {
    return this._actor.tp;
  }

  set tp(value) {
    this._actor.setTp(value);
  }

  get maxTp() {
    return this._actor.maxTp();
  }

  //#endregion

  //#region extra properties
  get displayName() {
    try {
      if (this._actor instanceof opener.Game_Actor) {
        return `${this._actor._name} [${this._actor._actorId}]`;
      }
      if (this._actor instanceof opener.Game_Enemy) {
        return `${this._actor.name()} [${this._actor.enemyId()}]`;
      }
      return "---";
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  get isGodMode() {
    try {
      return this._actor.isGodMode && this._actor.isGodMode();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isGodMode(value) {
    if (value) {
      this._actor.enableGodMode();
    } else {
      this._actor.disableGodMode();
    }
  }

  get isDead() {
    try {
      return this._actor.isDead();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isDead(value) {
    try {
      if (value) {
        this.die();
      } else {
        this.revive();
      }
    } catch (error) {
      console.error(error);
    }
  }

  get paramPlusList() {
    try {
      return PARAM_TRAIT_NAMES.map(
        (_, index) => new CheatParam(this._actor, index)
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  //#endregion

  //#region Game_Actor method wrappers
  clearStates() {
    try {
      this._actor.clearStates();
    } catch (error) {
      console.error(error);
    }
  }

  die() {
    try {
      this._actor.die();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  revive() {
    try {
      this._actor.revive();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  recoverAll() {
    try {
      this._actor.recoverAll();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  //#endregion

  //#region extra methods
  registerGodModeFunctions() {
    // Only inject god mode methods if the actor is a Game_Actor
    if (this._actor instanceof opener.Game_Actor) {
      // If the actor already has god mode methods, do not inject again
      if (this._actor.enableGodMode) {
        return;
      }

      this._actor.enableGodMode = function () {
        this.isGodMode = () => true;

        this.gainHp_bkup = this.gainHp;
        this.gainHp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.mhp;
          }

          this.gainHp_bkup(value);
        };

        this.setHp_bkup = this.setHp;
        this.setHp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.mhp;
          }

          this.setHp_bkup(value);
        };

        this.gainMp_bkup = this.gainMp;
        this.gainMp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.mmp;
          }

          this.gainMp_bkup(value);
        };

        this.setMp_bkup = this.setMp;
        this.setMp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.mmp;
          }

          this.setMp_bkup(value);
        };

        this.gainTp_bkup = this.gainTp;
        this.gainTp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.maxTp();
          }

          this.gainTp_bkup(value);
        };

        this.setTp_bkup = this.setTp;
        this.setTp = function (value) {
          if (this.isGodMode && this.isGodMode()) {
            value = this.maxTp();
          }

          this.setTp_bkup(value);
        };

        this.paySkillCost_bkup = this.paySkillCost;
        this.paySkillCost = function (skill) {
          if (this.isGodMode && this.isGodMode()) {
            return;
          }

          this.paySkillCost_bkup(skill);
        };

        this.godModeInterval = setInterval(() => {
          if (this.isGodMode && this.isGodMode()) {
            this.setHp(this.mhp);
            this.setMp(this.mmp);
            this.setTp(this.maxTp());
          }
        }, 1000);
      };

      this._actor.disableGodMode = function () {
        this.gainHp = this.gainHp_bkup;
        this.setHp = this.setHp_bkup;
        this.gainMp = this.gainMp_bkup;
        this.setMp = this.setMp_bkup;
        this.gainTp = this.gainTp_bkup;
        this.setTp = this.setTp_bkup;
        this.paySkillCost = this.paySkillCost_bkup;

        if (this.godModeInterval) {
          clearInterval(this.godModeInterval);
        }

        delete this.isGodMode;
        delete this.gainHp_bkup;
        delete this.setHp_bkup;
        delete this.gainMp_bkup;
        delete this.setMp_bkup;
        delete this.gainTp_bkup;
        delete this.setTp_bkup;
        delete this.paySkillCost_bkup;
        delete this.godModeInterval;
      };
    }
  }
  //#endregion
}
