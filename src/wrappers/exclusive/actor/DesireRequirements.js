export const properties = {
  mouthDesire: "xMouthDesire", // _mouthDesire
  mouthReqSuckFingers: "xMouthReqSuckFingers", // suckFingersMouthDesireRequirement
  mouthReqKiss: "xMouthReqKiss", // kissingMouthDesireRequirement
  mouthReqBlowjob: "xMouthReqBlowjob", // blowjobMouthDesireRequirement
  mouthReqRimjob: "xMouthReqRimjob", // rimjobMouthDesireRequirement

  boobsDesire: "xBoobsDesire", // _boobsDesire
  boobsReqBoobsPetting: "xBoobsReqBoobsPetting", // boobsPettingBoobsDesireRequirement
  boobsReqNipplesPetting: "xBoobsReqNipplesPetting", // nipplesPettingBoobsDesireRequirement
  boobsReqTittyFuck: "xBoobsReqTittyFuck", //tittyFuckBoobsDesireRequirement

  pussyDesire: "xPussyDesire", // _pussyDesire
  pussyReqClitPetting: "xPussyReqClitPetting", // clitPettingPussyDesireRequirement
  pussyReqClitToy: "xPussyReqClitToy", //clitToyPussyDesireRequirement
  pussyReqCunnilingus: "xPussyReqCunnilingus", //cunnilingusPussyDesireRequirement
  pussyReqPussyPetting: "xPussyReqPussyPetting", //pussyPettingPussyDesireRequirement
  pussyReqPussyToy: "xPussyReqPussyToy", //pussyToyPussyDesireRequirement
  pussyReqPussySex: "xPussyReqPussySex", //pussySexPussyDesireRequirement

  buttDesire: "xButtDesire", // _buttDesire
  buttReqButtPetting: "xButtReqButtPetting", // buttPettingButtDesireRequirement
  buttReqButtSpank: "xButtReqButtSpank", // spankingButtDesireRequirement
  buttReqAnalPetting: "xButtReqAnalPetting", // analPettingButtDesireRequirement
  buttReqAnalToy: "xButtReqAnalToy", // analToyButtDesireRequirement
  buttReqAnalSex: "xButtReqAnalSex", // analSexButtDesireRequirement

  cockDesire: "xCockDesire", // _cockDesire
  cockReqBodyBukkake: "xCockReqBodyBukkake", // bodyBukkakeCockDesireRequirement
  cockReqHandjob: "xCockReqHandjob", // handjobCockDesireRequirement
  cockReqCockPetting: "xCockReqCockPetting", // cockPettingCockDesireRequirement
  cockReqBlowjob: "xCockReqBlowjob", // blowjobCockDesireRequirement
  cockReqTittyFuck: "xCockReqTittyFuck", // tittyFuckCockDesireRequirement
  cockReqFootjob: "xCockReqFootjob", //footjobCockDesireRequirement
  cockReqPussySex: "xCockReqPussySex", //pussySexCockDesireRequirement
  cockReqAnalSex: "xCockReqAnalSex", //analSexCockDesireRequirement
  cockReqFaceBukkake: "xCockReqFaceBukkake", //faceBukkakeCockDesireRequirement
  cockReqSwallow: "xCockReqSwallow", //mouthSwallowCockDesireRequirement
  cockReqPussyCreampie: "xCockReqPussyCreampie", //pussyCreampieCockDesireRequirement
  cockReqAnalCreampie: "xCockReqAnalCreampie", //analCreampieCockDesireRequirement
};

