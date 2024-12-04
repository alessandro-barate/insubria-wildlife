import { createApp } from "vue";

// Importing Vue Router
import { router } from "./route";

// Importing the SCSS styles file
import "./style.scss";

// Importing Vue root component
import App from "./App.vue";
import SanitizePlugin from "./plugins/sanitize";

createApp(App).use(SanitizePlugin).use(router).mount("#app");
