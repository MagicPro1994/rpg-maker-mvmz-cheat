import { KarrynActorHelper } from "./KarrynActorHelper";

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
      return opener.$gameParty.income;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get income() {
    try {
      const actor = KarrynActorHelper.karryn;

      return actor._baseIncome;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set income(value) {
    try {
      const actor = KarrynActorHelper.karryn;
      if (isNaN(value) || value < 0) {
        actor._baseIncome = 0;
      }

      actor._baseIncome = value;
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
      const actor = KarrynActorHelper.karryn;

      return actor._baseExpense;
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set expense(value) {
    try {
      const actor = KarrynActorHelper.karryn;

      if (isNaN(value) || value < 0) {
        actor._baseExpense = 0;
      }

      actor._baseExpense = value;
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
      const actor = KarrynActorHelper.karryn;
      if (actor.stsSp() > 0) {
        return actor.stsSp();
      }

      return actor.getStoredEdictPoints();
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set edicts(value) {
    try {
      const actor = KarrynActorHelper.karryn;
      actor._storedEdictPoints = value;
      actor.setAsp(value);
    } catch (e) {
      console.error(e);
    }
  }
}
