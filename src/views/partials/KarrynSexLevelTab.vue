<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const karryn = computed(() => appStore.karryn);
const timeStamp = computed(() => appStore.timeStamp);
</script>
<template>
  <span :title="timeStamp"></span>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <v-text-field
      v-model.number="karryn.xSlutLevel"
      :label="$G.TextManager.slutLevel"
      type="number"
    ></v-text-field>
    <v-spacer />
    <v-text-field
      disabled
      :model-value="karryn.kissLvl()"
      :label="$G.TextManager.kissingLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.pettingLvl()"
      :label="$G.TextManager.pettingLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.handjobLvl()"
      :label="$G.TextManager.handjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.blowjobLvl()"
      :label="$G.TextManager.blowjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.tittyFuckLvl()"
      :label="$G.TextManager.tittyFuckLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.footjobLvl()"
      :label="$G.TextManager.footjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.rimjobLvl()"
      :label="$G.TextManager.rimjobLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.pussySexLvl()"
      :label="$G.TextManager.pussySexLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.analSexLvl()"
      :label="$G.TextManager.analSexLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.masturbateLvl()"
      :label="$G.TextManager.masturbationLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.sadismLvl()"
      :label="$G.TextManager.sadismLevel"
    ></v-text-field>
    <v-text-field
      disabled
      :model-value="karryn.masochismLvl()"
      :label="$G.TextManager.masochismLevel"
    ></v-text-field>
  </div>
</template>
