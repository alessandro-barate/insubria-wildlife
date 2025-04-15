<script>
import { store } from "../store.js";
export default {
  name: "Eventi",

  data() {
    return {
      store,
      showZoom: false,
      currentIndex: null,
      speakerIndex: null,
      emailParams: {
        user: "insubria.wildlife",
        domain: "gmail.com",
        subjects: {
          it: {
            0: "Richiesta di iscrizione Equilibrinatura",
            default: "Richiesta dal sito",
          },
          en: {
            0: "Equilibrinatura registration request",
            default: "Request from website",
          },
        },
        labels: {
          it: {
            0: "scrivendoci alla nostra email",
            default: "contattaci",
          },
          en: {
            0: "writing to our email",
            default: "contact us",
          },
        },
      },
    };
  },

  computed: {
    // Events array in reverse order
    reversedEvents() {
      return [...this.store.events].reverse();
    },

    // Build the email link dynamically
    emailLink() {
      const lang = this.$i18n.locale;
      const eventIndex = this.currentIndex;
      const subject =
        this.emailParams.subjects[lang][eventIndex] ||
        this.emailParams.subjects[lang].default;

      return `mailto:${this.emailParams.user}@${
        this.emailParams.domain
      }?subject=${encodeURIComponent(subject)}`;
    },

    // Get the link label based on the chosen language and event
    emailLinkText() {
      const lang = this.$i18n.locale;
      const eventIndex = this.currentIndex;

      return (
        this.emailParams.labels[lang][eventIndex] ||
        this.emailParams.labels[lang].default
      );
    },
  },

  methods: {
    // Function to zoom and show the event's description when a poster is clicked
    toggleZoom(index) {
      this.showZoom = !this.showZoom;
      this.currentIndex = index;
      document.body.style.overflow = this.showZoom ? "hidden" : "";
    },

    // Function to show the speaker's details
    showSpeakerDetails(speakerIndex) {
      this.store.showSpeaker = true;
      this.speakerIndex = speakerIndex;
      document.body.style.overflow = "hidden";
    },

    // Function to hide the speaker's details
    hideSpeakerDetails() {
      this.store.showSpeaker = false;
      document.body.style.overflow = "";
    },
  },
};
</script>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, onMounted, onBeforeUnmount } from "vue";
const { t, locale } = useI18n();

// Default language to Italian if no other language is selected
if (!localStorage.getItem("language")) {
  localStorage.setItem("language", "it");
}

// Loading the saved language
const savedLanguage = localStorage.getItem("language");
if (savedLanguage) {
  locale.value = savedLanguage;
}

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("language", lang);
};

// Email configuration for descriptions
const emailParams = {
  user: "insubria.wildlife",
  domain: "gmail.com",
  subjects: {
    it: {},
    en: {},
  },
  labels: {
    it: {
      default: "scrivendo alla nostra email",
    },
    en: {
      default: "writing to our email",
    },
  },
};

// Process the description changing the EMAIL marker with a link
// Versione corretta che verifica accuratamente la presenza delle frasi
const getDescription = (index) => {
  // Getting the event's original description
  let desc = t("events." + index + ".description");

  // If the description is empty, return empty string
  if (!desc) {
    return "";
  }

  // Adding the default index keys for every event
  emailParams.subjects.it[index] = `Richiesta informazioni evento ${t(
    "events." + index + ".title"
  )}`;
  emailParams.subjects.en[index] = `Request information for ${t(
    "events." + index + ".title"
  )} event`;

  // Preparing the email link
  const subject =
    emailParams.subjects[locale.value][index] ||
    emailParams.subjects[locale.value].default;
  const linkText =
    emailParams.labels[locale.value][index] ||
    emailParams.labels[locale.value].default;
  const emailLink = `mailto:${emailParams.user}&#64;${
    emailParams.domain
  }?subject=${encodeURIComponent(subject)}`;

  // Participation sentences in italian and english
  const itParticipationPhrase = "Per partecipare serve prenotarsi";
  const enParticipationPhrase = "To participate you need to register";

  // Free donation sentences
  const itDonationPhrase =
    "e si chiede un'offerta libera per contribuire alla copertura dei costi";
  const enDonationPhrase =
    "and a voluntary donation is requested to contribute to covering the costs";

  // Determining the participation sentence based on the language
  const participationPhrase =
    locale.value === "it" ? itParticipationPhrase : enParticipationPhrase;

  // Getting the sentence position in the description
  const phrasePosition = desc.indexOf(participationPhrase);

  if (phrasePosition !== -1) {
    // Splitting the description in 2 parts: before and after including the participation sentence
    const beforePhrase = desc.substring(0, phrasePosition);

    // Extracting the part after the participation sentence (might contain the donation phrase)
    const afterPhrase = desc.substring(
      phrasePosition + participationPhrase.length
    );

    // Checking if the part after contains the donation phrase
    const donationPhrase =
      locale.value === "it" ? itDonationPhrase : enDonationPhrase;
    const hasDonationPhrase = afterPhrase.includes(donationPhrase);

    // Building the new participation phrase with the email link
    const newParticipationPhrase =
      participationPhrase +
      ` <a href="${emailLink}" class="mail-link">${linkText}</a>`;

    // Adding the donation phrase only if it was present in the original
    const finalText =
      beforePhrase +
      newParticipationPhrase +
      (hasDonationPhrase ? ", " + donationPhrase + "." : "");

    return finalText;
  } else {
    // If the participation phrase is not present, add it at the end
    const newParticipationPhrase =
      participationPhrase +
      ` <a href="${emailLink}" class="mail-link">${linkText}</a>`;

    return desc + "<br><br>" + newParticipationPhrase;
  }
};

