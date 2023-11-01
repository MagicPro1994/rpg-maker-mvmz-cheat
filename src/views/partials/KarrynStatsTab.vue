<script setup>
import KarrynBasicStatTab from "@/views/partials/KarrynBasicStatTab.vue";
import KarrynStatTab from "@/views/partials/KarrynStatTab.vue";
import KarrynPrimaryTab from "@/views/partials/KarrynPrimaryTab.vue";
import KarrynSecondaryTab from "@/views/partials/KarrynSecondaryTab.vue";
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
