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
    <template v-for="attribute in karryn.yElements" :key="attribute.id">
      <v-text-field
        v-if="attribute.shouldDisplay()"
        disabled
        :model-value="attribute.displayValue"
        :label="attribute.name"
      />
    </template>
  </div>
</template>