// Set up the email click handler
const emailClickHandler = ref(null);

// Function to set up the email click handler
const setupEmailClickHandler = () => {
  emailClickHandler.value = (event) => {
    if (
      event.target.tagName === "A" &&
      event.target.href &&
      event.target.href.startsWith("mailto:")
    ) {
      console.log("Email link clicked");
    }
  };

  document.addEventListener("click", emailClickHandler.value);
};

// Function to clean up the email click handler
const cleanupEmailClickHandler = () => {
  if (emailClickHandler.value) {
    document.removeEventListener("click", emailClickHandler.value);
  }
};

// Lifecycle hooks for managing the event listener
onMounted(() => {
  setupEmailClickHandler();
});

onBeforeUnmount(() => {
  cleanupEmailClickHandler();
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col overlay">
        <section>
          <h1 class="uppercase">{{ t("nav.events") }}</h1>
          <p>
            {{ t("events.firstParagraph") }}
          </p>
          <div class="big-events-container d-flex">
            <div
              v-for="(event, index) in reversedEvents"
              :key="index"
              class="events-container"
            >
              <div class="event-card">
                <h2 class="capitalize">{{ event.title }}</h2>
                <p>{{ event.date }}</p>
                <figure @click="toggleZoom(store.events.length - 1 - index)">
                  <img
                    :src="event.poster"
                    :alt="
                      t('events.' + (store.events.length - 1 - index) + '.alt')
                    "
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- Zoomed poster container -->
  <Transition name="fade-scale">
    <div v-if="showZoom" id="main-zoomed-container" class="zoomed-container">
      <div class="zoom-close-btn" @click.stop="toggleZoom">✕</div>
      <div class="zoomed-event-container">
        <div class="image-column">
          <figure>
            <img
              :src="store.events[currentIndex].poster"
              :alt="t('events.' + currentIndex + '.alt')"
              loading="lazy"
              @click.stop
            />
          </figure>
        </div>
        <div class="event-description">
          <p v-html="$sanitize(getDescription(currentIndex))"></p>
          <div
            class="speakers-container"
            v-if="
              store.events[currentIndex].speakers &&
              store.events[currentIndex].speakers.length > 0
            "
          >
            <!-- Speaker -->
            <div
              v-for="(speaker, index) in store.events[currentIndex].speakers"
              :key="index"
              class="speaker"
            >
              <figure>
                <img :src="speaker.image" :alt="speaker.alt" />
              </figure>
              <div class="speaker-name-container">
                <p v-html="$sanitize(speaker.name)"></p>
                <div class="button-container info-btn">
                  <button
                    @click="showSpeakerDetails(index)"
                    :aria-label="t('team.findOutButton')"
                  >
                    {{ t("team.findOut") }}
                  </button>
                </div>
              </div>
            </div>
            <!-- END speaker -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <!-- END zoomed poster container -->

  <!-- Zoomed speaker container -->
  <Transition name="fade-scale">
    <div v-show="store.showSpeaker" class="zoomed-container">
      <div
        v-if="store.showSpeaker"
        id="single-speaker-container"
        class="overlay-single-card"
      >
        <div class="scrollbar-container">
          <div class="details-btn">
            <button @click="hideSpeakerDetails()">✕</button>
          </div>
          <div class="details-img">
            <img
              :src="store.events[currentIndex].speakers[speakerIndex].image"
              :alt="store.events[currentIndex].speakers[speakerIndex].alt"
              loading="lazy"
            />
          </div>
          <div class="details-description">
            <p
              v-html="
                $sanitize(
                  store.events[currentIndex].speakers[speakerIndex].description
                )
              "
            ></p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  <!-- END zoomed speaker container -->
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/events/background/little-birds.webp);
}

