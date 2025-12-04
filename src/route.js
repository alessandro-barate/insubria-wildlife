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

// Routes declaration
const routeConfig = [
  {
    paths: {
      it: "/",
      en: "/",
    },
    redirect: (to) => {
      return localStorage.getItem("language")
        ? `/${localStorage.getItem("language")}`
        : "/it";
    },
  },
  {
    paths: {
      it: "/it",
      en: "/en",
    },
    name: "Homepage",
    component: Homepage,
    meta: {
      titleKey: "index.title.homepage.name",
    },
  },
  {
    paths: {
      it: "/it/insubria",
      en: "/en/insubria",
    },
    name: "InsubriaInfo",
    component: InsubriaInfo,
    meta: {
      titleKey: "index.title.insubria.name",
    },
  },
  {
    paths: {
      it: "/it/team",
      en: "/en/team",
    },
    name: "Team",
    component: Team,
    meta: {
      titleKey: "index.title.team.name",
    },
  },
  {
    paths: {
      it: "/it/eventi",
      en: "/en/events",
    },
    name: "Eventi",
    component: Events,
    meta: {
      titleKey: "index.title.events.name",
    },
  },
  {
    paths: {
      it: "/it/news",
      en: "/en/news",
    },
    name: "News",
    component: News,
    meta: {
      titleKey: "index.title.news.name",
    },
  },
  {
    paths: {
      it: "/it/sos-animali",
      en: "/en/sos-animals",
    },
    name: "SosAnimali",
    component: SosAnimals,
    meta: {
      titleKey: "index.title.sosAnimal.name",
    },
  },
  {
    paths: {
      it: "/it/contattaci",
      en: "/en/contact-us",
    },
    name: "Contattaci",
    component: ContactUs,
    meta: {
      titleKey: "index.title.contactUs.name",
    },
  },
  {
    paths: {
      it: "/it/supportaci",
      en: "/en/support-us",
    },
    name: "Supportaci",
    component: SupportUs,
    meta: {
      titleKey: "index.title.supportUs.name",
    },
  },
];

const generateLocalizedRoutes = () => {
  const routes = [];

  routeConfig.forEach((config) => {
    routes.push({
      path: "/",
      redirect: (to) => {
        const a = localStorage.getItem("language")
          ? `/${localStorage.getItem("language")}`
          : "/it";
        return a;
      },
    });

    // Italian routes
    routes.push({
      path: config.paths.it,
      name: config.name,
      component: config.component,
      meta: {
        ...config.meta,
        locale: "it",
      },
    });

    // English routes
    routes.push({
      path: config.paths.en,
      name: `${config.name}En`,
      component: config.component,
      meta: {
        ...config.meta,
        locale: "en",
      },
    });
  });

  return routes;
};

// Declaring the router's routes
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
  history: createWebHistory(),
  routes: generateLocalizedRoutes(),
});

const getLocalizedPath = (currentPath, targetLocale) => {
  // Find the corrisponding route's configuration
  const route = routeConfig.find((config) =>
    Object.values(config.paths).some((path) => path === currentPath)
  );

  if (!route) return targetLocale === "en" ? "/en" : currentPath;

  // Return the path in the target language
  return route.paths[targetLocale];
};

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
  const currentLang = i18n.global.locale.value;
  const isEnglishRoute = to.path.startsWith("/en");

  // Se la lingua è inglese ma l'URL non ha il prefisso /en
  if (currentLang === "en" && !isEnglishRoute) {
    const newPath = getLocalizedPath(to.path, "en");
    next({ path: newPath, query: to.query });
    return;
  }

  // Se la lingua è italiano ma l'URL ha il prefisso /en
  if (currentLang === "it" && isEnglishRoute) {
    const newPath = getLocalizedPath(to.path.replace(/^\/en/, ""), "it");
    next({ path: newPath, query: to.query });
    return;
  }

  updateTitle(to);
  updateMetaTags(to);
  next();
});

export { router, getLocalizedPath };
