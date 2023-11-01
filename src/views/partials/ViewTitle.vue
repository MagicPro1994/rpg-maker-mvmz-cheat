<script setup>
import { ref, onUnmounted } from "vue";
import { useAppStore } from "@/store/app";
import { watch } from "vue";
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

const autoReload = ref(false);

let intervalId;

watch(autoReload, (value) => {
  if (value) {
    intervalId = setInterval(() => {
      appStore.reload();
    }, 5000); // Reload every 10 seconds
  } else {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <v-card-title>
    <div class="d-flex flex-row justify-space-between" align="center">
      <span>{{ title }}</span>
      <v-tooltip>
        <span>{{ tooltip }}</span>
        <template v-slot:activator="{ props }">
          <div class="d-inline-flex align-center" align="center">
            <v-btn
              color="primary"
              density="compact"
              icon="mdi-refresh"
              small
              v-bind="props"
              @click="appStore.reload()"
            />
            <v-checkbox
              v-model="autoReload"
              title="Auto Reload"
              class="pl-2"
              density="compact"
              hide-details="auto"
            />
          </div>
        </template>
      </v-tooltip>
    </div>
  </v-card-title>
</template>
