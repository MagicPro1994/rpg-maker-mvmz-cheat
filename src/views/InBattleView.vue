<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import InBattleMemberInfo from "@/views/partials/InBattleMemberInfo.vue";
const appStore = useAppStore();

const tabs = ref(["Party", "Enemy"]);
const selectedTab = ref("Party");
const gamePlayer = ref(appStore.gamePlayer);
const partyMembers = ref(gamePlayer.value.partyBattleMembers);
const enemyMembers = ref(gamePlayer.value.enemyMembers);
</script>
<template>
  <v-card class="ma-0 pa-0" flat>
    <v-card-title>In Battle</v-card-title>
    <v-divider class="my-1" />

    <v-tabs v-model="selectedTab" color="primary" grow>
      <v-tab :value="tabs[0]">{{ tabs[0] }}</v-tab>
      <v-tab :value="tabs[1]">{{ tabs[1] }}</v-tab>
    </v-tabs>

    <v-window v-model="selectedTab">
      <v-window-item :value="tabs[0]">
        <in-battle-member-info :members="partyMembers" />
      </v-window-item>

      <v-window-item :value="tabs[1]">
        <in-battle-member-info :members="enemyMembers" />
      </v-window-item>
    </v-window>
  </v-card>
</template>
