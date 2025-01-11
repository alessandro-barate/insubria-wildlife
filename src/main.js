import { createApp } from "vue";

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

// Importing i18n for translations
import { i18n } from "./i18n";

// Importing text translation parser component for paragraph
import TranslatedTextParagraph from "./components/TranslatedTextParagraph.vue";

// Importing text translation parser component for span
import TranslatedTextSpan from "./components/TranslatedTextSpan.vue";

const app = createApp(App);

app
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
    })
  )
  .use(SanitizePlugin)
  .use(router)
  .use(i18n)
  .component("TranslatedTextParagraph", TranslatedTextParagraph)
  .component("TranslatedTextSpan", TranslatedTextSpan)
  .mount("#app");
