import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import Team from "./pages/Team.vue";
import InsubriaInfo from "./pages/InsubriaInfo.vue";
import SupportUs from "./pages/SupportUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Homepage,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/insubria",
      name: "Insubria",
      component: InsubriaInfo,
    },
    {
      path: "/support",
      name: "Supportaci",
      component: SupportUs,
    },
  ],
});
export { router };
