<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
import ViewTitle from "@/views/partials/ViewTitle.vue";
import { onMounted } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

const appStore = useAppStore();
const prison = computed(() => appStore.prison);

onMounted(() => KarrynUtils.renderIcons());
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <view-title title="Prison" />
    <v-divider class="my-1" />
    <div
      class="prison pa-2 d-flex flex-wrap justify-space-between flex-items-2"
    >
      <v-text-field
        disabled
        :model-value="prison.date"
        :label="$G.TextManager.day"
        :prefix="'[' + prison.currentRunDays + ']'"
        type="number"
      />
      <v-spacer />

      <v-text-field
        v-model.number="prison.funding"
        :label="$G.TextManager.funding"
        type="number"
      />

      <v-text-field
        v-model.number="prison.corruption"
        :label="$G.TextManager.corruption"
        type="number"
      />

      <v-text-field
        v-model.number="prison.income"
        :label="$G.TextManager.income"
        :prefix="'[' + prison.calculatedIncome + ']'"
        type="number"
      />

      <v-text-field
        v-model.number="prison.expense"
        :label="$G.TextManager.expense"
        type="number"
        :prefix="'[' + prison.calculatedExpense + ']'"
      />

      <v-text-field
        v-model.number="prison.order"
        :label="$G.TextManager.order"
        type="number"
      />
      <v-text-field
        v-model.number="prison.control"
        :label="$G.TextManager.orderChange"
        type="number"
      />
      <v-text-field
        v-model.number="prison.guardAggression"
        label="Guard Aggression"
        type="number"
      />
      <v-spacer />
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.prison > * {
  flex-basis: 50%;
  box-sizing: border-box;
  padding-right: 10px;
  padding-left: 10px;
}
.prison {
  min-height: 80vh; /* Set minimum height */
  max-height: 80vh; /* Set the maximum width of the container */
  overflow-y: auto; /* Enable scroll if needed */
}
</style>
