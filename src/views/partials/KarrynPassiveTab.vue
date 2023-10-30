<script setup>
import { computed, ref, onMounted } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();

const props = defineProps({
  actor: {
    type: Object,
    required: true,
  },
});

const karryn = computed(() => props.actor);

const selectedCategory = ref(null);
const categories = computed(() => {
  return appStore.passiveCategories;
});

const search = ref("");
const searchCategory = ref("");
const isOwnedOnly = ref(true);
const items = ref(appStore.passives);
const pagination = ref(appStore.pagination);

const headers = [
  { title: "ID", sortable: true, key: "id" },
  { title: "Name", sortable: true, key: "name" },
  { title: "Description", key: "description" },
  { title: "Obtained", key: "owned" },
];

const filteredItems = computed(() => {
  try {
    return items.value.filter((item) => {
      if (isOwnedOnly.value && !karryn.value.hasPassive(item.id)) {
        return false;
      }

      if (search.value && !KarrynUtils.searchPassive(item, search.value)) {
        return false;
      }

      if (
        selectedCategory.value !== null &&
        !selectedCategory.value.includes(item)
      ) {
        return false;
      }

      return true;
    });
  } catch (e) {
    console.log(e);
    return [];
  }
});

onMounted(() => {
  if (categories.value.length > 0) {
    selectedCategory.value = categories.value[0];
  }
});

const onCategoryBlur = () => {
  if (typeof selectedCategory.value === "string" || !selectedCategory.value) {
    selectedCategory.value = categories.value[0];
    searchCategory.value = selectedCategory.value.name;
  }
};
</script>
<template>
  <v-card-text class="scrollable-container">
    <div class="d-flex flex-wrap justify-space-between ma-2 flex-items-2">
      <v-text-field v-model="search" label="Search" hide-details="auto" />
      <v-combobox
        v-model="selectedCategory"
        v-model:search="searchCategory"
        :items="categories"
        item-title="name"
        item-value="id"
        label="Passive Category"
        hide-details="auto"
        @blur="onCategoryBlur"
      />
      <v-checkbox
        v-model="isOwnedOnly"
        label="Owned Only"
        hide-details="auto"
      />
    </div>

    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :search="search"
      :items-per-page="pagination.itemsPerPage"
      :items-per-page-options="pagination.itemsPerPageOptions"
    >
      <template v-slot:item="{ item }">
        <tr :class="{ owned: karryn.hasPassive(item.id) }">
          <td class="id">{{ item.id }}</td>
          <td
            class="name"
            :style="item.colorCode !== null ? { color: item.colorCode } : {}"
          >
            {{ item.name }}
          </td>
          <td class="description"><pre v-html="item.description"></pre></td>
          <td class="day-obtained">
            {{ item.dayObtained ?? "---" }}
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>
</template>

<style scoped>
pre {
  font-size: small;
  white-space: break-spaces;
  overflow-x: auto;
}

tr {
  font-size: medium;
}

.day-obtained {
  width: 1rem;
}

canvas {
  margin-bottom: -1rem;
}
</style>
