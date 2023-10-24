// Utilities
import { defineStore } from "pinia";
import { KarrynGameMaster } from "@/wrappers/exclusive/KarrynGameMaster";

export const useAppStore = defineStore("app", {
  state: () => ({
    gameMaster: new KarrynGameMaster(),
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
  actions: {},
});
