<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const { gameMaster } = storeToRefs(appStore);
const reloadPage = () => window.location.reload();
</script>

<template>
  <v-main>
    <v-card-text v-if="!gameMaster.isInGame()">
      Please start the game first. Then reload the page.
      <v-btn variant="text" icon="mdi-refresh" @click.stop="reloadPage"></v-btn>
    </v-card-text>
    <router-view v-else />
  </v-main>
</template>
