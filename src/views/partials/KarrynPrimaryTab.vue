<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = computed(() => appStore.karryn);
</script>

<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="attribute in karryn.yXParams" :key="attribute.id">
      <template v-if="attribute.name">
        <v-text-field
          v-model.number="attribute.plusValue"
          :label="attribute.name"
          :step="0.01"
          :prefix="'[' + attribute.displayValue + ']'"
          type="number"
        >
        </v-text-field>
      </template>
      <template v-else>
        <v-text-field
          :label="$G.TextManager.critDmgName"
          :model-value="karryn.yCritDmg"
          suffix="[%]"
          disabled
        />
      </template>
    </template>
  </div>
</template>