function registerMouthRequirements() {
  try {
    const Game_Actor = opener.Game_Actor;
    const self = opener.KarrynActorHelper;

    if (!self.Game_Actor_suckFingersMouthDesireRequirement) {
      self.Game_Actor_suckFingersMouthDesireRequirement =
        Game_Actor.prototype.suckFingersMouthDesireRequirement;
    }

    Game_Actor.prototype.suckFingersMouthDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getMouthReqSuckFingers) {
          return this.getMouthReqSuckFingers();
        }
      }

      return self.Game_Actor_suckFingersMouthDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };

    if (!self.Game_Actor_kissingMouthDesireRequirement) {
      self.Game_Actor_kissingMouthDesireRequirement =
        Game_Actor.prototype.kissingMouthDesireRequirement;
    }

    Game_Actor.prototype.kissingMouthDesireRequirement = function (
      kissingLvl,
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getMouthReqKiss) {
          return this.getMouthReqKiss();
        }
      }

      return self.Game_Actor_kissingMouthDesireRequirement.call(
        this,
        kissingLvl,
        karrynSkillUse
      );
    };

    if (!self.Game_Actor_blowjobMouthDesireRequirement) {
      self.Game_Actor_blowjobMouthDesireRequirement =
        Game_Actor.prototype.blowjobMouthDesireRequirement;
    }

    Game_Actor.prototype.blowjobMouthDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getMouthReqBlowjob) {
          return this.getMouthReqBlowjob();
        }
      }

      return self.Game_Actor_blowjobMouthDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };

    if (!self.Game_Actor_rimjobMouthDesireRequirement) {
      self.Game_Actor_rimjobMouthDesireRequirement =
        Game_Actor.prototype.rimjobMouthDesireRequirement;
    }

    Game_Actor.prototype.rimjobMouthDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getMouthReqRimjob) {
          return this.getMouthReqRimjob();
        }
      }

      return self.Game_Actor_rimjobMouthDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };
  } catch (error) {
    console.error(error);
  }
}

function registerBoobsRequirements() {
  try {
    const Game_Actor = opener.Game_Actor;
    const self = opener.KarrynActorHelper;

    if (!self.Game_Actor_boobsPettingBoobsDesireRequirement) {
      self.Game_Actor_boobsPettingBoobsDesireRequirement =
        Game_Actor.prototype.boobsPettingBoobsDesireRequirement;
    }

    if (!self.Game_Actor_nipplesPettingBoobsDesireRequirement) {
      self.Game_Actor_nipplesPettingBoobsDesireRequirement =
        Game_Actor.prototype.nipplesPettingBoobsDesireRequirement;
    }

    if (!self.Game_Actor_tittyFuckBoobsDesireRequirement) {
      self.Game_Actor_tittyFuckBoobsDesireRequirement =
        Game_Actor.prototype.tittyFuckBoobsDesireRequirement;
    }

    Game_Actor.prototype.boobsPettingBoobsDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getBoobsReqBoobsPetting) {
          return this.getBoobsReqBoobsPetting();
        }
      }

      return self.Game_Actor_boobsPettingBoobsDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };

    Game_Actor.prototype.nipplesPettingBoobsDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getBoobsReqNipplesPetting) {
          return this.getBoobsReqNipplesPetting();
        }
      }

      return self.Game_Actor_nipplesPettingBoobsDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };

    Game_Actor.prototype.tittyFuckBoobsDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getBoobsReqTittyFuck) {
          return this.getBoobsReqTittyFuck();
        }
      }

      return self.Game_Actor_tittyFuckBoobsDesireRequirement.call(
        this,
        karrynSkillUse
      );
    };
  } catch (error) {
    console.error(error);
  }
}

function registerPussyRequirements() {
  try {
    const Game_Actor = opener.Game_Actor;
    const self = opener.KarrynActorHelper;

    if (!self.Game_Actor_clitPettingPussyDesireRequirement) {
      self.Game_Actor_clitPettingPussyDesireRequirement =
        Game_Actor.prototype.clitPettingPussyDesireRequirement;
    }

    if (!self.Game_Actor_clitToyPussyDesireRequirement) {
      self.Game_Actor_clitToyPussyDesireRequirement =
        Game_Actor.prototype.clitToyPussyDesireRequirement;
    }

    if (!self.Game_Actor_cunnilingusPussyDesireRequirement) {
      self.Game_Actor_cunnilingusPussyDesireRequirement =
        Game_Actor.prototype.cunnilingusPussyDesireRequirement;
    }

    if (!self.Game_Actor_pussyPettingPussyDesireRequirement) {
      self.Game_Actor_pussyPettingPussyDesireRequirement =
        Game_Actor.prototype.pussyPettingPussyDesireRequirement;
    }

    if (!self.Game_Actor_pussyToyPussyDesireRequirement) {
      self.Game_Actor_pussyToyPussyDesireRequirement =
        Game_Actor.prototype.pussyToyPussyDesireRequirement;
    }

    if (!self.Game_Actor_pussySexPussyDesireRequirement) {
      self.Game_Actor_pussySexPussyDesireRequirement =
        Game_Actor.prototype.pussySexPussyDesireRequirement;
    }

    Game_Actor.prototype.clitPettingPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqClitPetting) {
          return this.getPussyReqClitPetting();
        }

        return self.Game_Actor_clitPettingPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.clitToyPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqClitToy) {
          return this.getPussyReqClitToy();
        }

        return self.Game_Actor_clitToyPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    Game_Actor.prototype.cunnilingusPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqCunnilingus) {
          return this.getPussyReqCunnilingus();
        }

        return self.Game_Actor_cunnilingusPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.pussyPettingPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqPussyPetting) {
          return this.getPussyReqPussyPetting();
        }

        return self.Game_Actor_pussyPettingPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    Game_Actor.prototype.pussyToyPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqPussyToy) {
          return this.getPussyReqPussyToy();
        }

        return self.Game_Actor_pussyToyPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.pussySexPussyDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getPussyReqPussySex) {
          return this.getPussyReqPussySex();
        }

        return self.Game_Actor_pussySexPussyDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
  } catch (e) {
    console.error(e);
  }
}

