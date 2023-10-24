<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const gameMaster = ref(appStore.gameMaster);
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Home</v-card-title>
    <v-divider class="my-1" />
    <!-- start: Current Location -->
    <div class="d-flex flex-row justify-space-between ma-2">
      <v-switch
        v-model="gameMaster.isCheatUnlocked"
        color="primary"
        label="Cheat Unlocked"
        class="mx-4"
        hide-details="auto"
      />
    </div>
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
