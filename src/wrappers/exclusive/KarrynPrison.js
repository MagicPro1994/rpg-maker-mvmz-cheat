import { KarrynUtils } from "./KarrynUtils";

export class KarrynPrison {
  constructor() {}

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
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

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
      return KarrynUtils.Prison.income;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get income() {
    try {
      return opener.$gameParty._baseIncome;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set income(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - KarrynUtils.karryn._baseIncome;

      if (delta === 0) return;

      opener.$gameParty.increaseIncome(delta);
    } catch (error) {
      console.error(error);
    }
  }

  get calculatedExpense() {
    try {
      return KarrynUtils.Prison.expense;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get expense() {
    try {
      return opener.$gameParty._baseExpense;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set expense(value) {
    try {
      if (isNaN(value) || value < 0) {
        throw new Error(`value is NaN or negative`);
      }

      let delta = value - KarrynUtils.karryn._baseExpense;

      if (delta === 0) return;

      opener.$gameParty.increaseExpense(delta);
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
      return KarrynUtils.Prison.currentRunsDays;
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

  get control() {
    try {
      return opener.$gameParty.orderChange;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set control(value) {
    try {
      opener.$gameParty.setOrderChangeValue(value);
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
      return KarrynUtils.karryn.getStoredEdictPoints();
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set edicts(value) {
    try {
      KarrynUtils.karryn._storedEdictPoints = value;
    } catch (e) {
      console.error(e);
    }
  }
}
