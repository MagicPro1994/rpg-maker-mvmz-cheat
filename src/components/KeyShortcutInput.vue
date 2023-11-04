<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

/**
 * Records the key combination when the user presses keys.
 *
 * @param {KeyboardEvent} event
 */
const onKeyDown = (event) => {
  let keys = [];

  if (event.ctrlKey && !event.code.includes("Control")) {
    keys.push("Control");
  }

  if (event.altKey && !event.code.includes("Alt")) {
    keys.push("Alt");
  }

  if (event.shiftKey && !event.code.includes("Shift")) {
    keys.push("Shift");
  }

  if (
    !event.code.includes("Control") &&
    !event.code.includes("Alt") &&
    !event.code.includes("Shift")
  ) {
    keys.push(event.code);
  } else {
    keys = [];
  }

  updateValue(keys.join("+"));
};

const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => emit("update:modelValue", value);
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    @update:model-value="updateValue($event.target.value)"
    @keydown.prevent="onKeyDown"
  >
  </v-text-field>
</template>
