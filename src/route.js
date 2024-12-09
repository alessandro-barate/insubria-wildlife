import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import InsubriaInfo from "./pages/InsubriaInfo.vue";
import Team from "./pages/Team.vue";
import Events from "./pages/Events.vue";
import News from "./pages/News.vue";
import SosAnimals from "./pages/SosAnimal.vue";
import ContactUs from "./pages/ContactUs.vue";
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
      path: "/insubria",
      name: "Insubria",
      component: InsubriaInfo,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/eventi",
      name: "Eventi",
      component: Events,
    },
    {
      path: "/sos-animali",
      name: "SosAnimali",
      component: SosAnimals,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/contattaci",
      name: "Contattaci",
      component: ContactUs,
    },
    {
      path: "/supportaci",
      name: "Supportaci",
      component: SupportUs,
    },
  ],
});
export { router };
