import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";

export const store = reactive({
  // Variable for Team's and Sos Animals' single card
  showDetails: false,

  // Arrays
  visions: [
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.0.description");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.0.alt");
      }),
      image: "/src/assets/img/homepage/carousel/1-social-promotion.webp",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.1.description");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.1.alt");
      }),
      image: "/src/assets/img/homepage/carousel/2-volunteering.webp",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.2.description");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.2.alt");
      }),
      image: "/src/assets/img/homepage/carousel/3-wildlife-rehab.webp",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.3.description");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.3.alt");
      }),
      image: "/src/assets/img/homepage/carousel/4-research.webp",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.4.description");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.4.alt");
      }),
      image: "/src/assets/img/homepage/carousel/5-network.webp",
    },
  ],

  members: [
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.alt");
      }),
      image: "src/assets/img/team/grid/ilaria.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.0.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.alt");
      }),
      image: "src/assets/img/team/grid/alessia.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.1.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.alt");
      }),
      image: "src/assets/img/team/grid/elena.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.2.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.alt");
      }),
      image: "src/assets/img/team/grid/giulia.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.3.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.alt");
      }),
      image: "src/assets/img/team/grid/maura.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.4.description");
      }),
    },
    {
      name: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.name");
      }),
      title: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.alt");
      }),
      image: "src/assets/img/team/grid/roberto.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("team.members.5.description");
      }),
    },
  ],

  characteristics: [
    {
      intro: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.0.intro");
      }),
      word: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.0.word");
      }),
      description: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.0.description");
      }),
    },
    {
      intro: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.1.intro");
      }),
      word: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.1.word");
      }),
      description: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.1.description");
      }),
    },
    {
      intro: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.2.intro");
      }),
      word: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.2.word");
      }),
      description: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.2.description");
      }),
    },
    {
      intro: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.3.intro");
      }),
      word: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.3.word");
      }),
      description: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.3.description");
      }),
    },
    {
      intro: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.4.intro");
      }),
      word: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.4.word");
      }),
      description: computed(() => {
        const { t } = useI18n();
        return t("insubria.characteristics.4.description");
      }),
    },
  ],

  events: [
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("events.0.title");
      }),
      date: computed(() => {
        const { t } = useI18n();
        return t("events.0.date");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("events.0.alt");
      }),
      poster: "./src/assets/img/events/posters/2025/Marzo/29-03-25.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("events.0.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("events.1.title");
      }),
      date: computed(() => {
        const { t } = useI18n();
        return t("events.1.date");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("events.1.alt");
      }),
      poster: "./src/assets/img/events/posters/2024/Novembre/27-11-24.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("events.1.description");
      }),
    },
  ],

  sosCards: [
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.0.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.0.alt");
      }),
      image: "./src/assets/img/sos-animal/cards/1-box.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.0.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.1.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.1.alt");
      }),
      image: "src/assets/img/sos-animal/cards/2-food-water.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.1.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.2.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.2.alt");
      }),
      image: "src/assets/img/sos-animal/cards/3-who-to-call.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.2.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.3.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.3.alt");
      }),
      image: "src/assets/img/sos-animal/cards/4-naked-mammals.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.3.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.4.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.4.alt");
      }),
      image: "src/assets/img/sos-animal/cards/5-furry-mammals.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.4.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.5.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.5.alt");
      }),
      image: "src/assets/img/sos-animal/cards/6-no-nest-bird.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.5.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.6.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.6.alt");
      }),
      image: "src/assets/img/sos-animal/cards/7-swift.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.6.description");
      }),
    },
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.7.title");
      }),
      alt: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.7.alt");
      }),
      image: "src/assets/img/sos-animal/cards/8-bat.webp",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.7.description");
      }),
    },
  ],
});
