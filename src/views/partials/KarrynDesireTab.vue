<script setup>
import { computed } from "vue";
import { useAppStore } from "@/store/app";
import { propertyMapper as $p } from "@/wrappers/exclusive/KarrynActorHelper";

const appStore = useAppStore();
const gameMaster = computed(() => appStore.gameMaster);
const karryn = computed(() => appStore.karryn);
const timeStamp = computed(() => appStore.timeStamp);
</script>
<template>
  <span :title="timeStamp"></span>

  <v-card-subtitle>Desires</v-card-subtitle>
  <v-switch
    class="px-4"
    color="primary"
    label="Enable Requirement Override"
    v-model.number="gameMaster.isDesireReqUnlocked"
    density="compact"
    hide-details="auto"
  ></v-switch>

  <!-- start: Mouth Desire -->
  <div class="desire-line-container">
    <i
      class="rpg-icon rpg-icon-i57"
      :title="$G.TextManager.statusMenuMouthDesireReq"
    ></i>

    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqSuckFingers]"
        :label="$G.TextManager.profileRecordSuckFingers"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqKiss]"
        :label="$G.TextManager.profileRecordKiss"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        density="compact"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.mouthReqRimjob]"
        :label="$G.TextManager.profileRecordRimjob"
        type="number"
        density="compact"
        hide-details="auto"
      ></v-text-field>
    </div>
  </div>
  <!-- end: Mouth Desire -->

  <!-- start: Boobs Desire -->
  <div class="desire-line-container">
    <i
      class="rpg-icon rpg-icon-i58"
      :title="$G.TextManager.statusMenuBoobsDesireReq"
    ></i>

    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsReqBoobsPetting]"
        :label="$G.TextManager.profileRecordBoobsPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsReqNipplesPetting]"
        :label="$G.TextManager.profileRecordNipplesPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.boobsReqTittyFuck]"
        :label="$G.TextManager.profileRecordTittyFuck"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Boobs Desire -->

  <!-- start: Pussy Desire -->
  <div class="desire-line-container">
    <i
      class="rpg-icon rpg-icon-i59"
      :title="$G.TextManager.statusMenuPussyDesireReq"
    ></i>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqClitPetting]"
        :label="$G.TextManager.profileRecordClitPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqClitToy]"
        :label="$G.TextManager.profileRecordClitToy"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqCunnilingus]"
        :label="$G.TextManager.profileRecordCunnilingus"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussyPetting]"
        :label="$G.TextManager.profileRecordPussyPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussyToy]"
        :label="$G.TextManager.profileRecordPussyToy"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.pussyReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        density="compact"
        hide-details="auto"
      ></v-text-field>
    </div>
  </div>
  <!-- end: Pussy Desire -->

  <!-- start: Butt Desire -->
  <div class="desire-line-container">
    <i
      class="rpg-icon rpg-icon-i60"
      :title="$G.TextManager.statusMenuButtDesireReq"
    ></i>

    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqButtPetting]"
        :label="$G.TextManager.profileRecordButtPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqButtSpank]"
        :label="$G.TextManager.profileRecordButtSpank"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqAnalPetting]"
        :label="$G.TextManager.profileRecordAnalPetting"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqAnalToy]"
        :label="$G.TextManager.profileRecordAnalToy"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.buttReqAnalSex]"
        :label="$G.TextManager.profileRecordAnalSex"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Butt Desire -->

  <!-- start: Cock Desire-->
  <div class="desire-line-container">
    <i
      class="rpg-icon rpg-icon-i61"
      :title="$G.TextManager.statusMenuCockDesireReq"
    ></i>

    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqBodyBukkake]"
        :label="$G.TextManager.profileRecordBodyBukkake"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqHandjob]"
        :label="$G.TextManager.profileRecordHandjob"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqBlowjob]"
        :label="$G.TextManager.profileRecordBlowjob"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqTittyFuck]"
        :label="$G.TextManager.profileRecordTittyFuck"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field
      ><v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqFootjob]"
        :label="$G.TextManager.profileRecordFootjob"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqPussySex]"
        :label="$G.TextManager.profileRecordPussySex"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <div class="desire-line-container">
    <i class="rpg-icon rpg-icon-i0"></i>
    <div class="desire-container">
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqAnalSex]"
        :label="$G.TextManager.profileRecordAnalSex"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqFaceBukkake]"
        :label="$G.TextManager.profileRecordFaceBukkake"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqSwallow]"
        :label="$G.TextManager.profileRecordSwallow"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqPussyCreampie]"
        :label="$G.TextManager.profileRecordPussyCreampie"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>

      <v-text-field
        :disabled="!gameMaster.isDesireReqUnlocked"
        v-model.number="karryn[$p.cockReqAnalCreampie]"
        :label="$G.TextManager.profileRecordAnalCreampie"
        type="number"
        density="compact"
        hide-details="auto"
      >
      </v-text-field>
    </div>
  </div>
  <!-- end: Cock Desire-->
</template>

<style scoped lang="scss">
.desire-line-container {
  display: inline-flex;
  padding-bottom: 0.6rem;
  align-items: center;
}

.desire-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  .v-input {
    width: 7rem;
    margin-right: 0.6rem;
  }
}

.rpg-icon {
  margin-right: 1rem;
}
</style>
