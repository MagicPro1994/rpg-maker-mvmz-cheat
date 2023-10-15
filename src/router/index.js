// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "actors",
        name: "Actors",
        component: () => import("@/views/Actors.vue"),
      },
      {
        path: "items",
        name: "Items",
        component: () => import("@/views/Items.vue"),
      },
      {
        path: "armors",
        name: "Armors",
        component: () => import("@/views/Armors.vue"),
      },
      {
        path: "weapons",
        name: "Weapons",
        component: () => import("@/views/Weapons.vue"),
      },
      {
        path: "variables",
        name: "Variables",
        component: () => import("@/views/Variables.vue"),
      },
      {
        path: "switches",
        name: "Switches",
        component: () => import("@/views/Switches.vue"),
      },
      {
        path: "locations",
        name: "Locations",
        component: () => import("@/views/Locations.vue"),
      },
      {
        path: "favorites",
        name: "Favorites",
        component: () => import("@/views/Favorites.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("@/views/Settings.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () =>
          import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;
