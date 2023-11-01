<script setup>
import { reactive, ref } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

import ViewTitle from "./partials/ViewTitle.vue";
import InBattleActorInfo from "./partials/InBattleActorInfo.vue";
import InBattleEnemyInfo from "./partials/InBattleEnemyInfo.vue";

const tabs = ref(["Party", "Enemy"]);
const selectedTab = ref("Party");
const gameParty = reactive(opener.$gameParty);
const gameTroop = reactive(opener.$gameTroop);
const partyMembers = ref(gameParty.battleMembers());
const enemyMembers = ref(gameTroop.members());
</script>
<template>
  <v-card class="ma-0 pa-0" flat>
    <view-title title="In Battle" />
    <v-divider class="my-1" />
    <div v-if="!KarrynUtils.isInBattle">
      <v-card-text>
        <span class="font-weight-bold">You are not in battle.</span>
      </v-card-text>
    </div>
    <div v-else>
      <div class="d-inline-flex pb-2">
        <v-btn
          variant="plain"
          color="secondary"
          density="compact"
          @click="KarrynUtils.clearSingleWave()"
        >
          Win Wave
        </v-btn>
        <v-spacer class="px-2" />
        <v-btn
          variant="plain"
          color="secondary"
          density="compact"
          @click="KarrynUtils.winAllWaves()"
        >
          Win Battle
        </v-btn>
        <v-spacer class="px-2" />
        <v-btn
          variant="plain"
          color="secondary"
          density="compact"
          @click="KarrynUtils.loseBattle()"
        >
          Lose Battle
        </v-btn>
        <v-spacer class="px-2" />
        <v-btn
          variant="plain"
          color="secondary"
          density="compact"
          @click="KarrynUtils.escapeBattle()"
        >
          Escape Battle
        </v-btn>
      </div>
      <v-tabs v-model="selectedTab" color="primary" grow>
        <v-tab :value="tabs[0]">{{ tabs[0] }}</v-tab>
        <v-tab :value="tabs[1]">{{ tabs[1] }}</v-tab>
      </v-tabs>

      <v-window v-model="selectedTab">
        <v-window-item :value="tabs[0]">
          <in-battle-actor-info :members="partyMembers" />
        </v-window-item>

        <v-window-item :value="tabs[1]">
          <in-battle-enemy-info :members="enemyMembers" />
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
