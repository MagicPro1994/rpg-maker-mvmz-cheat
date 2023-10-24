<script setup></script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Locations</v-card-title>
    <v-divider class="my-1" />
    <!-- start: Current Location -->
    <div class="d-flex flex-row justify-space-between ma-2">
      <v-select hide-details="auto"></v-select>
      <v-text-field label="X" type="number" hide-details="auto"></v-text-field>
      <v-text-field label="Y" type="number" hide-details="auto"></v-text-field>
      <v-btn>Save</v-btn>
    </div>
    <!-- end: Current Location -->

    <!-- start: Saved Locations -->
    <!-- end: Saved Locations -->
  </v-card>
</template>
