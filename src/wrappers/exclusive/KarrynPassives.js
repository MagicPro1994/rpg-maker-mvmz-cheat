import { KarrynActorHelper } from "./KarrynActorHelper";
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
      let rawText = opener.TextManager.passiveCategory(this.id);
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
      let rawText = opener.TextManager.passiveCategory(this.id);
      return KarrynUtils.convertColorCodesToHtml(rawText);
    } catch (error) {
      console.error(error);
      return `[${this.id}]`;
    }
  }

  includes(passive) {
    try {
      // 0 is a special case for all passives
      if (this._id === 0) return true;

      if (passive instanceof KarrynPassive) {
        return passive.data.passiveCategory.includes(this.id);
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static getAll() {
    try {
      let actor = KarrynActorHelper.getActor();

      if (!this._passiveCategories) {
        if (!actor._passiveCategory) {
          actor.buildPassiveCategoryArray();
        }

        this._passiveCategories = actor._passiveCategory.map(
          (_, index) => new KarrynPassiveCategory(index)
        );
      }

      return this._passiveCategories;
    } catch (error) {
      console.error(error);
      return [];
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
        this._data = opener.$dataSkills[this.id];
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

  get name() {
    try {
      if (!this._name) {
        let name = opener.TextManager.skillName(this.id);
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
        let description = opener.TextManager.skillDesc(this.id);
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

  get dayObtained() {
    try {
      const actor = KarrynActorHelper.getActor();
      return actor._passivesObtainedOn_keySkillID_valueDate[this.id];
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get colorCode() {
    try {
      let passiveColorIndex = this.data._passiveColor || -1;

      // If the passive color is not set, use the default color
      if (passiveColorIndex === -1) {
        return null;
      }

      this._colorCode = KarrynUtils.getTextColor(passiveColorIndex);

      return this._colorCode;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static getAll() {
    try {
      return opener.$dataSkills
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
