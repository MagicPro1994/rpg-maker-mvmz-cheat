<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = computed(() => appStore.karryn);
</script>

<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="stat in karryn.yParams" :key="stat.id">
      <v-text-field
        v-model.number="stat.plusValue"
        :label="stat.name + ' [LV ' + stat.level + ']'"
        :prefix="'[' + stat.value + ']'"
        type="number"
      />
    </template>

    <v-text-field
      v-model.number="karryn.xFatigue"
      label="Fatigue"
      suffix="[%]"
      type="number"
    />

    <v-text-field
      v-model.number="karryn.xCockiness"
      :label="$G.TextManager.cockiness"
      suffix="[%]"
      type="number"
    />
  </div>
</template>
