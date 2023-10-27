<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const karryn = ref(appStore.gameMaster.karrynActor);
</script>
<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="attribute in karryn.resistAttributes" :key="attribute.id">
      <v-text-field
        v-if="attribute.shouldDisplay()"
        disabled
        :model-value="attribute.displayValue"
        :label="attribute.name"
      />
    </template>
  </div>
</template>
