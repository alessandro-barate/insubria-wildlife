import { createRouter, createWebHistory } from "vue-router";
import { i18n } from "./i18n";
import { watch } from "vue";

// Pages
import Homepage from "./pages/Homepage.vue";
import InsubriaInfo from "./pages/InsubriaInfo.vue";
import Team from "./pages/Team.vue";
import Events from "./pages/Events.vue";
import News from "./pages/News.vue";
import SosAnimals from "./pages/SosAnimal.vue";
import ContactUs from "./pages/ContactUs.vue";
import SupportUs from "./pages/SupportUs.vue";
import PaypalPage from "./pages/PaypalPage.vue";

// Update the page title based on the route
const updateTitle = (to) => {
  try {
    if (to.meta?.titleKey) {
      const title = i18n.global.t(to.meta.titleKey);
      document.title = `Insubria Wildlife - ${title}`;
    } else {
      document.title = "Insubria Wildlife";
    }
  } catch (error) {
    console.error("Error updating title:", error);
    document.title = "Insubria Wildlife";
  }
};

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
        titleKey: "index.title.homepage",
      },
    },
    {
      path: "/insubria",
      name: "InsubriaInfo",
      component: InsubriaInfo,
      meta: {
        titleKey: "index.title.insubria",
      },
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
      meta: {
        titleKey: "index.title.team",
      },
    },
    {
      path: "/eventi",
      name: "Eventi",
      component: Events,
      meta: {
        titleKey: "index.title.events",
      },
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: {
        titleKey: "index.title.news",
      },
    },
    {
      path: "/sos-animali",
      name: "SosAnimali",
      component: SosAnimals,
      meta: {
        titleKey: "index.title.sosAnimal",
      },
    },
    {
      path: "/contattaci",
      name: "Contattaci",
      component: ContactUs,
      meta: {
        titleKey: "index.title.contactUs",
      },
    },
    {
      path: "/supportaci",
      name: "Supportaci",
      component: SupportUs,
      meta: {
        titleKey: "index.title.supportUs",
      },
    },
    {
      path: "/paypal",
      name: "Paypal",
      component: PaypalPage,
      meta: {
        titleKey: "index.title.paypal",
      },
    },
  ],
});

// Watcher to update the title when the language changes
watch(
  () => i18n.global.locale.value,
  () => {
    try {
      const currentRoute = router.currentRoute.value;
      if (currentRoute) {
        updateTitle(currentRoute);
      }
    } catch (error) {
      console.error("Error in language change watcher:", error);
    }
  }
);

// Update the title when the route changes
router.beforeEach((to, from, next) => {
  updateTitle(to);
  next();
});

export { router };
