import { CheatGameMaster } from "../CheatGameMaster";

export class KarrynGameMaster extends CheatGameMaster {
  constructor() {
    super();
  }

  //#region Cheat Toggles
  get isInvincible() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isInvincible && prototype.isInvincible();
  }

  set isInvincible(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isInvincible = () => true;
    } else {
      prototype.isInvincible = () => false;
    }
  }

  get isNoClothingDamage() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoClothingDamage && prototype.isNoClothingDamage();
  }

  set isNoClothingDamage(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoClothingDamage = () => true;
    } else {
      prototype.isNoClothingDamage = () => false;
    }
  }

  get isNoSkillCostPay() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoSkillCostPay && prototype.isNoSkillCostPay();
  }

  set isNoSkillCostPay(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoSkillCostPay = () => true;
    } else {
      prototype.isNoSkillCostPay = () => false;
    }
  }

  get isNoStaminaCost() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoStaminaCost && prototype.isNoStaminaCost();
  }

  set isNoStaminaCost(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoStaminaCost = () => true;
    } else {
      prototype.isNoStaminaCost = () => false;
    }
  }

  get isNoEnergyCost() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoEnergyCost && prototype.isNoEnergyCost();
  }

  set isNoEnergyCost(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoEnergyCost = () => true;
    } else {
      prototype.isNoEnergyCost = () => false;
    }
  }

  get isNoWillCost() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoWillCost && prototype.isNoWillCost();
  }

  set isNoWillCost(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoWillCost = () => true;
    } else {
      prototype.isNoWillCost = () => false;
    }
  }

  get isNoCooldown() {
    const prototype = opener.Game_Actor.prototype;
    return prototype.isNoCooldown && prototype.isNoCooldown();
  }

  set isNoCooldown(value) {
    const prototype = opener.Game_Actor.prototype;
    if (value) {
      prototype.isNoCooldown = () => true;
    } else {
      prototype.isNoCooldown = () => false;
    }
  }
  //#endregion Cheat Toggles

  //#region Ignore all condition in Prison.cheatMode()
  get isCheatUnlocked() {
    try {
      return (
        opener.$gameParty.isCheatUnlocked && opener.$gameParty.isCheatUnlocked()
      );
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  set isCheatUnlocked(value) {
    try {
      if (value) {
        opener.$gameParty.isCheatUnlocked = () => true;
      } else {
        opener.$gameParty.isCheatUnlocked = () => false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  //#endregion
}
