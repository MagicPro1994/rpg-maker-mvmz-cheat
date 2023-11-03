<script setup>
import { defineAsyncComponent, computed, ref, watch } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";


const ViewTitle = defineAsyncComponent(() => import("./partials/ViewTitle.vue"));
const InBattleActorInfo = defineAsyncComponent(() => import("./partials/InBattleActorInfo.vue"));
const InBattleEnemyInfo = defineAsyncComponent(() => import("./partials/InBattleEnemyInfo.vue"));

const appStore = useAppStore();
const timestamp = computed(() => appStore.timeStamp);
const isInBattle = ref(KarrynUtils.isInBattle);

watch(timestamp, () => {
  isInBattle.value = KarrynUtils.isInBattle;
});
</script>
<template>
  <span :title="timestamp"></span>
  <v-card class="ma-0 pa-0" flat>
    <view-title title="In Battle" />
    <v-divider class="my-1" />
    <div v-if="!isInBattle">
      <v-card-text>
        <span class="font-weight-bold">You are not in battle.</span>
      </v-card-text>
    </div>
    <div v-else class="scrollable-container--full">
      <v-card-subtitle>Karryn</v-card-subtitle>
      <in-battle-actor-info />
      <v-card-subtitle>Enemies</v-card-subtitle>
      <in-battle-enemy-info />
    </div>
  </v-card>
</template>
