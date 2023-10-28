import { EQUIP_TYPE_TITLE_ID } from "./KarrynConstants";
import { KarrynUtils } from "./KarrynUtils";

export class KarrynTitle {
  constructor(data) {
    if (data && data.id !== undefined && data.etypeId === EQUIP_TYPE_TITLE_ID) {
      this._data = data;
      this._id = data.id;
    }
  }

  get id() {
    return this._id;
  }

  get data() {
    try {
      return opener.$dataArmors[this.id];
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  get name() {
    try {
      if (!this._name) {
        let name = KarrynUtils.getRemName(this.data);
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
        let description = KarrynUtils.getRemDescription(this.data);

        this._description = KarrynUtils.convertEscapeCharacters(description, {
          extraEscape: true,
          colorCodeEscape: true,
          append: "\n",
          iconCodeEscape: true,
          width: 16,
          height: 16,
          iconClass: "title-desc-icon",
          unknownCodeEscape: true,
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
      return opener.$dataArmors
        .filter((armor) => armor && armor.etypeId === EQUIP_TYPE_TITLE_ID)
        .map((armor) => new KarrynTitle(armor));
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
