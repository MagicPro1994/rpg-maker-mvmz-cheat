export function customCoreMethods() {
  if (opener.Game_Party.prototype.cheatMode_bk === undefined) {
    opener.Game_Party.prototype.cheatMode_bk =
      opener.Game_Party.prototype.cheatMode;
    opener.Game_Party.prototype.cheatMode = function () {
      if (this.isCheatUnlocked && this.isCheatUnlocked()) return true;
      return this.cheatMode_bk();
    };
  }
}
