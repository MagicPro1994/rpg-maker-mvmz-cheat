<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import KarrynBasicStatTab from "@/views/partials/KarrynBasicStatTab.vue";
import KarrynStatTab from "@/views/partials/KarrynStatTab.vue";
import KarrynCheatTab from "@/views/partials/KarrynCheatTab.vue";
import KarrynPrimaryTab from "@/views/partials/KarrynPrimaryTab.vue";
import KarrynSecondaryTab from "@/views/partials/KarrynSecondaryTab.vue";
import KarrynResistTab from "@/views/partials/KarrynResistTab.vue";
import KarrynTertiaryTab from "./partials/KarrynTertiaryTab.vue";
import KarrynPassiveTab from "./partials/KarrynPassiveTab.vue";

const appStore = useAppStore();
const karryn = ref(appStore.karryn);
const selectedTab = ref(0);
const tabs = [
  { title: "Cheat", component: KarrynCheatTab },
  { title: "Basic", component: KarrynBasicStatTab },
  { title: "Stats", component: KarrynStatTab },
  { title: "Primary", component: KarrynPrimaryTab },
  { title: "Secondary", component: KarrynSecondaryTab },
  { title: "Resist", component: KarrynResistTab },
  { title: "Tertiary", component: KarrynTertiaryTab },
  { title: "Passive", component: KarrynPassiveTab },
];
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Karryn</v-card-title>
    <v-divider class="my-1" />
    <div v-if="karryn === null">
      <v-card-text> Karryn is not in the party. </v-card-text>
    </div>
    <div v-else>
      <!-- start: Tabs -->
      <v-tabs v-model="selectedTab" show-arrows>
        <v-tab color="primary" v-for="(tab, index) in tabs" :key="index">
          {{ tab.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="selectedTab">
        <v-window-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component"></component>
        </v-window-item>
      </v-window>
      <!-- end: Tabs -->
    </div>
  </v-card>
</template>

<style>
.flex-items-2 > * {
  flex-basis: 50%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
