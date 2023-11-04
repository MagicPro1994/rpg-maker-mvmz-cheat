<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
import { propertyMapper as $p } from "@/wrappers/exclusive/KarrynActorHelper";

const appStore = useAppStore();
const timeStamp = computed(() => appStore.timeStamp);
const karryn = computed(() => appStore.karryn);
</script>
<template>
  <span :title="timeStamp"></span>
  <span :title="karryn.xCockDesire"></span>
  <v-card-text>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.cockDesire]"
        label="Cock Desire"
        type="number"
        hide-details="auto"
      />
      <v-text-field
        v-model.number="karryn[$p.mouthDesire]"
        label="Mouth Desire"
        type="number"
        hide-details="auto"
      />
      <v-text-field
        v-model.number="karryn[$p.boobsDesire]"
        label="Boobs Desire"
        type="number"
        hide-details="auto"
      />
      <v-text-field
        v-model.number="karryn[$p.pussyDesire]"
        label="Pussy Desire"
        type="number"
        hide-details="auto"
      />

      <v-text-field
        v-model.number="karryn[$p.buttDesire]"
        label="Butt Desire"
        type="number"
        hide-details="auto"
      />
    </div>
    <div class="desire-container">
      <v-text-field
        type="number"
        :label="$G.TextManager.hp"
        v-model.number="karryn[$p.hp]"
        :suffix="'/' + karryn.mhp"
        density="compact"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        type="number"
        :label="$G.TextManager.mp"
        v-model.number="karryn[$p.mp]"
        :suffix="'/' + karryn.mmp"
        density="compact"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        type="number"
        :label="$G.TextManager.willpower"
        v-model.number="karryn[$p.will]"
        :suffix="'/' + karryn.maxwill"
        density="compact"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        type="number"
        :label="$G.TextManager.basic(6)"
        v-model.number="karryn[$p.tp]"
        :suffix="'/' + karryn[$p.maxTp]"
        density="compact"
        hide-details="auto"
      ></v-text-field>

      <div class="v-input"></div>
    </div>
    <div class="d-inline-flex align-center">
      <i
        class="rpg-icon rpg-icon-i320"
        title="Increase all desires"
        @click="karryn.setDesires(999)"
      ></i>
      <i
        class="rpg-icon rpg-icon-i328"
        title="Decrease all desires"
        @click="karryn.setDesires(0)"
      ></i>
      <i
        class="rpg-icon rpg-icon-i322"
        title="Recover all stamina"
        @click="karryn[$p.hp] = karryn.mhp"
      ></i>
      <i
        class="rpg-icon rpg-icon-i240"
        title="Lose all stamina"
        @click="karryn[$p.hp] = 0"
      ></i>
      <i
        class="rpg-icon rpg-icon-i330"
        title="Recover all energy"
        @click="karryn[$p.mp] = karryn.mmp"
      ></i>
      <i
        class="rpg-icon rpg-icon-i241"
        title="Lose all energy"
        @click="karryn[$p.mp] = 0"
      ></i>
      <i
        class="rpg-icon rpg-icon-i99"
        title="Raise pleasure to max"
        @click="karryn[$p.tp] = karryn[$p.maxTp]"
      ></i>
      <i
        class="rpg-icon rpg-icon-i186"
        title="Lose all pleasure"
        @click="karryn[$p.tp] = 0"
      ></i>
    </div>
  </v-card-text>
</template>

<style scoped lang="scss">
.desire-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;

  .v-input {
    flex: 1;
    width: 7rem;
    margin-right: 1rem;
  }
}

.rpg-icon {
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
}
</style>
