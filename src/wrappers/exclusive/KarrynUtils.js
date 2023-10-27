import { Window_Base } from "../Constants";

export const DEFAULT_CONVERT_OPTIONS = {
  colorCodeEscape: false,
  newLineEscape: false,
  append: "",
};

export class KarrynUtils {
  static getTextColor(colorIndex) {
    try {
      // We need to use a dummy window to get the text color from the game
      if (!this._dummyWindow) this._dummyWindow = new Window_Base();

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
        return item.name
          .toLowerCase()
          .includes(searchInItem.toLowerCase().includes());
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static convertEscapeCharacters(rawText, options = DEFAULT_CONVERT_OPTIONS) {
    try {
      let result = rawText;
      result = Window_Base.prototype.convertEscapeCharacters(result);
      result = Window_Base.prototype.convertExtraEscapeCharacters(result);

      if (options.newLineEscape) {
        result = this.convertNewLineToHtml(result);
      }

      if (options.colorCodeEscape) {
        result = this.convertColorCodesToHtml(result, options.append);
      }

      return result;
    } catch (e) {
      console.error(e);
      return rawText;
    }
  }
}
