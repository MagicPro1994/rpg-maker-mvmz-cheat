import { ACTOR_KARRYN_ID } from "./KarrynConstants";

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

export class KarrynUtils {
  static get Karryn() {
    if (!opener.Karryn) {
      throw new Error("Karryn is not defined");
    }
    return opener.Karryn;
  }

  static get Prison() {
    if (!opener.Prison) {
      throw new Error("Prison is not defined");
    }
    return opener.Prison;
  }

  static get karryn() {
    try {
      return opener.$gameActors.actor(ACTOR_KARRYN_ID);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static init() {
    if (!opener.KarrynCheat) {
      opener.KarrynCheat = KarrynUtils;
    }

    try {
      KarrynUtils.Game_Party_cheatMode = opener.Game_Party.prototype.cheatMode;
      opener.Game_Party.prototype.cheatMode = function () {
        // Inject the variable to the game party to bypass the cheat mode check.
        if (this.isCheatUnlocked && this.isCheatUnlocked()) return true;

        return KarrynUtils.Game_Party_cheatMode.call(this);
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
}