function registerButtRequirements() {
  try {
    const Game_Actor = opener.Game_Actor;
    const self = opener.KarrynActorHelper;

    if (!self.Game_Actor_buttPettingButtDesireRequirement) {
      self.Game_Actor_buttPettingButtDesireRequirement =
        Game_Actor.prototype.buttPettingButtDesireRequirement;
    }

    if (!self.Game_Actor_spankingButtDesireRequirement) {
      self.Game_Actor_spankingButtDesireRequirement =
        Game_Actor.prototype.spankingButtDesireRequirement;
    }

    if (!self.Game_Actor_analPettingButtDesireRequirement) {
      self.Game_Actor_analPettingButtDesireRequirement =
        Game_Actor.prototype.analPettingButtDesireRequirement;
    }

    if (!self.Game_Actor_analToyButtDesireRequirement) {
      self.Game_Actor_analToyButtDesireRequirement =
        Game_Actor.prototype.analToyButtDesireRequirement;
    }

    if (!self.Game_Actor_analSexButtDesireRequirement) {
      self.Game_Actor_analSexButtDesireRequirement =
        Game_Actor.prototype.analSexButtDesireRequirement;
    }

    Game_Actor.prototype.buttPettingButtDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getButtReqButtPetting) {
          return this.getButtReqButtPetting();
        }

        return self.Game_Actor_buttPettingButtDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.spankingButtDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getButtReqButtSpank) {
          return this.getButtReqButtSpank();
        }

        return self.Game_Actor_spankingButtDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.analPettingButtDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getButtReqAnalPetting) {
          return this.getButtReqAnalPetting();
        }

        return self.Game_Actor_analPettingButtDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.analToyButtDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getButtReqAnalToy) {
          return this.getButtReqAnalToy();
        }

        return self.Game_Actor_analToyButtDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };

    Game_Actor.prototype.analSexButtDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getButtReqAnalSex) {
          return this.getButtReqAnalSex();
        }

        return self.Game_Actor_analSexButtDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
  } catch (e) {
    console.error(e);
  }
}

