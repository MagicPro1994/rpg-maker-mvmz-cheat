/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import karryn from "./karryn";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia).use(karryn);
}
