<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils, MESSAGES } from "@/wrappers/exclusive/KarrynUtils";

import ViewTitleVue from "./partials/ViewTitle.vue";
import KarrynStatsTab from "@/views/partials/KarrynStatsTab.vue";
import KarrynPassiveTab from "./partials/KarrynPassiveTab.vue";
import KarrynOtherStatTab from "./partials/KarrynOtherStatTab.vue";
import KarrynTitleTab from "./partials/KarrynTitleTab.vue";

const appStore = useAppStore();
const karryn = computed(() => appStore.karryn);

const selectedTab = ref(0);
const tabs = [
  { title: "Stats", component: KarrynStatsTab },
  { title: "Titles", component: KarrynTitleTab },
  { title: "Passives", component: KarrynPassiveTab },
  { title: "Others", component: KarrynOtherStatTab },
];
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <view-title-vue title="Karryn" />
    <v-divider class="my-1" />
    <div v-if="karryn === null">
      <v-card-text> Karryn is not in the party. </v-card-text>
    </div>
    <div v-else-if="!KarrynUtils.isInPrison">
      <v-card-text>
        {{ MESSAGES.FEATURE_NOT_AVAILABLE }}
      </v-card-text>
    </div>
    <div v-else>
      <!-- start: Tabs -->
      <v-tabs v-model="selectedTab" show-arrows>
        <v-tab color="primary" v-for="(tab, index) in tabs" :key="index">
          <span>{{ tab.title }}</span>
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

.scrollable-container {
  min-height: 72vh; /* Set minimum height */
  max-height: 72vh; /* Set the maximum width of the container */
  overflow-y: scroll; /* Set the vertical overflow behavior to scroll */
}
</style>