function registerCockRequirements() {
  try {
    const Game_Actor = opener.Game_Actor;
    const self = opener.KarrynActorHelper;

    if (!self.Game_Actor_bodyBukkakeCockDesireRequirement) {
      self.Game_Actor_bodyBukkakeCockDesireRequirement =
        Game_Actor.prototype.bodyBukkakeCockDesireRequirement;
    }

    Game_Actor.prototype.bodyBukkakeCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqBodyBukkake) {
          return this.getCockReqBodyBukkake();
        }

        return self.Game_Actor_bodyBukkakeCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_handjobCockDesireRequirement) {
      self.Game_Actor_handjobCockDesireRequirement =
        Game_Actor.prototype.handjobCockDesireRequirement;
    }

    Game_Actor.prototype.handjobCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqHandjob) {
          return this.getCockReqHandjob();
        }

        return self.Game_Actor_handjobCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_blowjobCockDesireRequirement) {
      self.Game_Actor_blowjobCockDesireRequirement =
        Game_Actor.prototype.blowjobCockDesireRequirement;
    }

    Game_Actor.prototype.blowjobCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReq) {
          return this.getCockReqBlowjob();
        }

        return self.Game_Actor_blowjobCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_tittyFuckCockDesireRequirement) {
      self.Game_Actor_tittyFuckCockDesireRequirement =
        Game_Actor.prototype.tittyFuckCockDesireRequirement;
    }

    Game_Actor.prototype.tittyFuckCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqTittyFuck) {
          return this.getCockReqTittyFuck();
        }

        return self.Game_Actor_tittyFuckCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_footjobCockDesireRequirement) {
      self.Game_Actor_footjobCockDesireRequirement =
        Game_Actor.prototype.footjobCockDesireRequirement;
    }

    Game_Actor.prototype.footjobCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqFootjob) {
          return this.getCockReqFootjob();
        }

        return self.Game_Actor_footjobCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_pussySexCockDesireRequirement) {
      self.Game_Actor_pussySexCockDesireRequirement =
        Game_Actor.prototype.pussySexCockDesireRequirement;
    }

    Game_Actor.prototype.pussySexCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqPussySex) {
          return this.getCockReqPussySex();
        }

        return self.Game_Actor_pussySexCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_analSexCockDesireRequirement) {
      self.Game_Actor_analSexCockDesireRequirement =
        Game_Actor.prototype.analSexCockDesireRequirement;
    }

    Game_Actor.prototype.analSexCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqAnalSex) {
          return this.getCockReqAnalSex();
        }

        return self.Game_Actor_analSexCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_faceBukkakeCockDesireRequirement) {
      self.Game_Actor_faceBukkakeCockDesireRequirement =
        Game_Actor.prototype.faceBukkakeCockDesireRequirement;
    }

    Game_Actor.prototype.faceBukkakeCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqFaceBukkake) {
          return this.getCockReqFaceBukkake();
        }

        return self.Game_Actor_faceBukkakeCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_mouthSwallowCockDesireRequirement) {
      self.Game_Actor_mouthSwallowCockDesireRequirement =
        Game_Actor.prototype.mouthSwallowCockDesireRequirement;
    }

    Game_Actor.prototype.mouthSwallowCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqSwallow) {
          return this.getCockReqSwallow();
        }

        return self.Game_Actor_mouthSwallowCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_pussyCreampieCockDesireRequirement) {
      self.Game_Actor_pussyCreampieCockDesireRequirement =
        Game_Actor.prototype.pussyCreampieCockDesireRequirement;
    }

    Game_Actor.prototype.pussyCreampieCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqPussyCreampie) {
          return this.getCockReqPussyCreampie();
        }

        return self.Game_Actor_pussyCreampieCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
    if (!self.Game_Actor_analCreampieCockDesireRequirement) {
      self.Game_Actor_analCreampieCockDesireRequirement =
        Game_Actor.prototype.analCreampieCockDesireRequirement;
    }

    Game_Actor.prototype.analCreampieCockDesireRequirement = function (
      karrynSkillUse
    ) {
      if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
        if (this.getCockReqAnalCreampie) {
          return this.getCockReqAnalCreampie();
        }

        return self.Game_Actor_analCreampieCockDesireRequirement.call(
          this,
          karrynSkillUse
        );
      }
    };
  } catch (e) {
    console.error(e);
  }
}

function registerMouthProperties() {
  try {
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, properties.mouthDesire, {
      get: function () {
        return this._mouthDesire;
      },
      set: function (value) {
        this.setMouthDesire(parseInt(value), false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.mouthReqSuckFingers, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getMouthReqSuckFingers) {
            return this.getMouthReqSuckFingers();
          }
        }

        return this.suckFingersMouthDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getMouthReqSuckFingers = () => parseInt(value);
        } else {
          delete this.getMouthReqSuckFingers;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.mouthReqKiss, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getMouthReqKiss) {
            return this.getMouthReqKiss();
          }
        }

        return this.kissingMouthDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getMouthReqKiss = () => parseInt(value);
        } else {
          delete this.getMouthReqKiss;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.mouthReqBlowjob, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getMouthReqBlowjob) {
            return this.getMouthReqBlowjob();
          }
        }

        return this.blowjobMouthDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getMouthReqBlowjob = () => parseInt(value);
        } else {
          delete this.getMouthReqBlowjob;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.mouthReqRimjob, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getMouthReqRimjob) {
            return this.getMouthReqRimjob();
          }
        }

        return this.rimjobMouthDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getMouthReqRimjob = () => parseInt(value);
        } else {
          delete this.getMouthReqRimjob;
        }
      },
      configurable: true,
    });
  } catch (e) {
    console.error(e);
  }
}

