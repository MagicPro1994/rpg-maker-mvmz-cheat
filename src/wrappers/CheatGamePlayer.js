import { CheatActor } from "./CheatActor";
import { CheatArmor, CheatItem, CheatWeapon } from "./CheatInventory";

export const FALLBACK_THROUGH = false;
export const FALLBACK_MOVE_SPEED = 4.0;

export class CheatGamePlayer {
  constructor() {}

  get through() {
    try {
      return opener.$gamePlayer._through;
    } catch (error) {
      console.error(error);
      return FALLBACK_THROUGH;
    }
  }

  set through(value) {
    opener.$gamePlayer._through = value;
  }

  get moveSpeed() {
    try {
      return opener.$gamePlayer._moveSpeed;
    } catch (error) {
      console.error(error);
      return FALLBACK_MOVE_SPEED;
    }
  }

  set moveSpeed(value) {
    opener.$gamePlayer._moveSpeed = value;
  }

  get gold() {
    try {
      return opener.$gameParty._gold;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set gold(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - opener.$gameParty._gold;

      if (delta === 0) return;

      opener.$gameParty.gainGold(delta);
    } catch (error) {
      console.error(error);
    }
  }

  get partyMembers() {
    try {
      return opener.$gameParty
        .allMembers()
        .map((member) => new CheatActor(member));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get partyBattleMembers() {
    try {
      return opener.$gameParty
        .battleMembers()
        .map((member) => new CheatActor(member));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get enemyMembers() {
    try {
      return opener.$gameTroop
        .members()
        .map((member) => new CheatActor(member));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get items() {
    try {
      let items = opener.$dataItems.filter((item) => item !== null);
      return items.map((item) => new CheatItem(item));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get weapons() {
    try {
      let weapons = opener.$dataWeapons.filter((weapon) => weapon !== null);
      return weapons.map((weapon) => new CheatWeapon(weapon));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  get armors() {
    try {
      let armors = opener.$dataArmors.filter((armor) => armor !== null);
      return armors.map((armor) => new CheatArmor(armor));
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  teleport(map_id, x_pos, y_pos) {
    try {
      opener.$gamePlayer.reserveTransfer(
        map_id,
        x_pos,
        y_pos,
        opener.$gamePlayer.direction(),
        0
      );
      opener.$gamePlayer.setPosition(x_pos, y_pos);
    } catch (error) {
      console.error(error);
    }
  }

  goToTitle() {
    opener.SceneManager.goto(opener.Scene_Title);
  }

  goToSaveScene() {
    if (opener.SceneManager._scene.constructor === opener.Scene_Save) {
      opener.SceneManager.pop();
    } else if (opener.SceneManager._scene.constructor === opener.Scene_Load) {
      opener.SceneManager.goto(opener.Scene_Save);
    } else {
      opener.SceneManager.push(opener.Scene_Save);
    }
  }

  goToLoadScene() {
    if (opener.SceneManager._scene.constructor === opener.Scene_Load) {
      opener.SceneManager.pop();
    } else if (opener.SceneManager._scene.constructor === opener.Scene_Save) {
      opener.SceneManager.goto(opener.Scene_Load);
    } else {
      opener.SceneManager.push(opener.Scene_Load);
    }
  }
}
