<script setup>
import { ref, computed, onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils, MESSAGES } from "@/wrappers/exclusive/KarrynUtils";
import { watch } from "vue";
import ViewTitle from "./partials/ViewTitle.vue";

const appStore = useAppStore();
const karryn = computed(() => {
  return appStore.karryn;
});

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
    title: "Actions",
  },
];

const items = computed(() => appStore.titles);
const pagination = ref(appStore.pagination);
const search = ref("");
const isOwned = ref(false);

const lastActivityId = ref("");

const filteredItems = computed(() => {
  return items.value.filter((item) => {
    if (search.value && !KarrynUtils.search(item, search.value)) {
      return false;
    }
    if (isOwned.value && !karryn.value.hasTitle(item.id)) {
      return false;
    }
    return true;
  });
});

const obtainedCount = computed(() => {
  return items.value.filter((item) => karryn.value.hasThisTitle(item.id))
    .length;
});

const availableCount = computed(() => {
  return items.value.filter((item) => karryn.value.hasTitle(item.id)).length;
});

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

const loseTitle = (id) => {
  KarrynUtils.loseTitle(id);

  // Refresh the action buttons
  forceReactivity(id);
};

const onTableChange = () => {
  // To make sure the icons are rendered after the table finished rendering
  setTimeout(() => {
    KarrynUtils.renderIcons();
  }, 0);
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

watch(isOwned, () => {
  onTableChange();
});

onMounted(() => {
  KarrynUtils.renderIcons();
});
</script>

<template>
  <v-card flat class="ma-0 pa-0">
    <view-title title="Titles" />
    <v-divider class="my-1" />
    <v-card-text v-if="!KarrynUtils.isInPrison">
      {{ MESSAGES.FEATURE_NOT_AVAILABLE }}
    </v-card-text>
    <v-card-text v-else>
      <v-text-field v-model="search" label="Search" hide-details />
      <div class="d-inline-flex flex-row px-4">
        <v-switch
          v-model="isOwned"
          label="Owned"
          color="primary"
          hide-details="auto"
        ></v-switch>
      </div>

      <p>Obtained titles: {{ obtainedCount }} / {{ items.length }}</p>
      <p>Available titles: {{ availableCount }} / {{ items.length }}</p>

      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :search="search"
        :items-per-page="pagination.itemsPerPage"
        :items-per-page-options="pagination.itemsPerPageOptions"
        @update:options="onTableChange"
      >
        <template v-slot:item="{ item }">
          <tr
            :class="{ owned: karryn.hasTitle(item.id), primary: item.id === 2 }"
          >
            <td class="id">{{ item.id }}</td>
            <td class="name">{{ item.name }}</td>
            <td class="description">
              <pre v-html="item.description"></pre>
            </td>
            <td class="actions">
              <div class="d-inline-flex flex-row">
                <v-icon
                  v-if="shouldDisplayIcon(item.id, ACTION_TYPE.LOSE)"
                  icon="mdi-minus"
                  title="Remove title"
                  @click="loseTitle(item.id)"
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
  </v-card>
</template>

<style scoped lang="scss">
pre {
  font-size: small;
  white-space: break-spaces;
  overflow-x: auto;
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
</style>
