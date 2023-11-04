<script setup>
import { ref, computed } from "vue";

const iconPage = ref(1);
const pagePerView = 72;
const pagePlus = computed(() => (iconPage.value - 1) * pagePerView);
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Home</v-card-title>
    <v-divider class="my-1" />
    <!-- start: Quick Actions -->
    <v-card-text>
      <p>
        You can edit or view Karryn's status, stats, etc. on
        <router-link to="/karryn">Karryn</router-link> page.
      </p>
      <p>
        You can edit or view things related to Prison on
        <router-link to="/prison">Prison</router-link> page.
      </p>
    </v-card-text>
    <!-- end: Quick Actions -->

    <v-card-text>
      <p>Here are the text colors used in the game:</p>
      <template v-for="i in 32" :key="i">
        <span :title="`Text Color ${i - 1}`" :class="`text-c${i - 1}`">
          [{{ i - 1 }}]
        </span>
      </template>
    </v-card-text>

    <v-card-text v-once>
      <p>Here are the icons used in the game:</p>
      <template v-for="(item, index) in pagePerView" :key="item">
        <i
          :title="`Icon ${item - 1 + pagePlus} | rpg-icon-i${index + pagePlus}`"
          :class="`rpg-icon rpg-icon-i${index + pagePlus}`"
        ></i>
      </template>
      <nav>
        <template v-for="i in 720 / pagePerView" :key="i">
          <v-btn
            :disabled="iconPage === i"
            @click="iconPage = i"
            variant="text"
            density="compact"
            class="ma-1"
          >
            {{ i }}
          </v-btn>
        </template>
      </nav>
    </v-card-text>
  </v-card>
</template>
