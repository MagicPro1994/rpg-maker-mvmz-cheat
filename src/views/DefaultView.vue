<script setup>
import { ref } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

const items = ref(Array.from({ length: 24 }, (k, v) => v + 1));

const api = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 24 }, (k, v) => v + items.value.at(-1) + 1));
    }, 100);
  });
};

const load = async ({ done }) => {
  if (items.value.length >= 720) {
    done("empty");
    return;
  }

  // Perform API call
  const res = await api();

  items.value.push(...res);

  done("ok");
};
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Home</v-card-title>
    <v-divider class="my-1" />
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

    <v-card-text>
      <template v-for="i in 32" :key="i">
        <span :title="`Text Color ${i - 1}`" :class="`text-c${i - 1}`"
          >[{{ i - 1 }}]</span
        >
      </template>
    </v-card-text>

    <v-infinite-scroll :items="items" :onLoad="load">
      <v-card-text>
        <template v-for="(item, index) in items" :key="item">
          <i
            :title="`Icon ${item} | rpg-icon-i${index}`"
            :class="`rpg-icon rpg-icon-i${index}`"
          ></i>
        </template>
      </v-card-text>
    </v-infinite-scroll>
  </v-card>
</template>
