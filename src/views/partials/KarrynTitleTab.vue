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
    title: `Actions`,
  },
];

const items = computed(() => appStore.titles);
const pagination = ref(appStore.pagination);
const search = ref("");
const ownedStatus = ref(0);

const lastActivityId = ref("");
const searchProperties = ref(["id"]);

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
    <v-text-field class="py-1" v-model="search" label="Search" hide-details />
    <div class="d-inline-flex flex-row">
      <v-autocomplete
        class="search-properties"
        v-model="searchProperties"
        :items="headers"
        label="Search properties"
        item-title="title"
        item-value="key"
        multiple
        hide-details
      ></v-autocomplete>
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

.search-properties {
  width: 20em;
}
</style>
