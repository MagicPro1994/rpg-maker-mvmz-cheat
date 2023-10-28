<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
const appStore = useAppStore();
const gameMaster = ref(appStore.gameMaster);

onMounted(() => KarrynUtils.renderIcons());
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Home</v-card-title>
    <v-divider class="my-1" />
    <!-- start: Current Location -->
    <template v-for="i in 750" :key="i">
      <canvas
        class="title-desc-icon"
        :icon-index="i"
        width="32"
        height="32"
      ></canvas>
    </template>
    <!-- end: Current Location -->

    <!-- start: Quick Actions -->
    <v-card-text>
      <v-card-subtitle>Quick Actions</v-card-subtitle>
      <v-card-actions>
        <v-btn @click="gameMaster.goToTitle">To Title</v-btn>
        <v-btn @click="gameMaster.goToLoadScene">Load Game</v-btn>
        <v-btn @click="gameMaster.goToSaveScene">Save Game</v-btn>
      </v-card-actions>
    </v-card-text>
    <!-- end: Quick Actions -->
  </v-card>
</template>
