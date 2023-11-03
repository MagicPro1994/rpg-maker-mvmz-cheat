import { CheatHelper } from "../CheatHelper";

const DEFAULT_CONVERT_OPTIONS = {
  extraEscape: true,
  colorCodeEscape: false,
  append: "",
  newLineEscape: false,
  iconCodeEscape: false,
  iconClass: "",
  size: 24,
  unknownCodeEscape: false,
};

export const MESSAGES = {
  FEATURE_NOT_AVAILABLE:
    "Start a new game or load any game to use this feature.",
};

export const APP_VERSION = "v0.0.1"

export class KarrynUtils {
  static init() {
    if (!opener.KarrynUtils) {
      opener.KarrynUtils = KarrynUtils;
    }

    this.setupGameIcons();
    this.registerCheatFunctions();
  }

  static get isTitleScene() {
    try {
      return opener.SceneManager._scene.constructor === opener.Scene_Title;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  static get isInBattle() {
    try {
      return opener.$gameParty.inBattle();
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static get isInMap() {
    try {
      return opener.SceneManager._scene.constructor === opener.Scene_Map;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static get isInPrison() {
    try {
      if (!opener.DataManager.isMapLoaded()) {
        return false;
      }

      if (opener.SceneManager._scene.constructor === opener.Scene_Load) {
        return false;
      }

      if (opener.SceneManager._scene.constructor === opener.Scene_Save) {
        return false;
      }

      if (opener.SceneManager._scene.constructor === opener.Scene_Title) {
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static registerCheatFunctions() {
    try {
      const self = opener.KarrynUtils;
      const Game_Party = opener.Game_Party;

      if (!self.Game_Party_cheatMode) {
        self.Game_Party_cheatMode = Game_Party.prototype.cheatMode;
      }

      Game_Party.prototype.cheatMode = function () {
        // Inject the variable to the game party to bypass the cheat mode check.
        if (this.isCheatUnlocked && this.isCheatUnlocked()) return true;

        return self.Game_Party_cheatMode.call(this);
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

  static getColorMap() {
    try {
      if (!this._colorMap) {
        this._colorMap = {};
        for (let i = 0; i < 32; i++) {
          this._colorMap[`c${i}`] = this.getTextColor(i);
        }
      }

      return this._colorMap;
    } catch (error) {
      console.error(error);
      return {};
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
        // const colorHex = this.getTextColor(colorIndex);
        const replaceContent = `<span class="text-c${colorIndex}">${match[2]}</span>${append}`;
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

  static setupGameIcons() {
    try {
      if (!CheatHelper.isCssVariableDefined("rpg-icon-set")) {
        const bitmap = opener.ImageManager.loadSystem("IconSet");
        const bw = bitmap._canvas.width;
        const bh = bitmap._canvas.height;
        const iconSet = bitmap._canvas.toDataURL();
        const baseIconWidth = opener.Window_Base._iconWidth;
        const baseIconHeight = opener.Window_Base._iconHeight;
        let iconCss = "";

        for (let i = 0; i < 720; i++) {
          iconCss += this.generateIconCss(i, bw, bh, 16);
          iconCss += this.generateIconCss(i, bw, bh, 20);
          iconCss += this.generateIconCss(i, bw, bh, 24);
          iconCss += this.generateIconCss(i, bw, bh, 32);
        }

        CheatHelper.addStyle(`
        :root {
          --rpg-icon-set: url('${iconSet}');
          --rpg-icon-set-width: ${bw}
          --rpg-icon-set-height: ${bh}
          --rpg-icon-set-icon-width: ${baseIconWidth}
          --rpg-icon-set-icon-height: ${baseIconHeight}
        }
        ${iconCss}
        `);
      }
    } catch (error) {
      console.error(error);
    }
  }

  static generateIconCss(iconIndex, imageWidth, imageHeight, size = 32) {
    try {
      const scale = size / opener.Window_Base._iconWidth;
      const iw = imageWidth * scale;
      const ih = imageHeight * scale;
      const pw = opener.Window_Base._iconWidth * scale;
      const ph = opener.Window_Base._iconHeight * scale;
      const sx = (iconIndex % 16) * pw; // Each row has 16 icons
      const sy = Math.floor(iconIndex / 16) * ph; // Need to round down to get the row
      let selector = `.rpg-icon-x${size}-i${iconIndex}`;
      if (size === 32) {
        selector = `.rpg-icon-i${iconIndex}, ` + selector;
      }

      return `
      ${selector} {
        background-position: -${sx}px -${sy}px;
        background-size: ${iw}px ${ih}px;
        width: ${size}px;
        height: ${size}px;
      }`.replace(/\n/g, "");
    } catch (error) {
      console.error(error);
      return "";
    }
  }

  static convertIconCodesToHtml(text, size = 24, iconClass = "") {
    try {
      // eslint-disable-next-line no-control-regex
      const iconRegex = /\x1bI\[(\d+)\]/g;
      const classText = iconClass ? ` ${iconClass}` : "";
      const subsitution = `<i class="rpg-icon rpg-icon-x${size}-i$1${classText}"></i>`;
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

  static convertEscapeCharacters(rawText, options = DEFAULT_CONVERT_OPTIONS) {
    try {
      let result = rawText;
      let extraEscape = options.extraEscape;
      let colorCodeEscape = options.colorCodeEscape;
      let append = options.append;
      let newLineEscape = options.newLineEscape;
      let iconCodeEscape = options.iconCodeEscape;
      let iconClass = options.iconClass;
      let size = options.size;
      let unknownCodeEscape = options.unknownCodeEscape;

      if (options.extraEscape === undefined) {
        extraEscape = DEFAULT_CONVERT_OPTIONS.extraEscape;
      }

      if (options.colorCodeEscape === undefined) {
        colorCodeEscape = DEFAULT_CONVERT_OPTIONS.colorCodeEscape;
      }

      if (options.append === undefined) {
        append = DEFAULT_CONVERT_OPTIONS.append;
      }

      if (options.newLineEscape === undefined) {
        newLineEscape = DEFAULT_CONVERT_OPTIONS.newLineEscape;
      }

      if (options.iconCodeEscape === undefined) {
        iconCodeEscape = DEFAULT_CONVERT_OPTIONS.iconCodeEscape;
      }

      if (options.iconClass === undefined) {
        iconClass = DEFAULT_CONVERT_OPTIONS.iconClass;
      }

      if (options.size === undefined) {
        size = DEFAULT_CONVERT_OPTIONS.size;
      }

      if (options.unknownCodeEscape === undefined) {
        unknownCodeEscape = DEFAULT_CONVERT_OPTIONS.unknownCodeEscape;
      }

      result = opener.Window_Base.prototype.convertEscapeCharacters(result);

      if (extraEscape) {
        result =
          opener.Window_Base.prototype.convertExtraEscapeCharacters(result);
        // eslint-disable-next-line no-control-regex
        result = result.replace(/\x1b{|}/gi, "");
      }

      if (newLineEscape) {
        result = this.convertNewLineToHtml(result);
      }

      if (colorCodeEscape) {
        result = this.convertColorCodesToHtml(result, append);
      }

      if (iconCodeEscape) {
        result = this.convertIconCodesToHtml(result, size, iconClass);
      }

      if (unknownCodeEscape) {
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

  static search(item, searchInItem, properties = ["name"]) {
    try {
      if (!searchInItem) return true;

      if (typeof searchInItem === "string") {
        const normalizedSearch = searchInItem.toLowerCase();
        for (let i = 0; i < properties.length; i++) {
          const property = properties[i];

          if (typeof item[property] === "string") {
            // If the property is a string, we can do a simple search
            if (item[property].toLowerCase().includes(normalizedSearch)) {
              return true;
            }
          }

          if (typeof item[property] === "number") {
            // If the property is a number, parse the search string to a number and compare.
            const searchNumber = parseInt(normalizedSearch);
            if (item[property] == searchNumber) {
              return true;
            }
          }

          if (Array.isArray(item[property])) {
            // If the property is an array, we need to search the array.
            for (let j = 0; j < item[property].length; j++) {
              const element = item[property][j];
              if (typeof element === "string") {
                if (element.toLowerCase().includes(normalizedSearch)) {
                  return true;
                }
              }

              if (typeof element === "number") {
                const searchNumber = parseInt(normalizedSearch);
                if (element == searchNumber) {
                  return true;
                }
              }
            }
          }
        }
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
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

  static clearSingleWave() {
    try {
      if (!this.isInBattle) return;

      let enemies = opener.$gameTroop.members();

      enemies.forEach((enemy) => {
        opener.Game_Interpreter.prototype.changeHp(
          enemy,
          Math.round(-enemy.mhp),
          true
        );
      });

      opener.BattleManager.processVictory();
    } catch (error) {
      console.error(error);
    }
  }

  static winAllWaves() {
    try {
      if (!opener.$gameSystem._consBat) {
        return;
      }

      const battleSystem = opener.$gameSystem._consBat;
      let enemies = opener.$gameTroop.members();
      let waveIndex = battleSystem.index;
      while (this.isInBattle && waveIndex < battleSystem.battles.length) {
        enemies.forEach((enemy) => {
          opener.Game_Interpreter.prototype.changeHp(
            enemy,
            Math.round(-enemy.mhp),
            true
          );
        });

        waveIndex++;
      }
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
      if (!opener.Karryn.hasThisTitle(itemId)) {
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