function registerBoobsProperties() {
  try {
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, properties.boobsDesire, {
      get: function () {
        return this._boobsDesire;
      },
      set: function (value) {
        this.setBoobsDesire(parseInt(value), false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.boobsReqBoobsPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getBoobsReqBoobsPetting) {
            return this.getBoobsReqBoobsPetting();
          }
        }

        return this.boobsPettingBoobsDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getBoobsReqBoobsPetting = () => parseInt(value);
        } else {
          delete this.getBoobsReqBoobsPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.boobsReqNipplesPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getBoobsReqNipplesPetting) {
            return this.getBoobsReqNipplesPetting();
          }
        }

        return this.nipplesPettingBoobsDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getBoobsReqNipplesPetting = () => parseInt(value);
        } else {
          delete this.getBoobsReqNipplesPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.boobsReqTittyFuck, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getBoobsReqTittyFuck) {
            return this.getBoobsReqTittyFuck();
          }
        }

        return this.tittyFuckBoobsDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          const result = parseInt(value);
          this.getBoobsReqTittyFuck = () => result;
        } else {
          delete this.getBoobsReqTittyFuck;
        }
      },
      configurable: true,
    });
  } catch (e) {
    console.error(e);
  }
}

function registerPussyProperties() {
  try {
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, properties.pussyDesire, {
      get: function () {
        return this._pussyDesire;
      },
      set: function (value) {
        this.setPussyDesire(parseInt(value), false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqClitPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqClitPetting) {
            return this.getPussyReqClitPetting();
          }
        }

        return this.clitPettingPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          const result = parseInt(value);
          this.getPussyReqClitPetting = () => result;
        } else {
          delete this.getPussyReqClitPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqClitToy, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqClitToy) {
            return this.getPussyReqClitToy();
          }
        }

        return this.clitToyPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getPussyReqClitToy = () => parseInt(value);
        } else {
          delete this.getPussyReqClitToy;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqCunnilingus, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqCunnilingus) {
            return this.getPussyReqCunnilingus();
          }
        }

        return this.cunnilingusPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getPussyReqCunnilingus = () => parseInt(value);
        } else {
          delete this.getPussyReqCunnilingus;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqPussyPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqPussyPetting) {
            return this.getPussyReqPussyPetting();
          }
        }

        return this.pussyPettingPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getPussyReqPussyPetting = () => parseInt(value);
        } else {
          delete this.getPussyReqPussyPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqPussyToy, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqPussyToy) {
            return this.getPussyReqPussyToy();
          }
        }

        return this.pussyToyPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getPussyReqPussyToy = () => parseInt(value);
        } else {
          delete this.getPussyReqPussyToy;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.pussyReqPussySex, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getPussyReqPussySex) {
            return this.getPussyReqPussySex();
          }
        }

        return this.pussySexPussyDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getPussyReqPussySex = () => parseInt(value);
        } else {
          delete this.getPussyReqPussySex;
        }
      },
      configurable: true,
    });
  } catch (e) {
    console.error(e);
  }
}

function registerButtProperties() {
  try {
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, properties.buttDesire, {
      get: function () {
        return this._buttDesire;
      },
      set: function (value) {
        this.setButtDesire(parseInt(value), false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.buttReqButtPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getButtReqButtPetting) {
            return this.getButtReqButtPetting();
          }
        }

        return this.buttPettingButtDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getButtReqButtPetting = () => parseInt(value);
        } else {
          delete this.getButtReqButtPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.buttReqButtSpank, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getButtReqButtSpank) {
            return this.getButtReqButtSpank();
          }
        }

        return this.spankingButtDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getButtReqButtSpank = () => parseInt(value);
        } else {
          delete this.getButtReqButtSpank;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.buttReqAnalPetting, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getButtReqAnalPetting) {
            return this.getButtReqAnalPetting();
          }
        }

        return this.analPettingButtDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getButtReqAnalPetting = () => parseInt(value);
        } else {
          delete this.getButtReqAnalPetting;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.buttReqAnalToy, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getButtReqAnalToy) {
            return this.getButtReqAnalToy();
          }
        }

        return this.analToyButtDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getButtReqAnalToy = () => parseInt(value);
        } else {
          delete this.getButtReqAnalToy;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.buttReqAnalSex, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getButtReqAnalSex) {
            return this.getButtReqAnalSex();
          }
        }

        return this.analSexButtDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getButtReqAnalSex = () => parseInt(value);
        } else {
          delete this.getButtReqAnalSex;
        }
      },
      configurable: true,
    });
  } catch (e) {
    console.error(e);
  }
}

