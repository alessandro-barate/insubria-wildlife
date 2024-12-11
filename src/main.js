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

createApp(App)
  .use(
    plugin,
    defaultConfig({
      theme: "genesis",
    })
  )
  .use(SanitizePlugin)
  .use(router)
  .mount("#app");
