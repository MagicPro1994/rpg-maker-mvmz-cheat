<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils, MESSAGES } from "@/wrappers/exclusive/KarrynUtils";

const appStore = useAppStore();
const timeStamp = computed(() => appStore.timeStamp);
const karryn = computed(() => appStore.karryn);

const ACTION_TYPE = {
  GAIN: 0,
  LOSE: 1,
};

const headers = [
  {
    title: "ID",
    key: "id",
    sortable: true,
    searchable: true,
  },
  {
    title: "Name",
    key: "name",
    sortable: true,
    searchable: true,
  },
  {
    title: "Description",
    key: "description",
    searchable: true,
  },
  {
    title: `Actions`,
  },
];

const items = computed(() => appStore.titles);
const pagination = ref(appStore.pagination);
const search = ref("");
const ownedStatus = ref(0);

const lastActivityId = ref("");
const searchProperties = ref(["name", "description"]);

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    if (
      search.value &&
      !KarrynUtils.search(item, search.value, searchProperties.value)
    ) {
      return false;
    }

    if (ownedStatus.value === 1 && !karryn.value.hasTitle(item.id)) {
      return false;
    }

    if (ownedStatus.value === 2 && karryn.value.hasTitle(item.id)) {
      return false;
    }

    return true;
  });
});

const availableCount = computed(() => {
  return items.value.filter((item) => karryn.value.hasTitle(item.id)).length;
});

const searchDrawer = ref(false);

const changeStatus = () => {
  ownedStatus.value = (ownedStatus.value + 1) % 3;
};

const forceReactivityEntry = (id) => {
  return `${id}-${lastActivityId.value}`;
};

const forceReactivity = (id) => {
  lastActivityId.value = `${id}-${Date.now()}`;
};

const gainTitle = (id) => {
  KarrynUtils.gainTitle(id);

  // Refresh the action buttons
  forceReactivity(id);
};

const removeTitle = (id) => {
  KarrynUtils.removeTitle(id);

  // Refresh the action buttons
  forceReactivity(id);
};

const shouldDisplayIcon = (id, actionType) => {
  try {
    forceReactivityEntry(id);

    if (id === 2) {
      return false;
    }

    if (karryn.value.hasThisTitle(id)) {
      return actionType == ACTION_TYPE.LOSE;
    } else {
      return actionType == ACTION_TYPE.GAIN;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
</script>

<template>
  <span :title="timeStamp"></span>
  <v-card-text v-if="!KarrynUtils.isInPrison">
    {{ MESSAGES.FEATURE_NOT_AVAILABLE }}
  </v-card-text>
  <v-card-text v-else class="scrollable-container">
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
      <div v-if="searchDrawer" class="search-container">
        <v-text-field
          class="search-box"
          v-model="search"
          label="Search"
          hide-details
        />
        <v-select
          chips
          class="search-properties"
          v-model="searchProperties"
          :items="headers.filter((item) => item.searchable)"
          label="Select the properties to search"
          item-title="title"
          item-value="key"
          multiple
          hide-details="auto"
        ></v-select>

        <v-checkbox
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
        <tr
          :class="{
            owned: karryn.hasTitle(item.id),
            primary: item.id === 2,
            'not-owned': !karryn.hasTitle(item.id),
          }"
        >
          <td class="id">{{ item.id }}</td>
          <td class="name">
            <span>
              <i :class="`rpg-icon rpg-icon-i${item.data.iconIndex}`"></i>
              {{ item.name }}
            </span>
          </td>
          <td class="description">
            <pre v-html="item.description"></pre>
          </td>
          <td class="actions">
            <div class="d-inline-flex flex-row">
              <v-icon
                v-if="shouldDisplayIcon(item.id, ACTION_TYPE.LOSE)"
                icon="mdi-minus"
                title="Remove title"
                @click="removeTitle(item.id)"
              />
              <v-icon
                v-if="shouldDisplayIcon(item.id, ACTION_TYPE.GAIN)"
                @click="gainTitle(item.id)"
                icon="mdi-plus"
                title="Gain title"
              />
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>
</template>

<style scoped lang="scss">
.menu-drawer {
  height: 7rem !important;
}

pre {
  font-size: small;
  white-space: break-spaces;
  overflow-x: auto;
}

.name {
  width: 20em;
  font-size: small;
}

tr {
  font-size: medium;
}

p {
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.actions i {
  cursor: pointer;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}

.actions i:hover {
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}

.search-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  > * {
    flex-basis: 30%;

    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .search-properties {
    flex-basis: 30%;
  }

  .search-box {
    flex-basis: 50%;
  }
}
</style>
