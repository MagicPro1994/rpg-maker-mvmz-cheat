import { CheatGameMaster } from "../CheatGameMaster";
import { KarrynActor } from "./KarrynActor";
import { KarrynPassive } from "./KarrynPassives";
import { $dataSkills } from "../Constants";
import { ACTOR_KARRYN_ID, SKILLTYPE_PASSIVES_ID } from "./KarrynConstants";

export class KarrynGameMaster extends CheatGameMaster {
  constructor() {
    super();
  }

  get karrynActor() {
    try {
      return new KarrynActor(opener.$gameActors.actor(ACTOR_KARRYN_ID));
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get passives() {
    if (!this._passives) {
      this._passives = this._getPassives();
    }

    return this._passives;
  }

  _getPassives() {
    try {
      return $dataSkills
        .filter(
          (item) =>
            item &&
            item.stypeId === SKILLTYPE_PASSIVES_ID &&
            item.name &&
            item.passiveColor
        )
        .map((item) => new KarrynPassive(item.id));
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
