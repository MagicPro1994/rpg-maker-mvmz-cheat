<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = ref(appStore.karryn);
const TextManager = ref(opener.TextManager);
</script>

<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <v-text-field
      v-model.number="karryn.slutLevel"
      :label="TextManager.slutLevel"
      type="number"
    ></v-text-field>
    <v-spacer />
    <v-text-field
      disabled
      :model-value="karryn.kissLvl"
      :label="TextManager.kissingLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.pettingLvl"
      :label="TextManager.pettingLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.handjobLvl"
      :label="TextManager.handjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.blowjobLvl"
      :label="TextManager.blowjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.tittyFuckLvl"
      :label="TextManager.tittyFuckLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.footjobLvl"
      :label="TextManager.footjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.rimjobLvl"
      :label="TextManager.rimjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.pussySexLvl"
      :label="TextManager.pussySexLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.analSexLvl"
      :label="TextManager.analSexLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.masturbateLvl"
      :label="TextManager.masturbationLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.sadismLvl"
      :label="TextManager.sadismLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.masochismLvl"
      :label="TextManager.masochismLevel"
    ></v-text-field>
  </div>
</template>
