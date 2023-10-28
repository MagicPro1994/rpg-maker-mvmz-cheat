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
  margin-bottom: -4px;
  padding-right: 4px;
}

tr.primary {
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
