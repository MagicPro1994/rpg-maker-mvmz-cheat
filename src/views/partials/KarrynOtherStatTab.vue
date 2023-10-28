<script setup>
import { computed } from "vue";
import KarrynTertiaryTab from "./KarrynTertiaryTab.vue";
import KarrynResistTab from "./KarrynResistTab.vue";

const props = defineProps({
  actor: {
    type: Object,
    required: true,
  },
});

const karryn = computed(() => props.actor);
</script>
<template>
  <v-card-subtitle>Sex Levels</v-card-subtitle>
  <karryn-tertiary-tab :actor="karryn" />

  <v-card-subtitle>Resistance</v-card-subtitle>
  <karryn-resist-tab :actor="karryn" />
</template>
