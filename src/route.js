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

const updateMetaTags = (to) => {
  try {
    const defaultContent = "Page Content";
    const defaultDescription = "Page Description";

    // Get the route name and convert to lowercase for matching with json keys
    let routeKey = "";
    switch (to.name) {
      case "Homepage":
        routeKey = "homepage";
        break;
      case "InsubriaInfo":
        routeKey = "insubria";
        break;
      case "Team":
        routeKey = "team";
        break;
      case "Eventi":
        routeKey = "events";
        break;
      case "News":
        routeKey = "news";
        break;
      case "SosAnimali":
        routeKey = "sosAnimal";
        break;
      case "Contattaci":
        routeKey = "contactUs";
        break;
      case "Supportaci":
        routeKey = "supportUs";
        break;
      default:
        routeKey = "homepage";
    }

    // Get the content and description from i18n based on the route
    const metaContent =
      i18n.global.t(`index.title.${routeKey}.content`) || defaultContent;
    const metaDescription =
      i18n.global.t(`index.title.${routeKey}.description`) ||
      defaultDescription;

    // Get or create the meta description tag
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }

    // Update both content and description attributes on the same meta tag
    descriptionMeta.setAttribute("content", metaContent);
    descriptionMeta.setAttribute("description", metaDescription);
  } catch (error) {
    console.error("Error updating meta tags:", error);
  }
};

// Declaring the router's routes
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
        titleKey: "index.title.homepage.name",
      },
    },
    {
      path: "/insubria",
      name: "InsubriaInfo",
      component: InsubriaInfo,
      meta: {
        titleKey: "index.title.insubria.name",
      },
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
      meta: {
        titleKey: "index.title.team.name",
      },
    },
    {
      path: "/eventi",
      name: "Eventi",
      component: Events,
      meta: {
        titleKey: "index.title.events.name",
      },
    },
    {
      path: "/news",
      name: "News",
      component: News,
      meta: {
        titleKey: "index.title.news.name",
      },
    },
    {
      path: "/sos-animali",
      name: "SosAnimali",
      component: SosAnimals,
      meta: {
        titleKey: "index.title.sosAnimal.name",
      },
    },
    {
      path: "/contattaci",
      name: "Contattaci",
      component: ContactUs,
      meta: {
        titleKey: "index.title.contactUs.name",
      },
    },
    {
      path: "/supportaci",
      name: "Supportaci",
      component: SupportUs,
      meta: {
        titleKey: "index.title.supportUs.name",
      },
    },
  ],
});

// Watcher to update the title and the meta tags when the language changes
watch(
  () => i18n.global.locale.value,
  () => {
    try {
      const currentRoute = router.currentRoute.value;
      if (currentRoute) {
        updateTitle(currentRoute);
        updateMetaTags(currentRoute);
      }
    } catch (error) {
      console.error("Error in language change watcher:", error);
    }
  }
);

// Update the title and the meta tags when the route changes
router.beforeEach((to, from, next) => {
  updateTitle(to);
  updateMetaTags(to);
  next();
});

export { router };
