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
      image: "/src/assets/img/homepage/carousel/1-social-promotion.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.1.description");
      }),
      image: "/src/assets/img/homepage/carousel/2-volunteering.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.2.description");
      }),
      image: "/src/assets/img/homepage/carousel/3-wildlife-rehab.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.3.description");
      }),
      image: "/src/assets/img/homepage/carousel/4-research.jpg",
    },
    {
      description: computed(() => {
        const { t } = useI18n();
        return t("homepage.vision.visions.4.description");
      }),
      image: "/src/assets/img/homepage/carousel/5-network.jpg",
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
      image: "src/assets/img/team/grid/ilaria.jpg",
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
      image: "src/assets/img/team/grid/alessia.jpg",
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
      image: "src/assets/img/team/grid/elena.jpg",
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
      image: "src/assets/img/team/grid/giulia.jpg",
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
      image: "src/assets/img/team/grid/maura.jpg",
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
      image: "src/assets/img/team/grid/roberto.jpg",
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
      title: "notizie da geed deeble",
      date: "27/11/2024",
      poster: "27-11-2024.png",
    },
    {
      title: "bird gardening",
      date: "30/11/2024",
      poster: "30-11-2024.png",
    },
  ],

  sosCards: [
    {
      title: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.0.title");
      }),
      image: "./src/assets/img/sos-animal/cards/1-box.jpg",
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
      image: "src/assets/img/sos-animal/cards/2-food-water.jpg",
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
      image: "src/assets/img/sos-animal/cards/3-who-to-call.jpg",
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
      image: "src/assets/img/sos-animal/cards/4-naked-mammals.jpg",
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
      image: "src/assets/img/sos-animal/cards/5-furry-mammals.jpg",
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
      image: "src/assets/img/sos-animal/cards/6-no-nest-bird.jpg",
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
      image: "src/assets/img/sos-animal/cards/7-swift.jpg",
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
      image: "src/assets/img/sos-animal/cards/8-bat.jpg",
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.7.description");
      }),
    },
  ],
});
