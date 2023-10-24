<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";

const appStore = useAppStore();
const items = ref(appStore.gameMaster.variables);
const search = ref("");
const isNamedOnly = ref(false);
const pagination = ref(appStore.pagination);

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    if (isNamedOnly.value && !item.name) return false;
    if (!search.value) return true;
    return item.name.toLowerCase().includes(search.value.toLowerCase());
  });
});

const headers = [
  {
    title: "ID",
    sortable: true,
    key: "id",
  },
  {
    title: "Name",
    sortable: true,
    key: "name",
  },
  {
    title: "Value",
    key: "value",
  },
];
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>
      <div class="d-flex flex-row justify-space-between" align="center">
        <span>Game Variables</span>
      </div>
    </v-card-title>

    <v-divider class="my-1" />
    <v-card-text>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details="auto"
      />
      <div class="d-inline-flex flex-row px-4">
        <v-switch
          v-model="isNamedOnly"
          label="Named only"
          color="primary"
          hide-details="auto"
        ></v-switch>
      </div>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :search="search"
        :items-per-page="pagination.itemsPerPage"
        :items-per-page-options="pagination.itemsPerPageOptions"
      >
        <!--eslint-disable-next-line vue/valid-v-slot-->
        <template v-slot:item.value="{ item }">
          <v-text-field
            v-model.number="item.value"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
