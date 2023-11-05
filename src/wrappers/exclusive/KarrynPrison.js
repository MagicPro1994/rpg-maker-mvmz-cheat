import { KarrynActorHelper } from "./KarrynActorHelper";

export class KarrynPrison {
  constructor() {}

  get owner() {
    try {
      return KarrynActorHelper.karryn;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  get funding() {
    try {
      return opener.$gameParty._gold;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set funding(value) {
    try {
      if (isNaN(value)) {
        throw new Error(`Invalid value: ${value}`);
      }

      // Don't allow negative values
      value = Math.max(value, 0);

      let delta = value - opener.$gameParty._gold;

      if (delta === 0) return;

      opener.$gameParty.gainGold(delta);
    } catch (error) {
      console.error(error);
    }
  }

  get corruption() {
    try {
      return opener.$gameParty._corruption;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set corruption(value) {
    try {
      opener.$gameParty.setCorruption(value);
    } catch (error) {
      console.error(error);
    }
  }

  get calculatedIncome() {
    try {
      return opener.$gameParty.income;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get income() {
    try {
      return this.owner._baseIncome;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set income(value) {
    try {
      if (isNaN(value)) {
        throw new Error(`Invalid value: ${value}`);
      }

      value = Math.max(value, 0);

      this.owner._baseIncome = value;
    } catch (error) {
      console.error(error);
    }
  }

  get calculatedExpense() {
    try {
      return opener.$gameParty.expense;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get expense() {
    try {
      return this.owner._baseExpense;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set expense(value) {
    try {
      if (isNaN(value)) {
        throw new Error(`Invalid value: ${value}`);
      }

      value = Math.max(value, 0);

      this.owner._baseExpense = value;
    } catch (error) {
      console.error(error);
    }
  }

  get date() {
    try {
      return opener.$gameParty.date;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get currentRunDays() {
    try {
      return opener.Prison.currentRunsDays;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get order() {
    try {
      return opener.$gameParty.order;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set order(value) {
    try {
      opener.$gameParty.setOrder(value);
    } catch (e) {
      console.error(e);
    }
  }

  get calculatedControl() {
    try {
      return opener.$gameParty.orderChangeValue();
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get control() {
    try {
      return opener.$gameParty._orderChangePerDay;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set control(value) {
    try {
      opener.$gameParty.setOrderChangePerDay(value);
    } catch (e) {
      console.error(e);
    }
  }

  get guardAggression() {
    try {
      return opener.$gameParty.guardAggression;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set guardAggression(value) {
    try {
      opener.$gameParty.setGuardAggression(value);
    } catch (e) {
      console.error(e);
    }
  }

  get edicts() {
    try {
      if (this.owner.stsSp() > 0) {
        return this.owner.stsSp();
      }

      return this.owner.getStoredEdictPoints();
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set edicts(value) {
    try {
      this.owner._storedEdictPoints = value;
      this.owner.setAsp(value);
    } catch (e) {
      console.error(e);
    }
  }
}
