const DEFAULT_CONVERT_OPTIONS = {
  extraEscape: true,
  colorCodeEscape: false,
  append: "",
  newLineEscape: false,
  iconCodeEscape: false,
  iconClass: "",
  width: 16,
  height: 16,
  unknownCodeEscape: false,
};

export const MESSAGES = {
  FEATURE_NOT_AVAILABLE:
    "Start a new game or load any game to use this feature.",
};
export class KarrynUtils {
  static get isInPrison() {
    try {
      return opener.DataManager.isMapLoaded() && !this.isTitleScene;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static get isTitleScene() {
    try {
      return opener.SceneManager._scene.constructor === opener.Scene_Title;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static init() {
    if (!opener.KarrynUtils) {
      opener.KarrynUtils = KarrynUtils;
    }

    try {
      if (!opener.KarrynUtils.Game_Party_cheatMode) {
        KarrynUtils.Game_Party_cheatMode =
          opener.Game_Party.prototype.cheatMode;
      } else {
        KarrynUtils.Game_Party_cheatMode =
          opener.KarrynUtils.Game_Party_cheatMode;
      }

      Object.defineProperty(opener.Game_Party.prototype, "flagCheatUnlocked", {
        get: function () {
          return this.isCheatUnlocked && this.isCheatUnlocked();
        },
        set: function (value) {
          if (value) {
            this.isCheatUnlocked = () => true;
          } else {
            this.isCheatUnlocked = () => false;
          }
        },
        configurable: true,
      });

      opener.Game_Party.prototype.cheatMode = function () {
        // Inject the variable to the game party to bypass the cheat mode check.
        if (this.isCheatUnlocked && this.isCheatUnlocked()) return true;

        return opener.KarrynUtils.Game_Party_cheatMode.call(this);
      };
    } catch (error) {
      console.error(error);
    }
  }

  static getTextColor(colorIndex) {
    try {
      // We need to use a dummy window to get the text color from the game
      if (!this._dummyWindow) this._dummyWindow = new opener.Window_Base();

      return this._dummyWindow.textColor(colorIndex);
    } catch (error) {
      console.error(error);
      return "#000000";
    }
  }

  static convertColorCodesToHtml(text, append = "") {
    try {
      // eslint-disable-next-line no-control-regex
      const colorRegex = /\x1bC\[(\d+)\]\s*(.*?)\s*(?=\x1bC\[\d+\]|$)/g;
      let match = colorRegex.exec(text);
      let lastIndex = 0;
      let result = "";

      while (match !== null) {
        const colorIndex = parseInt(match[1]);
        const colorHex = this.getTextColor(colorIndex);
        const replaceContent = `<span style="color: ${colorHex}">${match[2]}</span>${append}`;
        const startIndex = match.index;
        const endIndex = startIndex + match[0].length;
        result += text.substring(lastIndex, startIndex);
        result += replaceContent;
        lastIndex = endIndex;

        match = colorRegex.exec(text);
      }

      result += text.substring(lastIndex, text.length);
      return result;
    } catch (error) {
      console.error(error);
      return text;
    }
  }

  static convertIconCodesToHtml(text, width = 16, height = 16, iconClass = "") {
    try {
      // eslint-disable-next-line no-control-regex
      const iconRegex = /\x1bI\[(\d+)\]/g;
      const classText = iconClass ? `class="${iconClass}"` : "";
      const subsitution = `<canvas ${classText} icon-index="$1" width="${width}" height="${height}"></canvas>`;
      const result = text.replace(iconRegex, subsitution);
      return result;
    } catch (error) {
      console.error(error);
      return text;
    }
  }

  static convertNewLineToHtml(text) {
    try {
      return text.replace(/\n/g, "<br>");
    } catch (error) {
      console.error(error);
      return text;
    }
  }

  static search(item, searchInItem) {
    try {
      if (!searchInItem) return true;

      if (typeof searchInItem === "string") {
        return item.name.toLowerCase().includes(searchInItem.toLowerCase());
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static convertEscapeCharacters(rawText, options = DEFAULT_CONVERT_OPTIONS) {
    try {
      let result = rawText;
      result = opener.Window_Base.prototype.convertEscapeCharacters(result);

      if (options.extraEscape) {
        result =
          opener.Window_Base.prototype.convertExtraEscapeCharacters(result);
        // eslint-disable-next-line no-control-regex
        result = result.replace(/\x1b{|}/gi, "");
      }

      if (options.newLineEscape) {
        result = this.convertNewLineToHtml(result);
      }

      if (options.colorCodeEscape) {
        result = this.convertColorCodesToHtml(result, options.append);
      }

      if (options.iconCodeEscape) {
        result = this.convertIconCodesToHtml(
          result,
          options.width,
          options.height,
          options.iconClass
        );
      }

      if (options.unknownCodeEscape) {
        // eslint-disable-next-line no-control-regex
        result = result.replace(/\x1b[{|}]?/gi, "");
      }

      return result;
    } catch (e) {
      console.error(e);
      return rawText;
    }
  }

  static getRemName(item) {
    try {
      let itemName = "";
      if (item.hasRemNameDefault) itemName = item.remNameDefault;

      if (opener.TextManager.isEnglish) {
        if (item.hasRemNameEN) itemName = item.remNameEN;
      } else if (opener.TextManager.isJapanese) {
        if (item.hasRemNameJP) itemName = item.remNameJP;
      } else if (opener.TextManager.isSChinese) {
        if (item.hasRemNameSCH) itemName = item.remNameSCH;
      } else if (opener.TextManager.isTChinese) {
        if (item.hasRemNameTCH) itemName = item.remNameTCH;
      } else if (opener.TextManager.isKorean) {
        if (item.hasRemNameKR) itemName = item.remNameKR;
      } else if (opener.TextManager.isRussian) {
        if (item.hasRemNameRU) itemName = item.remNameRU;
      }

      return itemName;
    } catch (error) {
      console.error(error);
      return `NAME [${item.id}]`;
    }
  }

  static getRemDescription(item) {
    try {
      let desc = item.description;
      if (item.hasRemDescDefault) desc = item.remDescDefault;

      if (opener.TextManager.isEnglish) {
        if (item.hasRemDescEN) desc = item.remDescEN;
      } else if (opener.TextManager.isJapanese) {
        if (item.hasRemDescJP) desc = item.remDescJP;
      } else if (opener.TextManager.isSChinese) {
        if (item.hasRemDescSCH) desc = item.remDescSCH;
      } else if (opener.TextManager.isTChinese) {
        if (item.hasRemDescTCH) desc = item.remDescTCH;
      } else if (opener.TextManager.isKorean) {
        if (item.hasRemDescKR) desc = item.remDescKR;
      } else if (opener.TextManager.isRussian) {
        if (item.hasRemDescRU) desc = item.remDescRU;
      }

      return desc;
    } catch (error) {
      console.error(error);
      return `DESC [${item.id}]`;
    }
  }

  static drawIcon(ctx, iconIndex, x, y, width, height) {
    try {
      const bitmap = opener.ImageManager.loadSystem("IconSet");
      const pw = opener.Window_Base._iconWidth;
      const ph = opener.Window_Base._iconHeight;
      const sx = (iconIndex % 16) * pw;
      const sy = Math.floor(iconIndex / 16) * ph;
      ctx.drawImage(bitmap._canvas, sx, sy, pw, ph, x, y, width, height);
    } catch (error) {
      console.error(error);
    }
  }

  static renderIcons(selector = "canvas[icon-index]", x = 0, y = 0) {
    try {
      if (!selector) return;

      let canvasList = document.querySelectorAll(selector);
      for (let i = 0; i < canvasList.length; i++) {
        let element = canvasList[i];
        let iconIndex = parseInt(element.getAttribute("icon-index"));
        let width = parseInt(element.getAttribute("width"));
        let height = parseInt(element.getAttribute("height"));

        let context = element.getContext("2d");

        KarrynUtils.drawIcon(context, iconIndex, x, y, width, height);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //#region Game Helper Functions
  static goToTitle() {
    opener.SceneManager.goto(opener.Scene_Title);
  }

  static goToSaveScene() {
    if (opener.SceneManager._scene.constructor === opener.Scene_Save) {
      opener.SceneManager.pop();
    } else if (opener.SceneManager._scene.constructor === opener.Scene_Load) {
      opener.SceneManager.goto(opener.Scene_Save);
    } else {
      opener.SceneManager.push(opener.Scene_Save);
    }
  }

  static goToLoadScene() {
    if (opener.SceneManager._scene.constructor === opener.Scene_Load) {
      opener.SceneManager.pop();
    } else if (opener.SceneManager._scene.constructor === opener.Scene_Save) {
      opener.SceneManager.goto(opener.Scene_Load);
    } else {
      opener.SceneManager.push(opener.Scene_Load);
    }
  }

  static winBattle() {
    try {
      let enemies = opener.$gameTroop.members();
      enemies.forEach((enemy) => {
        opener.Game_Interpreter.changeHp(enemy, Math.round(-enemy.mhp), true);
      });
      opener.BattleManager.processVictory();
    } catch (error) {
      console.error(error);
    }
  }

  static loseBattle() {
    try {
      opener.BattleManager.processDefeat();
    } catch (error) {
      console.error(error);
    }
  }

  static abortBattle() {
    try {
      opener.BattleManager.abort();
    } catch (error) {
      console.error(error);
    }
  }

  static escapeBattle() {
    try {
      opener.BattleManager.processEscape();
    } catch (error) {
      console.error(error);
    }
  }

  static gainTitle(itemId) {
    try {
      if (!this.Karryn.hasThisTitle(itemId)) {
        opener.$gameParty.gainTitle(itemId);
      }
    } catch (error) {
      console.error(error);
    }
  }

  static removeTitle(id) {
    try {
      opener.$gameParty.removeTitle(id);
    } catch (error) {
      console.error(error);
    }
  }
  //#endregion Game Helper Functions
}
