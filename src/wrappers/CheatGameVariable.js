export class CheatGameVariable {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get name() {
    try {
      return opener.$dataSystem.variables[this._id];
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  get value() {
    try {
      return opener.$gameVariables.value(this._id);
    } catch (e) {
      console.error(e);
      return "";
    }
  }

  set value(v) {
    try {
      opener.$gameVariables.setValue(this._id, v);
    } catch (e) {
      console.error(e);
    }
  }
}
