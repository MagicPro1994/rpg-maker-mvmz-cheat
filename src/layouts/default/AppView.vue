<script setup>
const reloadPage = () => window.location.reload();
</script>

<template>
  <v-main>
    <v-card-text v-if="!$G.KarrynUtils">
      Please start the game first. Then reload the page.
      <v-btn variant="text" icon="mdi-refresh" @click.stop="reloadPage"></v-btn>
    </v-card-text>
    <router-view v-else />
  </v-main>
</template>
