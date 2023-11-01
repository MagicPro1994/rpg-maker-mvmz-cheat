/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { KarrynUtils } from "@/wrappers/exclusive/KarrynUtils";

// Composables
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as labsComponents from "vuetify/labs/components";

const gameColors = KarrynUtils.getColorMap();

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: gameColors,
      },
    },
  },
});
