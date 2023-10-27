<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = ref(appStore.karryn);
const textManager = ref(opener.TextManager);
</script>
<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <v-text-field
      v-model.number="karryn.level"
      :label="textManager.wardenLevel"
      :prefix="'[' + karryn.actor.getWardenLevelLimit() + ']'"
      type="number"
    />
    <v-text-field
      v-model.number="karryn.exp"
      :label="textManager.exp"
      type="number"
    />
    <!-- start: HP & Max HP -->
    <v-text-field
      v-model.number="karryn.hp"
      :disabled="karryn.isGodMode"
      :label="textManager.hp"
      type="number"
    />
    <v-text-field
      v-model.number="karryn.maxHp"
      :label="textManager.param(0)"
      type="number"
    />
    <!-- end: HP & Max HP -->

    <!-- start: MP & Max MP -->
    <v-text-field
      v-model.number="karryn.mp"
      :disabled="karryn.isGodMode"
      :label="textManager.mp"
      type="number"
    />
    <v-text-field
      v-model.number="karryn.maxMp"
      :label="textManager.param(1)"
      type="number"
    />
    <!-- end: MP & Max MP -->

    <!-- start: Will & Max Will -->
    <v-text-field
      v-model.number="karryn.will"
      :disabled="karryn.isGodMode"
      :label="textManager.willpower"
      type="number"
    />
    <v-text-field
      v-model.number="karryn.maxWill"
      :label="textManager.maxWillpower"
      type="number"
    />

    <!-- start: TP & Max TP -->
    <v-text-field
      v-model.number="karryn.tp"
      :disabled="karryn.isGodMode"
      :label="textManager.tp"
      type="number"
    />
    <v-text-field
      disabled
      v-model.number="karryn.maxTp"
      :label="textManager.tp"
      type="number"
    />
    <!-- end: TP & Max TP -->
  </div>
</template>
