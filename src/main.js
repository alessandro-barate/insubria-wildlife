import { createApp } from "vue";

// Importing Vue Router
import { router } from "./route";

// Importing the SCSS styles file
import "./style.scss";

// Importing Vue root component
import App from "./App.vue";

createApp(App).use(router).mount("#app");
