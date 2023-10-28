<script setup>
import { useAppStore } from "@/store/app";
const appStore = useAppStore();

defineProps({
  title: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
    required: false,
    default: "Reload from game data",
  },
});
</script>

<template>
  <v-card-title>
    <div class="d-flex flex-row justify-space-between" align="center">
      <span>{{ title }}</span>
      <v-tooltip>
        <span>{{ tooltip }}</span>
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            density="compact"
            icon="mdi-refresh"
            small
            v-bind="props"
            @click="appStore.reload()"
          />
        </template>
      </v-tooltip>
    </div>
  </v-card-title>
</template>
