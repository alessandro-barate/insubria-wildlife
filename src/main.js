import { createApp } from "vue";

//Importing Vue FormKit
import { plugin, defaultConfig } from "@formkit/vue";
// import config from "./formkit.config.js";

// Importing Vue Router
import { router } from "./route";

// Importing the SCSS styles file
import "./style.scss";

// Importing Vue root component
import App from "./App.vue";
import SanitizePlugin from "./plugins/sanitize";

// Importing Vue i18n for translations
import { createI18n } from "vue-i18n";
import it from "./locales/it.json";
import en from "./locales/en.json";
const i18n = createI18n({
  legacy: false,
  locale: "it-IT",
  fallbackLocale: "it-IT",
  messages: { it, en },
});

createApp(App)
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
    })
  )
  .use(SanitizePlugin)
  .use(router)
  .use(i18n)
  .mount("#app");
