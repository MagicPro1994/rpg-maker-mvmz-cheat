<script setup>
import { ref } from "vue";
const drawerLeft = ref(false);
const drawerRight = ref(false);
const items = [
  { title: "Home", icon: "mdi-home", to: "/" },
  { title: "Actors", icon: "mdi-account-group", to: "/actors" },
  { title: "Items", icon: "mdi-flask-empty", to: "/items" },
  { title: "Armors", icon: "mdi-shield", to: "/armors" },
  { title: "Weapons", icon: "mdi-sword", to: "/weapons" },
  { title: "Variables", icon: "mdi-variable", to: "/variables" },
  { title: "Switches", icon: "mdi-dip-switch", to: "/switches" },
  { title: "Locations", icon: "mdi-sign-direction", to: "/locations" },
  { title: "Favorites", icon: "mdi-star", to: "/favorites" },
  { title: "Settings", icon: "mdi-cog", to: "/settings" },
];
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon variant="text" @click.stop="drawerLeft = !drawerLeft"></v-app-bar-nav-icon>

    <v-app-bar-title>Cheat Menu <sub>by RJ</sub></v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>
    <v-btn variant="text" icon="mdi-filter"></v-btn>
    <v-btn variant="text" icon="mdi-dots-vertical" @click.stop="drawerRight = !drawerRight"></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawerLeft" location="left" temporary>
    <v-list dense>
      <template v-for="item in items">
        <router-link class="router-link" :to="item.to">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <span>{{ item.title }}</span>
          </v-list-item>
        </router-link>
      </template>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="drawerRight" location="right">
  </v-navigation-drawer>
</template>

<style scoped>
.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link.router-link-active.router-link-exact-active {
  color: rgb(var(--v-theme-primary));
  font-weight: bold;
}
</style>
