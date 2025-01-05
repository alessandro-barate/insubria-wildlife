import { createRouter, createWebHistory } from "vue-router";

// Italian pages
import Homepage from "./pages/Homepage.vue";
import InsubriaInfo from "./pages/InsubriaInfo.vue";
import Team from "./pages/Team.vue";
import Events from "./pages/Events.vue";
import News from "./pages/News.vue";
import SosAnimals from "./pages/SosAnimal.vue";
import ContactUs from "./pages/ContactUs.vue";
import SupportUs from "./pages/SupportUs.vue";
import PaypalPage from "./pages/PaypalPage.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(),
  routes: [
    // Italian pages routes
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/insubria",
      name: "InsubriaInfo",
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
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/sos-animali",
      name: "SosAnimali",
      component: SosAnimals,
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
    {
      path: "/paypal",
      name: "Paypal",
      component: PaypalPage,
    },
  ],
});
export { router };
