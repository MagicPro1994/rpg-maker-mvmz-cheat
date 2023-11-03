<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils, MESSAGES } from "@/wrappers/exclusive/KarrynUtils";

import ViewTitle from "@/views/partials/ViewTitle.vue";

const appStore = useAppStore();
const timeStamp = ref(appStore.timeStamp);
const prison = computed(() => appStore.prison);
</script>
<template>
  <span :title="timeStamp"></span>
  <v-card flat class="ma-0 pa-0">
    <view-title title="Prison" />
    <v-divider class="my-1" />
    <div v-if="!KarrynUtils.isInPrison">
      <v-card-text>
        {{ MESSAGES.FEATURE_NOT_AVAILABLE }}
      </v-card-text>
    </div>
    <div
      v-else
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
        v-model.number="prison.order"
        :label="$G.TextManager.order"
        type="number"
      />
      <v-text-field
        v-model.number="prison.control"
        :prefix="`[${prison.calculatedControl}]`"
        suffix="/day"
        :label="$G.TextManager.orderChange"
        type="number"
      />

      <v-text-field
        v-model.number="prison.edicts"
        :label="$G.TextManager.edicts"
        type="number"
      />

      <v-text-field
        v-model.number="prison.funding"
        :label="$G.TextManager.funding"
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
        :prefix="'[' + prison.calculatedExpense + ']'"
        type="number"
      />

      <v-text-field
        v-model.number="prison.corruption"
        :label="$G.TextManager.corruption"
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
  min-height: 78vh; /* Set minimum height */
  overflow-y: auto; /* Enable scroll if needed */
}
</style>
