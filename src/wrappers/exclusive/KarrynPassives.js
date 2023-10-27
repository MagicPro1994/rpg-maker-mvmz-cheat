import { TextManager, $dataSkills } from "../Constants";
import { SKILLTYPE_PASSIVES_ID } from "./KarrynConstants";
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
  constructor(data) {
    // data is a json object from $dataSkills
    if (data && data.id !== undefined && data.styleId !== undefined) {
      this._id = data.id;
      this._data = data;
    } else {
      // data is a number
      if (data === undefined || isNaN(data)) {
        throw new Error(`data is invalid`);
      }

      this._id = parseInt(data);
    }
  }

  get data() {
    try {
      if (!this._data) {
        this._data = $dataSkills[this.id];
      }

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

  static getAll() {
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
}
