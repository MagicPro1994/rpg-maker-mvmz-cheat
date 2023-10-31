<script setup></script>

<template>
  <router-view />
</template>

<style lang="scss">
tr {
  .id {
    width: 1rem;
  }

  .name {
    width: 12rem;
  }

  &.owned {
    td.id,
    td.name {
      color: rgb(var(--v-theme-c2));
    }
  }

  &.not-owned {
    .id,
    .name {
      color: rgb(var(--v-theme-c8));
    }
  }
}

.description {
  font-style: italic;
  width: 28rem;
  max-width: 28rem;
  word-wrap: break-word;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}

.rpg-icon {
  display: inline-block;
  vertical-align: middle;
  background-image: var(--rpg-icon-set);
  background-repeat: no-repeat;

  &.title-desc-icon {
    margin: 2px 0.25rem 2px 0;
  }

  &.category-desc-icon {
    margin: 0px 0.25rem 0px 0;
  }
}
</style>
