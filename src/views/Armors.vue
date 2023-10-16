<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const items = ref(appStore.gamePlayer.armors);

const search = ref("");
const isNamedOnly = ref(false);
const isOwnedOnly = ref(false);

const pagination = ref(appStore.pagination);

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    if (isNamedOnly.value && !item.name) return false;
    if (isOwnedOnly.value && item.quantity === 0) return false;
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
    title: "Description",
    key: "description",
  },
  {
    title: "Quantity",
    key: "quantity",
  },
];
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>
      <div class="d-flex flex-row justify-space-between" align="center">
        <span>Inventory - Armors</span>
      </div>
    </v-card-title>

    <v-divider class="my-1" />
    <v-card-text>
      <v-text-field v-model="search" label="Search" single-line hide-details />
      <div class="d-inline-flex flex-row px-4">
        <v-switch
          v-model="isNamedOnly"
          label="Named only"
          color="primary"
          hide-details
        ></v-switch>
        <v-spacer class="px-2"></v-spacer>
        <v-switch
          v-model="isOwnedOnly"
          label="Owned only"
          color="primary"
          hide-details
        ></v-switch>
      </div>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :search="search"
        :pagination.sync="pagination"
        :items-per-page="pagination.itemsPerPage"
        :items-per-page-options="pagination.itemsPerPageOptions"
      >
        <template v-slot:item.quantity="{ item }">
          <v-text-field
            v-model.number="item.quantity"
            density="compact"
            hide-details
          ></v-text-field>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
