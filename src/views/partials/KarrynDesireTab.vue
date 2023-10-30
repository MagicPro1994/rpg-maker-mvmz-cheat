<script setup>
import { computed, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { wrapper as $p } from "@/wrappers/exclusive/KarrynActorHelper";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

const appStore = useAppStore();
const gameMaster = computed(() => appStore.gameMaster);

const props = defineProps({
  actor: {
    type: Object,
    required: true,
  },
});

const karryn = computed(() => props.actor);
onMounted(() => KarrynUtils.renderIcons());
</script>
<template>
  <v-card-subtitle>Desires & Requirements</v-card-subtitle>
  <v-switch
    class="px-4"
    v-model.number="gameMaster.isDesireReqUnlocked"
    label="Enable Desire Customization"
    density="compact"
    hide-details="auto"
  ></v-switch>

  <!-- start: Mouth Desire -->
  <div class="d-inline-flex pb-4">
    <label>
      <canvas class="icon" icon-index="57" width="32" height="32"></canvas>
      {{ $G.TextManager.statusMenuMouthDesireReq }}
    </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.mouthDesire]"
        label="Mouth Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.mouthReqSuckFingers]"
        :label="$G.TextManager.profileRecordSuckFingers"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.mouthReqKiss]"
        :label="$G.TextManager.profileRecordKiss"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.mouthReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        v-model.number="karryn[$p.mouthReqRimjob]"
        :label="$G.TextManager.profileRecordRimjob"
        type="number"
        hide-details="auto"
      ></v-text-field>
    </div>
  </div>
  <!-- end: Mouth Desire -->

  <!-- start: Boobs Desire -->
  <div class="d-inline-flex pb-4">
    <label>
      <canvas class="icon" icon-index="58" width="32" height="32"></canvas>
      {{ $G.TextManager.statusMenuBoobsDesireReq }}
    </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.boobsDesire]"
        label="Boobs Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.boobsReqBoobsPetting]"
        :label="$G.TextManager.profileRecordBoobsPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.boobsReqNipplesPetting]"
        :label="$G.TextManager.profileRecordNipplesPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.boobsReqTittyFuck]"
        :label="$G.TextManager.profileRecordTittyFuck"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Boobs Desire -->

  <!-- start: Pussy Desire -->
  <div class="d-inline-flex pb-2">
    <label>
      <canvas class="icon" icon-index="59" width="32" height="32"></canvas>
      {{ $G.TextManager.statusMenuPussyDesireReq }}
    </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.pussyDesire]"
        label="Pussy Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.pussyReqClitPetting]"
        :label="$G.TextManager.profileRecordClitPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.pussyReqClitToy]"
        :label="$G.TextManager.profileRecordClitToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.pussyReqCunnilingus]"
        :label="$G.TextManager.profileRecordCunnilingus"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.pussyReqPussyPetting]"
        :label="$G.TextManager.profileRecordPussyPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.pussyReqPussyToy]"
        :label="$G.TextManager.profileRecordPussyToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.pussyReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label> </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.pussyReqPussyToy]"
        :label="$G.TextManager.profileRecordPussyToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.pussyReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Pussy Desire -->

  <!-- start: Butt Desire -->
  <div class="d-inline-flex pb-2">
    <label>
      <canvas class="icon" icon-index="60" width="32" height="32"></canvas>
      {{ $G.TextManager.statusMenuButtDesireReq }}
    </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.buttDesire]"
        label="Butt Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.buttReqButtPetting]"
        :label="$G.TextManager.profileRecordButtPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.buttReqButtSpank]"
        :label="$G.TextManager.profileRecordButtSpank"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.buttReqAnalPetting]"
        :label="$G.TextManager.profileRecordAnalPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.buttReqAnalToy]"
        :label="$G.TextManager.profileRecordAnalToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label> </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.buttReqAnalSex]"
        :label="$G.TextManager.profileRecordAnalSex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Butt Desire -->

  <!-- start: Cock Desire-->
  <div class="d-inline-flex pb-2">
    <label>
      <canvas class="icon" icon-index="61" width="32" height="32"></canvas>
      {{ $G.TextManager.statusMenuCockDesireReq }}
    </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.cockDesire]"
        label="Cock Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.cockReqBodyBukkake]"
        :label="$G.TextManager.profileRecordBodyBukkake"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.cockReqHandjob]"
        :label="$G.TextManager.profileRecordHandjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.cockReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        v-model.number="karryn[$p.cockReqTittyFuck]"
        :label="$G.TextManager.profileRecordTittyFuck"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-2">
    <label> </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.cockReqFootjob]"
        :label="$G.TextManager.profileRecordFootjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.cockReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.buttReqAnalSex]"
        :label="$G.TextManager.profileRecordAnalSex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.cockReqFaceBukkake]"
        :label="$G.TextManager.profileRecordFaceBukkake"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.cockReqSwallow]"
        :label="$G.TextManager.profileRecordSwallow"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label> </label>
    <div class="desire-container">
      <v-text-field
        v-model.number="karryn[$p.cockReqPussyCreampie]"
        :label="$G.TextManager.profileRecordPussyCreampie"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        v-model.number="karryn[$p.cockReqAnalCreampie]"
        :label="$G.TextManager.profileRecordAnalCreampie"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Cock Desire-->
</template>

<style scoped>
.desire-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  .v-input {
    width: 7rem;
    margin-right: 1rem;
  }
}

label {
  width: 150px;
  display: flex;
  align-items: center;
  font-size: small;
}

.icon {
  margin-right: 5px;
}
</style>
