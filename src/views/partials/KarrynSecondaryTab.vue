<script setup>
import { computed } from "vue";

const props = defineProps({
  actor: {
    type: Object,
    required: true,
  },
});

const karryn = computed(() => props.actor);
</script>
<template>
  <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
    <template v-for="attribute in karryn.ySParams" :key="attribute.id">
      <v-text-field
        v-model.number="attribute.plusValue"
        :label="attribute.name"
        :step="0.01"
        :prefix="'[' + attribute.displayValue + ']'"
        type="number"
      >
      </v-text-field>
    </template>
  </div>
</template>
