import { reactive, computed } from "vue";
import { useI18n } from "vue-i18n";

// Importing the carousel images
import socialImg from "./assets/img/homepage/carousel/1-social-promotion.webp";
import volunteerImg from "./assets/img/homepage/carousel/2-volunteering.webp";
import rehabImg from "./assets/img/homepage/carousel/3-wildlife-rehab.webp";
import researchImg from "./assets/img/homepage/carousel/4-research.webp";
import networkImg from "./assets/img/homepage/carousel/5-network.webp";

// Importing the team's members images
import ilariaImg from "./assets/img/team/grid/ilaria.webp";
import alessiaImg from "./assets/img/team/grid/alessia.webp";
import elenaImg from "./assets/img/team/grid/elena.webp";
import giuliaImg from "./assets/img/team/grid/giulia.webp";
import mauraImg from "./assets/img/team/grid/maura.webp";
import robertoImg from "./assets/img/team/grid/roberto.webp";

// Importing the events's images
import event2025Marzo29 from "./assets/img/events/posters/2025/Marzo/29-03-25.webp";
import event2024Novembre27 from "./assets/img/events/posters/2024/Novembre/27-11-24.webp";

// Importing the flow chart images
import italianFlowChart from "./assets/img/sos-animal/flow-chart.webp";
import englishFlowChart from "./assets/img/sos-animal/flow-chart-eng.webp";

// Importing the sos cards' images
import sosBox from "./assets/img/sos-animal/cards/1-box.webp";
import sosFoodWater from "./assets/img/sos-animal/cards/2-food-water.webp";
import sosWhoToCall from "./assets/img/sos-animal/cards/3-who-to-call.webp";
import sosNakedMammals from "./assets/img/sos-animal/cards/4-naked-mammals.webp";
import sosFurryMammals from "./assets/img/sos-animal/cards/5-furry-mammals.webp";
import sosNoNestBird from "./assets/img/sos-animal/cards/6-no-nest-bird.webp";
import sosSwift from "./assets/img/sos-animal/cards/7-swift.webp";
import sosBat from "./assets/img/sos-animal/cards/8-bat.webp";

export const store = reactive({
  // Variable for Team's single card, Sos Animals' single card and satispay's qr code
  showDetails: false,

  // Variable for Speaker's single card
  showSpeaker: false,

  // Variable for mobile and desktop viewport
  mobileViewport: false,
  desktopViewport: false,

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
      image: socialImg,
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
      image: volunteerImg,
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
      image: rehabImg,
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
      image: researchImg,
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
      image: networkImg,
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
      image: ilariaImg,
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
      image: alessiaImg,
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
      image: elenaImg,
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
      image: giuliaImg,
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
      image: mauraImg,
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
      image: robertoImg,
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
      poster: event2025Marzo29,
      description: computed(() => {
        const { t } = useI18n();
        return t("events.0.description");
      }),
      speakers: computed(() => {
        const { t } = useI18n();
        return [
          {
            name: t("events.0.speakers.0.name"),
            image: ilariaImg,
            role: t("events.0.speakers.0.role"),
          },
          {
            name: t("events.0.speakers.1.name"),
            image: giuliaImg,
            role: t("events.0.speakers.1.role"),
          },
          {
            name: t("events.0.speakers.2.name"),
            image: alessiaImg,
            role: t("events.0.speakers.2.role"),
          },
        ];
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
      poster: event2024Novembre27,
      description: computed(() => {
        const { t } = useI18n();
        return t("events.1.description");
      }),

      // Empty array for events with no speakers
      speakers: computed(() => []),
    },
  ],

  flowChart: [
    {
      nameIta: italianFlowChart,
    },
    {
      nameEng: englishFlowChart,
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
      image: sosBox,
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
      image: sosFoodWater,
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
      image: sosWhoToCall,
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
      image: sosNakedMammals,
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
      image: sosFurryMammals,
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
      image: sosNoNestBird,
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
      image: sosSwift,
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
      image: sosBat,
      description: computed(() => {
        const { t } = useI18n();
        return t("sosAnimals.sosCards.7.description");
      }),
    },
  ],
});