.row {
  padding-top: 50px;
  padding-bottom: 50px;
}

.col {
  padding-bottom: 60px;
}

.overlay {
  width: 80%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

section {
  width: 80%;
}

.events-container {
  width: 50%;
  margin-top: 40px;
}

.big-events-container {
  flex-wrap: wrap;
}

.image-column {
  width: 50%;
}

.event-card {
  width: 100%;
  margin: 0;

  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  figure img {
    width: 60%;
    cursor: url(../assets/img/cursor/binoculars-icon.svg), zoom-in;
  }
}

.zoomed-container img {
  width: 80%;
  max-height: 80vh;
  object-fit: contain;
}

.zoomed-container .zoom-close-btn {
  position: absolute;
  top: 20px;
  left: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    transform: scale(1.2);
  }
}

.zoomed-event-container {
  width: 85%;
  display: flex;
}

.event-description {
  width: 50%;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;

  p {
    font-size: 18px;
  }
}

.scrollbar-container {
  overflow: hidden;
}

.zoomed-container {
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.97);
}

.speaker {
  display: flex;
  text-align: end;
  padding-top: 10px;
  padding-bottom: 10px;

  figure {
    margin-left: -10px;
  }

  img {
    border-radius: 50%;
  }
}

.speakers-container {
  overflow: auto;
  margin-top: 20px;
  max-height: 330px;

  figure {
    width: 45%;

    img {
      width: 40%;
    }
  }
}

.speaker-name-container {
  width: 45%;
  margin-left: 0;
  padding-top: 25px;
  text-align: start;
}

.button-container {
  margin-left: 20px;
}

.info-btn button {
  font-size: 13px;
  padding: 5px 12px 5px 12px;
}

.overlay-single-card {
  top: 45%;
  max-height: 620px;

  .scrollbar-container {
    width: 100%;
    height: 600px;
    overflow: auto;
  }
}

.details-btn {
  margin-left: 20px;
}

.details-img {
  width: 100%;
  text-align: center;

  img {
    width: 25vh;
  }
}

.details-description {
  width: 85%;
  overflow: auto;
}

.speaker-name-container {
  padding-top: 5px;
}

.button-container {
  margin-left: 0;
}

// Media queries
@media (max-width: 500px) {
  #single-speaker-container {
    padding-top: 0px;
  }

  .overlay-single-card .scrollbar-container {
    height: 80vh;
  }

  .speakers-container figure {
    display: flex;
    align-items: center;

    img {
      width: 80%;
    }
  }
}

@media (max-width: 936px) {
  .big-events-container {
    display: block;
    flex-wrap: nowrap;

    .events-container {
      width: 90%;
    }

    figure img {
      width: 100%;
    }
  }

  .image-column {
    width: 100%;
    margin-top: 40px;
  }

  .zoomed-event-container {
    width: 85%;
    display: block;
    padding-top: 10px;

    .event-description {
      width: 100%;
      padding-top: 20px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 70px;
    }
  }

  .zoomed-container {
    text-align: center;
    overflow: auto;
    display: block;

    img {
      width: 80%;
    }

    .zoom-close-btn {
      top: 10px;
      left: 10px;
    }

    figure {
      padding: 0;
      margin: 0;
    }
  }
}

@media only screen and (min-width: 501px) and (max-width: 936px) {
  .zoomed-container .details-img {
    width: 50%;
  }

  .speaker {
    text-align: center;

    .speaker-name-container {
      padding-top: 2.5rem;
    }
  }

  .speakers-container figure {
    width: 60%;
  }
}
// END media queries
</style>
