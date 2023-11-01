<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
import { wrapper as $p } from "@/wrappers/exclusive/KarrynActorHelper";

const appStore = useAppStore();
const gameMaster = computed(() => appStore.gameMaster);
const karryn = computed(() => appStore.karryn);
const timeStamp = computed(() => appStore.timeStamp);
</script>
<template>
  <span :title="timeStamp"></span>

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
      <i class="rpg-icon rpg-icon-i57"></i>
      <span>{{ $G.TextManager.statusMenuMouthDesireReq }}</span>
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
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqSuckFingers]"
        :label="$G.TextManager.profileRecordSuckFingers"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqKiss]"
        :label="$G.TextManager.profileRecordKiss"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
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
      <i class="rpg-icon rpg-icon-i58"></i>
      <span>{{ $G.TextManager.statusMenuBoobsDesireReq }}</span>
    </label>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsDesire]"
        label="Boobs Desire"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsReqBoobsPetting]"
        :label="$G.TextManager.profileRecordBoobsPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsReqNipplesPetting]"
        :label="$G.TextManager.profileRecordNipplesPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
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
      <i class="rpg-icon rpg-icon-i59"></i>
      <span>{{ $G.TextManager.statusMenuPussyDesireReq }}</span>
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
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqClitPetting]"
        :label="$G.TextManager.profileRecordClitPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqClitToy]"
        :label="$G.TextManager.profileRecordClitToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqCunnilingus]"
        :label="$G.TextManager.profileRecordCunnilingus"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussyPetting]"
        :label="$G.TextManager.profileRecordPussyPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussyToy]"
        :label="$G.TextManager.profileRecordPussyToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label></label>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussyToy]"
        :label="$G.TextManager.profileRecordPussyToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
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
      <i class="rpg-icon rpg-icon-i60"></i>
      <span>{{ $G.TextManager.statusMenuButtDesireReq }}</span>
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
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqButtPetting]"
        :label="$G.TextManager.profileRecordButtPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqButtSpank]"
        :label="$G.TextManager.profileRecordButtSpank"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqAnalPetting]"
        :label="$G.TextManager.profileRecordAnalPetting"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqAnalToy]"
        :label="$G.TextManager.profileRecordAnalToy"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label></label>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
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
      <i class="rpg-icon rpg-icon-i61"></i>
      <span>{{ $G.TextManager.statusMenuCockDesireReq }}</span>
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
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqBodyBukkake]"
        :label="$G.TextManager.profileRecordBodyBukkake"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqHandjob]"
        :label="$G.TextManager.profileRecordHandjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqTittyFuck]"
        :label="$G.TextManager.profileRecordTittyFuck"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-2">
    <label></label>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqFootjob]"
        :label="$G.TextManager.profileRecordFootjob"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqAnalSex]"
        :label="$G.TextManager.profileRecordAnalSex"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqFaceBukkake]"
        :label="$G.TextManager.profileRecordFaceBukkake"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqSwallow]"
        :label="$G.TextManager.profileRecordSwallow"
        type="number"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="d-inline-flex pb-4">
    <label></label>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqPussyCreampie]"
        :label="$G.TextManager.profileRecordPussyCreampie"
        type="number"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
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

<style scoped lang="scss">
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
  span {
    width: 110px;
    word-wrap: break-word;
  }
}

.rpg-icon {
  margin-right: 5px;
}
</style>
