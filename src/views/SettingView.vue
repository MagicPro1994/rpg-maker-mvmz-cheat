<script setup>
import { defineAsyncComponent } from "vue";
import { ref } from "vue";

const KeyShortcutInput = defineAsyncComponent(() =>
  import("@/components/KeyShortcutInput.vue")
);

const openMenuShortcut = ref(opener.ConfigManager["RJCheatMenu_OpenMenu"]);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarTimeout = ref(2000);

const sendNotification = (text, timeout = 2000) => {
  snackbar.value = true;
  snackbarText.value = text;
  snackbarTimeout.value = timeout;
};

const save = () => {
  opener.ConfigManager["RJCheatMenu_OpenMenu"] = openMenuShortcut.value;
  opener.ConfigManager.save();
  sendNotification("Settings saved.");
};
</script>
<template>
  <v-card flat class="ma-0 pa-0">
    <v-card-title>Settings</v-card-title>
    <v-divider class="my-1" />
    <v-card-text>
      <div class="settings-header">
        <v-card-subtitle>Key Shortcuts</v-card-subtitle>
        <div class="shortcuts-container">
          <key-shortcut-input
            v-model="openMenuShortcut"
            label="Open Menu Shortcut"
            placeholder="Press a key combination to set the shortcut."
            hint="Default: Control+Backquote"
            hide-details="auto"
          />
        </div>
      </div>
      <v-divider class="my-2" />
      <div class="settings-footer">
        <v-btn color="primary" @click="save">Save</v-btn>
      </div>
    </v-card-text>

    <!-- start: Message Snackbar -->
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeout">
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn
          icon="mdi-close"
          color="black"
          variant="text"
          @click="snackbar = false"
        >
        </v-btn>
      </template>
    </v-snackbar>
    <!-- end: Message Snackbar -->
  </v-card>
</template>

<style scoped>
.shortcuts-container {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  > * {
    flex-basis: 50%;
  }
}
.settings-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
