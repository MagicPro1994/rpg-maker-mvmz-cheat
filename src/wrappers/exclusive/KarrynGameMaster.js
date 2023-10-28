import { CheatGameMaster } from "../CheatGameMaster";
import { EQUIP_TYPE_TITLE_ID } from "./KarrynConstants";
import { KarrynUtils } from "./KarrynUtils";
const Karryn = KarrynUtils.Karryn;

export class KarrynGameMaster extends CheatGameMaster {
  constructor() {
    super();
  }

  get titles() {
    try {
      return opener.$dataArmors.filter(
        (armor) => armor && armor.name && armor.etypeId === EQUIP_TYPE_TITLE_ID
      );
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  gainTitle(id) {
    try {
      if (!Karryn.hasThisTitle(id)) {
        opener.$gameParty.gainTitle(id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  removeTitle(id) {
    try {
      if (Karryn.hasThisTitle(id)) {
        opener.$gameParty.removeTitle(id);
      }
    } catch (error) {
      console.error(error);
    }
  }

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
