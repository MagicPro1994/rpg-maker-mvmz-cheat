<script setup>
import { ref, computed, defineAsyncComponent } from "vue";
import { useAppStore } from "@/store/app";

const ConfirmationDialog = defineAsyncComponent(() =>
  import("@/components/ConfirmationDialog.vue")
);

const appStore = useAppStore();
const gameMaster = computed(() => appStore.gameMaster);
const timeStamp = computed(() => appStore.timeStamp);
const members = computed(() => gameMaster.value.enemyMembers);

const dialogText = {
  title: "Update all members' ",
  message: "Enter a value to update all members' ",
};

const tableHeaders = [
  {
    title: "Name",
    align: "start",
    key: "displayName",
    sortable: false,
  },
  {
    title: opener.TextManager.hp,
    key: "hp",
    funct: "setHp",
    sortable: false,
    bulkUpdate: true,
  },
  {
    title: opener.TextManager.mp,
    key: "mp",
    funct: "setMp",
    sortable: false,
    bulkUpdate: true,
  },
  {
    title: opener.TextManager.basic(6),
    key: "tp",
    funct: "setTp",
    sortable: false,
    bulkUpdate: true,
  },
  { title: "Actions", sortable: false, virtual: true },
];

const dialog = ref({
  visible: false,
  title: "",
  key: "",
  message: "",
  inputValue: 1,
});

const includeDead = ref(false);

const openBulkUpdateDialog = (stat, funct) => {
  const title = `${dialogText.title} ${stat.toUpperCase()}.`;
  const message = `${dialogText.message} ${stat.toUpperCase()}.`;
  dialog.value.key = stat;
  dialog.value.funct = funct;
  dialog.value.title = `${title}`;
  dialog.value.message = `${message}`;
  dialog.value.visible = true;
};

const onConfirm = () => {
  let value = dialog.value.inputValue;
  if (isNaN(value) || value < 0) {
    value = 0;
  }

  for (const member of members.value) {
    if (!includeDead.value && member.isDead()) {
      continue;
    }
    if (dialog.value.funct) {
      member[dialog.value.funct](value);
      continue;
    } else {
      member[dialog.value.key] = value;
    }
  }
};

const killAll = () => {
  for (const member of gameMaster.value.enemyMembers) {
    member.die();
  }
};

const recoverAll = () => {
  for (const member of gameMaster.value.enemyMembers) {
    member.recoverAll();
  }
};

const raiseAllTp = () => {
  for (const member of gameMaster.value.enemyMembers) {
    member._tp = member.orgasmPoint();
  }
};
</script>
<template>
  <span :title="timeStamp"></span>

  <v-data-table :headers="tableHeaders" :items="members" hide-default-footer>
    <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
      <tr>
        <template v-for="column in columns" :key="column.key">
          <td v-if="column.virtual !== true">
            <span class="cursor-pointer" @click="() => toggleSort(column)"
              >{{ column.title }}
            </span>

            <template v-if="isSorted(column)">
              <v-icon size="small" :icon="getSortIcon(column)"></v-icon>
            </template>

            <span class="mr-1">&nbsp;</span>

            <template v-if="column.bulkUpdate">
              <i
                class="rpg-icon rpg-icon-x24-i282"
                title="Bulk Update"
                @click="openBulkUpdateDialog(column.key, column.funct)"
              ></i>
            </template>
          </td>
          <td v-else>
            <i
              class="rpg-icon rpg-icon-x24-i1"
              title="Kill for all"
              @click="killAll"
            ></i>
            <i
              class="rpg-icon rpg-icon-x24-i329"
              title="Recover for all"
              @click="recoverAll"
            ></i>
            <i
              class="rpg-icon rpg-icon-x24-i62"
              title="Raise pleasure to orgasm point for all"
              @click="raiseAllTp"
            ></i>
          </td>
        </template>
      </tr>
    </template>

    <template v-slot:item="{ item }">
      <tr class="py-2">
        <td clas="name">{{ item.displayName() }}</td>
        <td class="hp">
          <v-text-field
            type="number"
            :suffix="'/' + item.mhp"
            v-model.number="item._hp"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </td>
        <td class="mp">
          <v-text-field
            type="number"
            :suffix="'/' + item.mmp"
            v-model.number="item._mp"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </td>

        <td class="tp">
          <v-text-field
            type="number"
            :suffix="'/' + item.orgasmPoint()"
            v-model.number="item._tp"
            density="compact"
            hide-details="auto"
          ></v-text-field>
        </td>
        <td>
          <i
            class="rpg-icon rpg-icon-x24-i1"
            title="Kill"
            @click="item.die()"
          ></i>
          <i
            class="rpg-icon rpg-icon-x24-i329"
            title="Recover"
            @click="item.recoverAll()"
          ></i>
          <i
            class="rpg-icon rpg-icon-x24-i62"
            title="Raise pleasure to orgasm point"
            @click="item._tp = item.orgasmPoint()"
          ></i>
        </td>
      </tr>
    </template>

    <template v-slot:bottom>
      <v-spacer class="py-1" />
    </template>
  </v-data-table>

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

<style scoped lang="scss">
.name {
  width: 6rem;
}

.hp,
.mp,
.tp {
  width: 10rem;
}

.rpg-icon {
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
}
</style>
