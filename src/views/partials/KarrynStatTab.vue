<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = ref(appStore.karryn);
</script>
<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="stat in karryn.stats" :key="stat.id">
      <v-text-field
        v-model.number="stat.plusValue"
        :label="stat.name + ' [LV ' + stat.level + ']'"
        :prefix="'[' + stat.value + ']'"
        type="number"
      />
    </template>

    <v-text-field
      v-model.number="karryn.fatigue"
      label="Fatigue"
      suffix="[%]"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.slutLevel"
      label="Slut Level"
      type="number"
    />
  </div>
</template>
