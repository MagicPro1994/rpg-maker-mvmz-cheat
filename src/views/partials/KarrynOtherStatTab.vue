<script setup>
import { ref } from "vue";

import KarrynDesireTab from "./KarrynDesireTab.vue";
import KarrynSexLevelTab from "./KarrynSexLevelTab.vue";
import KarrynResistTab from "./KarrynResistTab.vue";

const drawer = ref(false);
const selectedTab = ref(0);
const tabs = [
  { title: "Desires", component: KarrynDesireTab },
  { title: "Sex Levels", component: KarrynSexLevelTab },
  { title: "Resistance", component: KarrynResistTab },
];
</script>
<template>
  <v-card-text class="scrollable-container">
    <v-btn
      variant="tonal"
      color="primary"
      style="position: absolute; right: 0; bottom: 0; z-index: 2000"
      @click.stop="drawer = !drawer"
    >
      <v-icon v-if="drawer">mdi-menu-down</v-icon>
      <v-icon v-else>mdi-menu-up</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      class="menu-drawer"
      location="bottom"
      temporary
    >
      <v-tabs v-model="selectedTab" show-arrows density="compact">
        <v-tab color="primary" v-for="(tab, index) in tabs" :key="index">
          <span>{{ tab.title }}</span>
        </v-tab>
      </v-tabs>
    </v-navigation-drawer>
    <v-window v-model="selectedTab">
      <v-window-item v-for="(tab, index) in tabs" :key="index">
        <component :is="tab.component"></component>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<style scoped>
.menu-drawer {
  height: 7.5% !important;
}
</style>
