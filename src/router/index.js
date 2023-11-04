// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/DefaultView.vue"),
      },
      {
        path: "in-battle",
        name: "InBattle",
        component: () => import("@/views/InBattleView.vue"),
      },
      {
        path: "variables",
        name: "Variables",
        component: () => import("@/views/VariableView.vue"),
      },
      {
        path: "switches",
        name: "Switches",
        component: () => import("@/views/SwitchView.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("@/views/SettingView.vue"),
      },
      {
        path: "karryn",
        name: "Karryn",
        component: () => import("@/views/KarrynView.vue"),
      },
      {
        path: "prison",
        name: "Prison",
        component: () => import("@/views/PrisonView.vue"),
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
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
