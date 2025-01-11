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
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
      meta: {
        title: "Insubria homepage",
      },
    },
    {
      path: "/insubria",
      name: "InsubriaInfo",
      component: InsubriaInfo,
      meta: {
        title: "Insubria informazioni",
      },
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
      meta: {
        title: "Insubria team",
      },
    },
    {
      path: "/eventi",
      name: "Eventi",
      component: Events,
      meta: {
        title: "Insubria eventi",
      },
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: {
        title: "Insubria news",
      },
    },
    {
      path: "/sos-animali",
      name: "SosAnimali",
      component: SosAnimals,
      meta: {
        title: "Insubria SOS animali",
      },
    },
    {
      path: "/contattaci",
      name: "Contattaci",
      component: ContactUs,
      meta: {
        title: "Insubria contattaci",
      },
    },
    {
      path: "/supportaci",
      name: "Supportaci",
      component: SupportUs,
      meta: {
        title: "Insubria supportaci",
      },
    },
    {
      path: "/paypal",
      name: "Paypal",
      component: PaypalPage,
      meta: {
        title: "Insubria dona con Paypal",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("Route change:", to.meta.title);
  document.title = to.meta.title || "Insubria WildLife";
  next();
});

export { router };
