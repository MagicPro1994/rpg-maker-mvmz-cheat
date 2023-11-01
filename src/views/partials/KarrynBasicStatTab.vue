<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = computed(() => appStore.karryn);
const timeStamp = computed(() => appStore.timeStamp);
</script>

<template>
  <!-- start: KarrynBasicStatTab.vue -->
  <span :title="timeStamp"></span>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <v-text-field
      v-model.number="karryn.xLevel"
      :label="$G.TextManager.wardenLevel"
      :suffix="'/' + karryn.yLevelLimit"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xExp"
      :label="$G.TextManager.exp"
      :suffix="'/' + karryn.yNextLevelExp"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xStamina"
      :label="$G.TextManager.hp"
      :suffix="'/' + karryn.mhp"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xEnergy"
      :label="$G.TextManager.mp"
      :suffix="'/' + karryn.mmp"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xWill"
      :label="$G.TextManager.willpower"
      :suffix="'/' + karryn.maxWill()"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xPleasure"
      :label="$G.TextManager.tp"
      :suffix="'/' + karryn.yMaxPleasure"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xClothingDurability"
      label="Clothing Durability"
      :suffix="'/' + karryn.yClothingMaxDurability"
      type="number"
    />

    <v-text-field
      :model-value="karryn._clothingStage"
      label="Clothing Stage"
      :suffix="'/' + karryn._clothingMaxStage"
      type="number"
    />
  </div>
  <!-- end: KarrynBasicStatTab.vue -->
</template>
