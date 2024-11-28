import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  scss: {
    api: "modern-compiler",
    importers: [],
  },
  plugins: [vue()],
});
