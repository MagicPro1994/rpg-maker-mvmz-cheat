/**
 * main.js
 *
 * Bootstraps plugins then mounts the App
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Customize the core Game methods
import { customCoreMethods } from "@/plugins/karryn";

customCoreMethods();

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