function registerCockProperties() {
  try {
    const prototype = opener.Game_Actor.prototype;

    Object.defineProperty(prototype, properties.cockDesire, {
      get: function () {
        return this._cockDesire;
      },
      set: function (value) {
        this.setCockDesire(parseInt(value), false);
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqBodyBukkake, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqBodyBukkake) {
            return this.getCockReqBodyBukkake();
          }
        }

        return this.bodyBukkakeCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqBodyBukkake = () => parseInt(value);
        } else {
          delete this.getCockReqBodyBukkake;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqHandjob, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqHandjob) {
            return this.getCockReqHandjob();
          }
        }

        return this.handjobCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqHandjob = () => parseInt(value);
        } else {
          delete this.getCockReqHandjob;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqBlowjob, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqBlowjob) {
            return this.getCockReqBlowjob();
          }
        }

        return this.blowjobCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqBlowjob = () => parseInt(value);
        } else {
          delete this.getCockReqBlowjob;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqTittyFuck, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqTittyFuck) {
            return this.getCockReqTittyFuck();
          }
        }

        return this.tittyFuckCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqTittyFuck = () => parseInt(value);
        } else {
          delete this.getCockReqTittyFuck;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqFootjob, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqFootjob) {
            return this.getCockReqFootjob();
          }
        }
        return this.footjobCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqFootjob = () => parseInt(value);
        } else {
          delete this.getCockReqFootjob;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqPussySex, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqPussySex) {
            return this.getCockReqPussySex();
          }
        }
        return this.pussySexCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqPussySex = () => parseInt(value);
        } else {
          delete this.getCockReqPussySex;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqAnalSex, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqAnalSex) {
            return this.getCockReqAnalSex();
          }
        }
        return this.analSexCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqAnalSex = () => parseInt(value);
        } else {
          delete this.getCockReqAnalSex;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqFaceBukkake, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqFaceBukkake) {
            return this.getCockReqFaceBukkake();
          }
        }
        return this.faceBukkakeCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqFaceBukkake = () => parseInt(value);
        } else {
          delete this.getCockReqFaceBukkake;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqSwallow, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqSwallow) {
            return this.getCockReqSwallow();
          }
        }
        return this.mouthSwallowCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqSwallow = () => parseInt(value);
        } else {
          delete this.getCockReqSwallow;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqPussyCreampie, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqPussyCreampie) {
            return this.getCockReqPussyCreampie();
          }
        }
        return this.pussyCreampieCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqPussyCreampie = () => parseInt(value);
        } else {
          delete this.getCockReqPussyCreampie;
        }
      },
      configurable: true,
    });

    Object.defineProperty(prototype, properties.cockReqAnalCreampie, {
      get: function () {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          if (this.getCockReqAnalCreampie) {
            return this.getCockReqAnalCreampie();
          }
        }
        return this.analCreampieCockDesireRequirement();
      },
      set: function (value) {
        if (this.isDesireReqUnlocked && this.isDesireReqUnlocked()) {
          this.getCockReqAnalCreampie = () => parseInt(value);
        } else {
          delete this.getCockReqAnalCreampie;
        }
      },
      configurable: true,
    });
  } catch (e) {
    console.error(e);
  }
}

export const registerDesireRequirementProperties = function () {
  try {
    registerMouthRequirements();
    registerMouthProperties();
    registerBoobsRequirements();
    registerBoobsProperties();
    registerPussyRequirements();
    registerPussyProperties();
    registerButtRequirements();
    registerButtProperties();
    registerCockRequirements();
    registerCockProperties();
  } catch (e) {
    console.error(e);
  }
};
