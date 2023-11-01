<script setup>
import { ref } from "vue";
import { wrapper as $p } from "@/wrappers/exclusive/KarrynActorHelper";

import ConfirmationDialog from "@/components/ConfirmationDialog.vue";

const TextManager = opener.TextManager;

const dialogText = {
  title: "Update all members' ",
  message: "Enter a value to update all members' ",
};

const props = defineProps({
  members: {
    type: Array,
    required: true,
  },
});

const tableHeaders = [
  {
    title: "Name",
    align: "start",
    key: "displayName",
    sortable: false,
  },
  { title: TextManager.hp, key: "hp", sortable: false, bulkUpdate: true },
  { title: TextManager.mp, key: "mp", sortable: false, bulkUpdate: true },
  {
    title: TextManager.willpower,
    key: "will",
    sortable: false,
    bulkUpdate: true,
  },
  { title: TextManager.basic(6), key: "tp", sortable: false, bulkUpdate: true },
  { title: "Actions", sortable: false },
];

const dialog = ref({
  visible: false,
  title: "",
  key: "",
  message: "",
  inputValue: 0,
});

const includeDead = ref(true);

const openBulkUpdateDialog = (stat) => {
  const title = `${dialogText.title} ${stat.toUpperCase()}.`;
  const message = `${dialogText.message} ${stat.toUpperCase()}.`;
  dialog.value.key = stat;
  dialog.value.title = `${title}`;
  dialog.value.message = `${message}`;
  dialog.value.inputValue = 0;
  dialog.value.visible = true;
};

const onConfirm = () => {
  let value = dialog.value.inputValue;
  if (isNaN(value) || value < 0) {
    value = 0;
  }

  for (const member of props.members) {
    if (!includeDead.value && member.isDead()) {
      continue;
    }
    member[dialog.value.key] = value;
  }
};
</script>
<template>
  <v-card-text>
    <v-switch
      v-model="includeDead"
      hint="Include dead members when perform bulk update"
      label="Include Dead"
      color="primary"
      density="compact"
      hide-details="auto"
    ></v-switch>
    <v-data-table :headers="tableHeaders" :items="members" hide-default-footer>
      <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
        <tr>
          <template v-for="column in columns" :key="column.key">
            <td>
              <span class="cursor-pointer" @click="() => toggleSort(column)"
                >{{ column.title }}
              </span>

              <template v-if="isSorted(column)">
                <v-icon size="small" :icon="getSortIcon(column)"></v-icon>
              </template>

              <span class="mr-1">&nbsp;</span>

              <template v-if="column.bulkUpdate">
                <v-icon
                  title="Bulk Update"
                  icon="mdi-pencil-box-multiple-outline"
                  size="small"
                  @click="openBulkUpdateDialog(column.key)"
                ></v-icon>
              </template>
            </td>
          </template>
        </tr>
      </template>

      <template v-slot:item="{ item: member }">
        <tr class="py-2">
          <td>{{ member.displayName() }}</td>
          <td>
            <v-text-field
              type="number"
              :suffix="'/' + member.mhp"
              v-model.number="member[$p.hp]"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              type="number"
              :suffix="'/' + member.mmp"
              v-model.number="member[$p.mp]"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </td>

          <td>
            <v-text-field
              type="number"
              v-if="member.maxwill"
              :suffix="'/' + member.maxwill"
              v-model.number="member[$p.will]"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </td>

          <td>
            <v-text-field
              type="number"
              :suffix="'/' + member[$p.maxTp]"
              v-model.number="member[$p.tp]"
              density="compact"
              hide-details="auto"
            ></v-text-field>
          </td>

          <td>
            <v-icon
              icon="mdi-skull-crossbones"
              title="Kill"
              class="mr-1"
              small
              @click.prevent="member.die()"
            ></v-icon>
            <v-icon
              icon="mdi-cross-celtic"
              title="Revive"
              class="mr-1"
              small
              @click.prevent="member.revive()"
            ></v-icon>
            <v-icon
              icon="mdi-clover"
              title="Recover all"
              small
              @click.prevent="member.recoverAll()"
            ></v-icon>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>

  <confirmation-dialog
    v-model="dialog.visible"
    :title="dialog.title"
    :message="dialog.message"
    @confirm="onConfirm"
  >
    <template v-slot:content="{ message }">
      <v-card-text>
        <v-text-field
          label="Input value"
          :hint="message"
          v-model.number="dialog.inputValue"
          variant="outlined"
          hide-details="auto"
        ></v-text-field>
      </v-card-text>
    </template>
  </confirmation-dialog>
</template>
