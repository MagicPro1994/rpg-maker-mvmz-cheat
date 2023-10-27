<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = ref(appStore.gameMaster.karrynActor);
const TextManager = opener.TextManager;
</script>
<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="attribute in karryn.primaryAttributes" :key="attribute.id">
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
          :label="TextManager.critDmgName"
          :model-value="karryn.critDamage"
          disabled
        />
      </template>
    </template>
  </div>
</template>
