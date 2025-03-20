import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  scss: {
    api: "modern-compiler",
    importers: [],
  },
  // In caso togliere questo
  server: {
    proxy: {
      "/backEnd": {
        target: 'https://www.insubriawildlife.com/backEnd/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // In caso togliere questo

  plugins: [vue()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  resolve: {},
});
