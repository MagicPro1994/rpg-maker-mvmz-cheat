<script setup>
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const partyMembers = ref(appStore.gameMaster.partyMembers);
const selectedMember = ref(null);

onMounted(() => {
  if (opener.$gameParty && opener.$gameParty.exists()) {
    selectedMember.value = partyMembers.value[0];
  }
});
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Party Members' Stats</v-card-title>
    <v-divider class="my-1" />

    <!-- start: Select Member -->
    <v-select
      v-model="selectedMember"
      :items="partyMembers"
      item-title="displayName"
      label="Select Member"
      class="ma-2"
      return-object
      hide-details="auto"
    />
    <!-- end: Select Member -->

    <!-- start: Member Stats -->
    <div v-if="selectedMember !== null">
      <v-switch
        v-model="selectedMember.isGodMode"
        color="primary"
        label="God Mode"
        class="mx-4"
        hide-details="auto"
      />
      <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
        <v-text-field
          v-model.number="selectedMember.level"
          label="Lv"
          type="number"
        />
        <v-text-field
          v-model.number="selectedMember.exp"
          label="EXP"
          type="number"
        />

        <!-- start: HP & Max HP -->
        <v-text-field
          v-model.number="selectedMember.hp"
          :disabled="selectedMember.isGodMode"
          label="HP"
          type="number"
        />
        <v-text-field
          v-model.number="selectedMember.maxHp"
          label="MAX HP"
          type="number"
        />
        <!-- end: HP & Max HP -->

        <!-- start: MP & Max MP -->
        <v-text-field
          v-model.number="selectedMember.mp"
          :disabled="selectedMember.isGodMode"
          label="MP"
          type="number"
        />
        <v-text-field
          v-model.number="selectedMember.maxMp"
          label="MAX MP"
          type="number"
        />
        <!-- end: MP & Max MP -->

        <!-- start: TP & Max TP -->
        <v-text-field
          v-model.number="selectedMember.tp"
          :disabled="selectedMember.isGodMode"
          label="TP"
          type="number"
        />
        <v-text-field
          disabled
          v-model.number="selectedMember.maxTp"
          label="MAX TP"
          type="number"
        />
        <!-- end: TP & Max TP -->

        <template
          v-for="statPlus in selectedMember.paramPlusList"
          :key="statPlus.id"
        >
          <v-text-field
            v-model.number="statPlus.value"
            :label="statPlus.name"
            :prefix="'[' + statPlus.accumulatedValue + ']'"
            type="number"
          />
        </template>
      </div>
    </div>
    <v-row v-else>
      <v-col cols="12">
        <v-alert type="info" outlined dense class="ma-2">
          Select a party member to view their stats.
        </v-alert>
      </v-col>
    </v-row>
    <!-- end: Member Stats -->
  </v-card>
</template>

<style scoped>
.flex-items-2 > * {
  flex-basis: 50%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
