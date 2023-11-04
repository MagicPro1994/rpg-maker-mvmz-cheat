<script setup>
import { computed, ref } from "vue";
import { useAppStore } from "@/store/app";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

const appStore = useAppStore();
const gameMaster = computed(() => appStore.gameMaster);
const drawerLeft = ref(false);
const drawerRight = ref(false);
const items = [
  { title: "Home", icon: "mdi-controller", to: "/" },
  // { title: "Actors", icon: "mdi-cards", to: "/actors" },
  { title: "Karryn", icon: "mdi-face-woman-shimmer", to: "/karryn" },
  { title: "Prison", icon: "mdi-lock", to: "prison" },
  // { title: "Items", icon: "mdi-bottle-tonic-plus", to: "/items" },
  // { title: "Armors", icon: "mdi-shield-crown-outline", to: "/armors" },
  // { title: "Weapons", icon: "mdi-axe-battle", to: "/weapons" },
  { title: "In Battle", icon: "mdi-sword-cross", to: "/in-battle" },
  { title: "Variables", icon: "mdi-variable", to: "/variables" },
  { title: "Switches", icon: "mdi-dip-switch", to: "/switches" },
  // { title: "Locations", icon: "mdi-sign-direction", to: "/locations" },
  // { title: "Favorites", icon: "mdi-star", to: "/favorites" },
  // { title: "Settings", icon: "mdi-cog", to: "/settings" },
];
const reloadPage = () => window.location.reload();
</script>

<template>
  <v-app-bar flat dense>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawerLeft = !drawerLeft"
    ></v-app-bar-nav-icon>

    <v-app-bar-title :title="appStore.appVersion">
      Cheat Menu <sub>by RJ</sub>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-refresh" @click.stop="reloadPage()"></v-btn>
    <v-btn
      variant="text"
      icon="mdi-dots-vertical"
      @click.stop="drawerRight = !drawerRight"
    ></v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawerLeft" location="left" temporary>
    <v-list dense>
      <template v-for="item in items" :key="item.title">
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
    <v-card-subtitle>Quick Actions</v-card-subtitle>
    <div class="d-flex flex-wrap align-center w-100 px-4">
      <v-btn
        title="Go to Title Screen"
        variant="text"
        icon="mdi-home"
        color="primary"
        size="small"
        @click="KarrynUtils.goToTitle"
      ></v-btn>
      <v-btn
        title="Go to Load Screen"
        variant="text"
        icon="mdi-folder-open"
        color="primary"
        size="small"
        @click="KarrynUtils.goToLoadScene"
      ></v-btn>
      <v-btn
        title="Go to Save Screen"
        variant="text"
        icon="mdi-content-save"
        color="primary"
        size="small"
        @click="KarrynUtils.goToSaveScene"
      ></v-btn>
    </div>
    <v-card-subtitle>Cheats</v-card-subtitle>
    <div class="cheat-switches d-flex flex-wrap align-center w-100 px-4">
      <v-switch
        v-model="gameMaster.isCheatUnlocked"
        title="Enable/Disable Cheat Condition Unlock"
        label="Cheat Condition Unlock"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isInvincible"
        title="Enable/Disable Invincible Mode"
        label="Invincible"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoClothingDamage"
        title="Enable/Disable No Clothing Damage Mode"
        label="No Clothing Damage"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoStaminaCost"
        title="Enable/Disable No Stamina Skill Cost"
        label="No Stamina Skill Cost"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoEnergyCost"
        title="Enable/Disable No Energy Skill Cost"
        label="No Energy Skill Cost"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoWillCost"
        title="Enable/Disable No Will Skill Cost"
        label="No Will Skill Cost"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoCooldown"
        title="Enable/Disable No Skill Cooldown"
        label="No Skill Cooldown"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
      <v-switch
        v-model="gameMaster.isNoSkillCostPay"
        title="Enable/Disable No Skill Cost Pay"
        label="No Skill Cost Pay"
        color="primary"
        hide-details="auto"
        density="compact"
      ></v-switch>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link.router-link-active.router-link-exact-active {
  color: rgb(var(--v-theme-primary));
  font-weight: bold;
}

.cheat-switches {
  .v-input {
    --v-input-control-height: 10px;
    --v-input-padding-top: 0px;
  }
}
</style>
