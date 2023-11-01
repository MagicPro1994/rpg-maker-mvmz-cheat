// Utilities
import { defineStore } from "pinia";
import { KarrynGameMaster } from "@/wrappers/exclusive/KarrynGameMaster";
import {
  KarrynPassive,
  KarrynPassiveCategory,
} from "@/wrappers/exclusive/KarrynPassives";
import { KarrynPrison } from "@/wrappers/exclusive/KarrynPrison";
import { KarrynTitle } from "@/wrappers/exclusive/KarrynTitle";
import { KarrynActorHelper } from "@/wrappers/exclusive/KarrynActorHelper";

export const useAppStore = defineStore("app", {
  state: () => ({
    timeStamp: Date.now(),
    gameMaster: new KarrynGameMaster(),
    karryn: KarrynActorHelper.karryn,
    prison: new KarrynPrison(),
    passiveCategories: KarrynPassiveCategory.getAll(),
    passives: KarrynPassive.getAll(),
    titles: KarrynTitle.getAll(),
    pagination: {
      itemsPerPage: 5,
      itemsPerPageOptions: [
        { value: 5, title: "5" },
        { value: 10, title: "10" },
        { value: 20, title: "20" },
        { value: 50, title: "50" },
        { value: -1, title: "All" },
      ],
    },
  }),
  getters: {},
  actions: {
    reloadPrison() {
      this.prison = new KarrynPrison();
    },

    reloadKarryn() {
      this.karryn = KarrynActorHelper.karryn;
    },

    reloadTitles() {
      this.titles = KarrynTitle.getAll();
    },

    reloadPassives() {
      this.passiveCategories = KarrynPassiveCategory.getAll();
      this.passives = KarrynPassive.getAll();
    },

    reloadGameMaster() {
      this.gameMaster = new KarrynGameMaster();
    },

    reload() {
      this.reloadKarryn();
      this.reloadPrison();
      this.reloadTitles();
      this.reloadPassives();
      this.reloadGameMaster();

      this.timeStamp = Date.now();
    },
  },
});
