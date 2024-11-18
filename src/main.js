import { createApp } from "vue";

// Importing Vue Router
import { router } from "./route";

// Importing the SCSS styles file
import "./style.scss";

// Importing Vue root component
import App from "./App.vue";

// Import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// Importing font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).use(router).mount("#app");
