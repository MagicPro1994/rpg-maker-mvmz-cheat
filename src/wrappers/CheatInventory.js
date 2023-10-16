export const INVENTORY_TYPES = {
  ARMOR: "armor",
  WEAPON: "weapon",
  ITEM: "item",
};

export class CheatInventoryItem {
  constructor(item) {
    if (!item) {
      throw new Error(`Cannot create CheatInventoryItem - item is undefined`);
    }

    this._item = item;
    this._type = null;
  }

  get type() {
    return this._type;
  }

  get id() {
    return this._item.id;
  }

  get name() {
    return this._item.name;
  }

  get description() {
    return this._item.description;
  }

  get quantity() {
    try {
      throw new Error(`Abstract getter quantity not implemented`);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set quantity(value) {
    try {
      throw new Error(`Abstract setter quantity not implemented - ${value}`);
    } catch (error) {
      console.error(error);
    }
  }
}

export class CheatArmor extends CheatInventoryItem {
  constructor(armor) {
    super(armor);
    this._type = INVENTORY_TYPES.ARMOR;
  }

  get quantity() {
    try {
      return opener.$gameParty.numItems(opener.$dataArmors[this.id]);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set quantity(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this.quantity;

      if (delta === 0) return;

      opener.$gameParty.gainItem(opener.$dataArmors[this.id], delta);
    } catch (error) {
      console.error(error);
    }
  }
}

export class CheatWeapon extends CheatInventoryItem {
  constructor(weapon) {
    super(weapon);
    this._type = INVENTORY_TYPES.WEAPON;
  }

  get quantity() {
    try {
      return opener.$gameParty.numItems(opener.$dataWeapons[this.id]);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set quantity(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this.quantity;

      if (delta === 0) return;

      opener.$gameParty.gainItem(opener.$dataWeapons[this.id], delta);
    } catch (error) {
      console.error(error);
    }
  }
}

export class CheatItem extends CheatInventoryItem {
  constructor(item) {
    super(item);
    this._type = INVENTORY_TYPES.ITEM;
  }

  get quantity() {
    try {
      return opener.$gameParty.numItems(opener.$dataItems[this.id]);
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

  set quantity(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - this.quantity;

      if (delta === 0) return;

      opener.$gameParty.gainItem(opener.$dataItems[this.id], delta);
    } catch (error) {
      console.error(error);
    }
  }
}
