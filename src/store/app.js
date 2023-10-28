// Utilities
import { defineStore } from "pinia";
import { KarrynGameMaster } from "@/wrappers/exclusive/KarrynGameMaster";
import {
  KarrynPassive,
  KarrynPassiveCategory,
} from "@/wrappers/exclusive/KarrynPassives";
import { KarrynActor } from "@/wrappers/exclusive/KarrynActor";
import { KarrynTitle } from "@/wrappers/exclusive/KarrynTitle";

export const useAppStore = defineStore("app", {
  state: () => ({
    loading: false,
    gameMaster: new KarrynGameMaster(),
    karryn: KarrynActor.getKarryn(),
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
    updateKarryn() {
      this.karryn = KarrynActor.getKarryn();
    },
    reload() {
      this.updateKarryn();
    },
  },
});
