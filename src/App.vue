<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
.id {
  width: 1rem;
}

.name {
  width: 12rem;
}

.description {
  font-style: italic;
  width: 24rem;
}

canvas.title-desc-icon {
  &[height="32"] {
    margin-bottom: -6px;
  }
  &[height="16"] {
    margin-bottom: -4px;
    padding-right: 2px;
  }
}

canvas.title-desc-icon tr.primary {
  td.id,
  td.name {
    color: rgb(var(--v-theme-primary));
  }
}

tr.owned {
  td.id,
  td.name {
    color: rgb(var(--v-theme-secondary));
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}
</style>
