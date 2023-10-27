import { CheatGameMaster } from "../CheatGameMaster";
import { $dataArmors } from "../Constants";
import { EQUIP_TYPE_TITLE_ID } from "./KarrynConstants";

export class KarrynGameMaster extends CheatGameMaster {
  constructor() {
    super();
  }

  get titles() {
    try {
      return $dataArmors.filter(
        (armor) => armor && armor.name && armor.etypeId === EQUIP_TYPE_TITLE_ID
      );
    } catch (error) {
      console.error(error);
      return [];
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
