// Plugins
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ["chrome > 89"],
      renderModernChunks: true,
      renderLegacyChunks: false,
      polyfills: ["es.array.at"],
    }),
    vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss",
      },
    }),
  ],
  define: { "process.env": {} },
  base: "./",
  build: {
    outDir: "./dist/www/mods/RJCheatMenu",
    emptyOutDir: true,
    assetsDir: "./assets",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
