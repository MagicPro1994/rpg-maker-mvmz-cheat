import { TextManager, $dataSkills } from "../Constants";
import { KarrynUtils } from "./KarrynUtils";

export class KarrynPassiveCategory {
  constructor(id) {
    if (isNaN(id)) throw new Error(`id is NaN`);

    this._id = parseInt(id);
  }

  get id() {
    return this._id;
  }

  get name() {
    try {
      let rawText = TextManager.passiveCategory(this.id);
      // Remove all code characters like \I[1]\C[1]
      rawText = rawText.replace(/\\[A-Z]\[\d+\]/g, "");
      return rawText;
    } catch (error) {
      console.error(error);
      return `[${this.id}]`;
    }
  }

  get htmlName() {
    try {
      let rawText = TextManager.passiveCategory(this.id);
      return KarrynUtils.convertColorCodesToHtml(rawText);
    } catch (error) {
      console.error(error);
      return `[${this.id}]`;
    }
  }

  includes(passive) {
    try {
      if (!passive) return false;

      if (passive instanceof KarrynPassive) {
        return passive.data.passiveCategory.includes(this.id);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export class KarrynPassive {
  constructor(passive) {
    if (typeof passive === "object") {
      this._id = passive.id;
      this._data = passive;
    } else {
      if (isNaN(passive)) throw new Error(`id is NaN`);

      this._id = parseInt(passive);
    }
  }

  get data() {
    try {
      if (!this._data) this._data = $dataSkills[this.id];

      return this._data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get id() {
    return this._id;
  }

  get category() {
    try {
      if (!this._category) {
        this._category = new KarrynPassiveCategory(this.data.styleId);
      }

      return this._category;
    } catch (error) {
      console.error(error);
      return new KarrynPassiveCategory();
    }
  }

  get name() {
    try {
      if (!this._name) {
        let name = TextManager.skillName(this.id);
        this._name = KarrynUtils.convertEscapeCharacters(name);
      }

      return this._name;
    } catch (error) {
      console.error(error);
      return `NAME [${this.id}]`;
    }
  }

  get description() {
    try {
      if (!this._description) {
        let description = TextManager.skillDesc(this.id);
        this._description = KarrynUtils.convertEscapeCharacters(description, {
          colorCodeEscape: true,
          append: "\n",
        });
      }

      return this._description;
    } catch (error) {
      console.error(error);
      return `DESC [${this.id}]`;
    }
  }
}
