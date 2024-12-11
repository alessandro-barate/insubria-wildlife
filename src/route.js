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

// English pages
// import HomepageEnglish from "./pages/english/HomepageEnglish.vue";
// import InsubriaInfoEnglish from "./pages/english/InsubriaInfoEnglish.vue";
// import TeamEnglish from "./pages/english/TeamEnglish.vue";
// import EventsEnglish from "./pages/english/EventsEnglish.vue";
// import NewsEnglish from "./pages/english/NewsEnglish.vue";
// import SosAnimalsEnglish from "./pages/english/SosAnimalEnglish.vue";
// import ContactUsEnglish from "./pages/english/ContactUsEnglish.vue";
// import SupportUsEnglish from "./pages/english/SupportUsEnglish.vue";

const router = createRouter({
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

    // English pages routes
    // {
    //   path: "/en/",
    //   name: "HomepageEnglish",
    //   component: HomepageEnglish,
    // },
    // {
    //   path: "/en/insubria",
    //   name: "InsubriaInfoEnglish",
    //   component: InsubriaInfoEnglish,
    // },
    // {
    //   path: "/en/team",
    //   name: "TeamEnglish",
    //   component: TeamEnglish,
    // },
    // {
    //   path: "/en/events",
    //   name: "EventsEnglish",
    //   component: EventsEnglish,
    // },
    // {
    //   path: "/en/news",
    //   name: "NewsEnglish",
    //   component: NewsEnglish,
    // },
    // {
    //   path: "/en/sos-animali",
    //   name: "SosAnimalsEnglish",
    //   component: SosAnimalsEnglish,
    // },
    // {
    //   path: "/en/contact-us",
    //   name: "ContactUsEnglish",
    //   component: ContactUsEnglish,
    // },
    // {
    //   path: "/en/support-us",
    //   name: "SupportUsEnglish",
    //   component: SupportUsEnglish,
    // },
  ],
});
export { router };
