import { CheatActor } from "./CheatActor";
import { CheatArmor, CheatItem, CheatWeapon } from "./CheatInventory";

export const BP_FLAGS = {
  HP: 1,
  MP: 2,
  TP: 4,
};

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
        throw new Error(
          `Cannot set _gold to ${value} - value is NaN or negative`
        );
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
      if (!opener.$gameParty.exists()) {
        throw new Error(
          "Cannot get allMembers from $gameParty - no party members"
        );
      }

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

  //#region In Battle
  // BP = HP | MP | TP
  setBp(actor, bpFlag, value) {
    try {
      if (bpFlag & BP_FLAGS.HP) {
        if (value === undefined || value === null) {
          actor.setHp(actor.mhp);
        } else {
          actor.setHp(value);
        }
      }

      if (bpFlag & BP_FLAGS.MP) {
        if (value === undefined || value === null) {
          actor.setMp(actor.mmp);
        } else {
          actor.setMp(value);
        }
      }

      if (bpFlag & BP_FLAGS.TP) {
        if (value === undefined || value === null) {
          actor.setTp(actor.maxTp());
        } else {
          actor.setTp(value);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  kill(actor) {
    return CheatActor.kill(actor);
  }

  setPartyBp(bpFlag, value, excludeDead = false) {
    try {
      if (!opener.$gameParty.exists()) {
        throw new Error(
          "Cannot setPartyActionPoint on $gameParty - no party members"
        );
      }

      opener.$gameParty.members().forEach((member) => {
        if (excludeDead && member.isDead()) return;

        this.setBp(member, bpFlag, value);
      });
    } catch (error) {
      console.error(error);
    }
  }

  setEnemyBp(bpFlag, value, excludeDead = false) {
    try {
      opener.$gameTroop.members().forEach((member) => {
        if (excludeDead && member.isDead()) return;

        this.setBp(member, bpFlag, value);
      });
    } catch (error) {
      console.error(error);
    }
  }

  setPartyHp(value, excludeDead = false) {
    this.setPartyBp(BP_FLAGS.HP, value, excludeDead);
  }

  setPartyMp(value, excludeDead = false) {
    this.setPartyBp(BP_FLAGS.MP, value, excludeDead);
  }

  setPartyTp(value, excludeDead = false) {
    this.setPartyBp(BP_FLAGS.TP, value, excludeDead);
  }

  recoverFullPartyHp(excludeDead = false) {
    this.setPartyBp(BP_FLAGS.HP, null, excludeDead);
  }

  recoverFullPartyMp(excludeDead = false) {
    this.setPartyBp(BP_FLAGS.MP, null, excludeDead);
  }

  recoverFullPartyTp(excludeDead = false) {
    this.setPartyBp(BP_FLAGS.TP, null, excludeDead);
  }

  setEnemyHp(value, excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.HP, value, excludeDead);
  }

  setEnemyMp(value, excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.MP, value, excludeDead);
  }

  setEnemyTp(value, excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.TP, value, excludeDead);
  }

  recoverFullEnemyHp(excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.HP, null, excludeDead);
  }

  recoverFullEnemyMp(excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.MP, null, excludeDead);
  }

  recoverFullTroopTp(excludeDead = false) {
    this.setEnemyBp(BP_FLAGS.TP, null, excludeDead);
  }
  //#endregion

  clearPartyStates() {
    try {
      if (!opener.$gameParty.exists()) {
        throw new Error(
          "Cannot clearPartyStates on $gameParty - no party members"
        );
      }

      opener.$gameParty.allMembers().forEach((member) => {
        member.clearStates();
      });
    } catch (error) {
      console.error(error);
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
