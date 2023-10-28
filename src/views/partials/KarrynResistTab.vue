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
