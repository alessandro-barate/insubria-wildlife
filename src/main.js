import { createApp } from "vue";

// Importing Vue Meta
import { createMetaManager } from "vue-meta";

// Importing Vue FormKit
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
import { parseTranslationText } from "./utils/textParser";
import it from "./locales/it.json";
import en from "./locales/en.json";
const i18n = createI18n({
  legacy: false,
  locale: "it-IT",
  fallbackLocale: "it-IT",
  messages: { it, en },
  postTranslation: (text) => parseTranslationText(text),
});

// Importing text translation parser component for paragraph
import TranslatedTextParagraph from "./components/TranslatedTextParagraph.vue";

// Importing text translation parser component for span
import TranslatedTextSpan from "./components/TranslatedTextSpan.vue";

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
  .use(createMetaManager())
  .component("TranslatedTextParagraph", TranslatedTextParagraph)
  .component("TranslatedTextSpan", TranslatedTextSpan)
  .mount("#app");
