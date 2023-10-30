<script setup>
import { computed } from "vue";

import KarrynBasicStatTab from "@/views/partials/KarrynBasicStatTab.vue";
import KarrynStatTab from "@/views/partials/KarrynStatTab.vue";
import KarrynPrimaryTab from "@/views/partials/KarrynPrimaryTab.vue";
import KarrynSecondaryTab from "@/views/partials/KarrynSecondaryTab.vue";

const props = defineProps({
  actor: {
    type: Object,
    required: true,
  },
});

const karryn = computed(() => props.actor);
</script>
<template>
  <v-card-text>
    <v-card-subtitle>Basic</v-card-subtitle>
    <karryn-basic-stat-tab :actor="karryn" />

    <v-card-subtitle>Stats</v-card-subtitle>
    <karryn-stat-tab :actor="karryn" />

    <v-card-subtitle>Primary Attributes</v-card-subtitle>
    <karryn-primary-tab :actor="karryn" />

    <v-card-subtitle>Secondary Attributes</v-card-subtitle>
    <karryn-secondary-tab :actor="karryn" />
  </v-card-text>
</template>
