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
    <!-- start: Cheat Switches -->
    <v-switch
      v-model="karryn.isInvincible"
      color="primary"
      label="Invincible"
      class="flex-basis-100"
      hide-details="auto"
    />

    <v-switch
      v-model="karryn.isNoClothingDamage"
      color="primary"
      label="Ignore Clothing Damage"
      hide-details="auto"
    />

    <v-switch
      v-model="karryn.isNoStaminaCost"
      color="primary"
      label="No Stamina Skill Cost"
      hide-details="auto"
    />

    <v-switch
      v-model="karryn.isNoEnergyCost"
      color="primary"
      label="No Energy Skill Cost"
      hide-details="auto"
    />

    <v-switch
      v-model="karryn.isNoWillCost"
      color="primary"
      label="No Will Skill Cost"
      hide-details="auto"
    />

    <v-switch
      v-model="karryn.isNoPaySkillCost"
      color="primary"
      label="Disable Pay Skill Cost"
      hide-details="auto"
    />
    <!-- end: Cheat Switches-->
  </div>
</template>
