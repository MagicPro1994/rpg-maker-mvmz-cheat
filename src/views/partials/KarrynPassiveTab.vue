<script setup>
import { computed, ref } from "vue";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";
import { useAppStore } from "@/store/app";
const appStore = useAppStore();
const timeStamp = computed(() => appStore.timeStamp);
const karryn = computed(() => appStore.karryn);

const categoryAllName = KarrynUtils.convertEscapeCharacters(
  opener.TextManager.passiveCategory(0),
  {
    colorCodeEscape: true,
    iconCodeEscape: true,
    iconClass: "category-desc-icon",
  }
);

const selectedCategories = ref([0]);
const categories = computed(() => appStore.passiveCategories);

const search = ref("");
const items = ref(appStore.passives);
const pagination = ref(appStore.pagination);

const headers = [
  { title: "ID", sortable: true, key: "id", search: true },
  { title: "Category", key: "categoryNames", search: true },
  { title: "Name", sortable: true, key: "name", search: true },
  { title: "Description", key: "description", search: true },
  { title: "Obtained", key: "owned" },
];

const searchProps = ref(["categoryNames", "name", "description"]);

const filteredItems = computed(() => {
  try {
    return items.value.filter((item) => {
      if (ownedStatus.value === 1 && !karryn.value.hasPassive(item.id)) {
        return false;
      }

      if (ownedStatus.value === 2 && karryn.value.hasPassive(item.id)) {
        return false;
      }

      if (
        search.value &&
        !KarrynUtils.search(item, search.value, searchProps.value)
      ) {
        return false;
      }

      if (selectedCategories.value.length > 0) {
        if (!selectedCategories.value.includes(0)) {
          if (!item.isInCategory(selectedCategories.value)) {
            return false;
          }
        }
      }

      return true;
    });
  } catch (e) {
    console.log(e);
    return [];
  }
});

const availableCount = computed(() => {
  return items.value.filter((item) => karryn.value.hasPassive(item.id)).length;
});

const ownedStatus = ref(0);

const changeStatus = () => {
  ownedStatus.value = (ownedStatus.value + 1) % 3;
};

const onSelectCategory = () => {
  if (selectedCategories.value.includes(0)) {
    if (selectedCategories.value.length > 1) {
      // Remove the select all if there are other categories selected
      selectedCategories.value = selectedCategories.value.filter(
        (c) => c !== 0
      );
    }
  }

  if (selectedCategories.value.length === 0) {
    // Add the select all if there are no other categories selected
    selectedCategories.value = [0];
  }
};

const searchDrawer = ref(false);
</script>
<template>
  <span :title="timeStamp"></span>
  <v-card-text class="scrollable-container">
    <v-btn
      variant="tonal"
      color="primary"
      style="position: absolute; right: 0; bottom: 0; z-index: 2000"
      @click.stop="searchDrawer = !searchDrawer"
    >
      <v-icon v-if="searchDrawer">mdi-menu-down</v-icon>
      <v-icon v-else>mdi-menu-up</v-icon>
    </v-btn>

    <v-navigation-drawer
      v-model="searchDrawer"
      app
      location="top"
      temporary
      class="menu-drawer"
    >
      <div class="search-container">
        <v-text-field
          class="search-box"
          v-model="search"
          label="Search"
          hide-details="auto"
        />

        <v-autocomplete
          class="search-categories"
          v-model="selectedCategories"
          :items="categories"
          item-title="name"
          item-value="id"
          label="Filtered Categories"
          multiple
          hide-details="auto"
          @update:model-value="onSelectCategory()"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip density="compact" v-if="index < 2">
              <span class="text-caption">{{ item.title }}</span>
            </v-chip>
            <span
              v-if="index === 2"
              class="text-grey text-caption align-self-center"
            >
              (+{{ selectedCategories.length - 2 }} others)
            </span>
          </template>

          <template v-slot:item="{ props, item }">
            <v-list-item
              v-if="item.raw.id === 0"
              @click="selectedCategories = [0]"
            >
              <pre class="pl-2" v-html="categoryAllName"></pre>
            </v-list-item>

            <v-list-item v-else v-bind="props">
              <template v-slot:title>
                <div class="d-inline-flex align-center">
                  <v-checkbox-btn
                    :model-value="selectedCategories.includes(item.raw.id)"
                  ></v-checkbox-btn>
                  <pre v-html="item.raw.htmlName"></pre>
                </div>
              </template>
            </v-list-item>

            <v-divider v-if="item.raw.id === 0" />
          </template>
        </v-autocomplete>

        <v-select
          class="search-props"
          chips
          label="Select the properties to search"
          :items="headers"
          item-text="title"
          item-value="key"
          v-model="searchProps"
          multiple
          hide-details="auto"
        />

        <v-checkbox
          class="search-owned"
          :model-value="ownedStatus"
          @change="changeStatus"
          :true-value="1"
          :false-value="0"
          :indeterminate="ownedStatus === 2"
          :label="`Owned [${availableCount} / ${items.length}]`"
          density="compact"
          hide-details="auto"
        ></v-checkbox>
      </div>
    </v-navigation-drawer>
    <v-data-table
      :headers="headers"
      :items="filteredItems"
      :search="search"
      :items-per-page="pagination.itemsPerPage"
      :items-per-page-options="pagination.itemsPerPageOptions"
    >
      <template v-slot:item="{ item }">
        <tr :class="karryn.hasPassive(item.id) ? 'owned' : 'not-owned'">
          <td class="id">{{ item.id }}</td>
          <td class="categories">
            <template v-for="category in item.categoryNames" :key="category">
              <v-chip class="ma-1" density="compact">
                <span>{{ category }}</span>
              </v-chip>
            </template>
          </td>
          <td
            class="name"
            :class="item.passiveColor ? `text-c${item.passiveColor}` : ''"
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

<style scoped lang="scss">
.menu-drawer {
  height: 8.5rem !important;
}

pre {
  font-size: small;
  white-space: break-spaces;
  overflow-x: auto;
}

.name {
  width: 6rem;
}

.description {
  width: 24rem;
}

.categories {
  width: 18rem;
  .v-chip {
    font-size: xx-small;
  }
}

tr {
  font-size: medium;
}

.day-obtained {
  width: 0.5rem;
}

.search-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  > * {
    flex-basis: 30%;

    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .search-props {
    flex-basis: 31%;
  }

  .search-box {
    flex-basis: 40%;
  }

  .search-categories {
    flex-basis: 30%;
  }

  .search-owned {
    flex-basis: 30%;
  }
}
</style>
