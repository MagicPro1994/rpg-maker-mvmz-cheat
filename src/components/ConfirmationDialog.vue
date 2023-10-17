<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    default: "OK",
  },
  cancelText: {
    type: String,
    default: "Cancel",
  },
});

const emit = defineEmits(["update:modelValue", "confirm"]);
const updateValue = (value) => emit("update:modelValue", value);
const confirm = () => {
  updateValue(false);
  emit("confirm");
};
</script>
<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="updateValue($event.target.value)"
    width="500"
  >
    <v-card>
      <slot name="title" v-bind="props">
        <v-card-title class="headline">{{ title }}</v-card-title>
      </slot>
      <v-divider></v-divider>

      <slot name="content" v-bind="props">
        <v-card-text>{{ message }}</v-card-text>
      </slot>

      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="updateValue(false)">{{
          cancelText
        }}</v-btn>
        <v-btn flat color="primary" @click="confirm">{{ confirmText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
