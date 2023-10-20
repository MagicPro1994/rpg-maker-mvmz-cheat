export class CheatGameSwitch {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get name() {
    try {
      return opener.$dataSystem.switches[this._id];
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  get value() {
    try {
      return opener.$gameSwitches.value(this._id);
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  set value(v) {
    try {
      opener.$gameSwitches.setValue(this._id, v);
    } catch (e) {
      console.error(e);
    }
  }
}
