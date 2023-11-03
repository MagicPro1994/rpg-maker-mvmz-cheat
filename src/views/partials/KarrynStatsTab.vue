<script setup>
import { defineAsyncComponent } from "vue";

const KarrynBasicStatTab = defineAsyncComponent(() =>
  import("./KarrynBasicStatTab.vue")
);

const KarrynStatTab = defineAsyncComponent(() => import("./KarrynStatTab.vue"));

const KarrynPrimaryTab = defineAsyncComponent(() =>
  import("./KarrynPrimaryTab.vue")
);

const KarrynSecondaryTab = defineAsyncComponent(() =>
  import("./KarrynSecondaryTab.vue")
);
</script>

<template>
  <v-card-text class="scrollable-container">
    <v-card-subtitle>Basic</v-card-subtitle>
    <karryn-basic-stat-tab />

    <v-card-subtitle>Stats</v-card-subtitle>
    <karryn-stat-tab />

    <v-card-subtitle>Primary Attributes</v-card-subtitle>
    <karryn-primary-tab />

    <v-card-subtitle>Secondary Attributes</v-card-subtitle>
    <karryn-secondary-tab />
  </v-card-text>
</template>
