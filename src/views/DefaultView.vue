<script setup>
import { onMounted } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
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
        <v-btn @click="KarrynUtils.goToTitle">To Title</v-btn>
        <v-btn @click="KarrynUtils.goToLoadScene">Load Game</v-btn>
        <v-btn @click="KarrynUtils.goToSaveScene">Save Game</v-btn>
      </v-card-actions>
    </v-card-text>
    <!-- end: Quick Actions -->
  </v-card>
</template>
