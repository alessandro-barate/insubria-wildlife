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
    // Year read from the URL
    selectedYear() {
      return this.$route.params.year || null;
    },

    // Available years
    availableYears() {
      const years = new Set();
      this.store.events.forEach((event) => {
        const dateStr = event.date.value || event.date;
        const yearMatch = dateStr.match(/\/(\d{4})\//);

        if (yearMatch) {
          years.add(yearMatch[0]);
        }
      });

      return Array.from(years).sort().reverse();
    },

    // Events filtered by year
    filteredEvents() {
      if (!this.selectedYear) return [];

      return [...this.store.events].reverse().filter((event) => {
        const dateStr = event.date.value || event.date;

        return dateStr.includes(this.selectedYear);
      });
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
    // Navigate to the selected year
    selectYear(year) {
      const lang = this.$i18n.locale;
      const path = lang === "it" ? `/it/eventi/${year}` : `/en/events/${year}`;
      this.$router.push(path);
    },

    // Go back to the year selection
    backToYearSelection() {
      const lang = this.$i18n.locale;
      const path = lang === "it" ? "/it/eventi" : "/en/events";
      this.$router.push(path);
    },

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

  // Validation: if the year in the URL doesn't exist, go back to the selection
  watch: {
    selectedYear: {
      immediate: true,
      handler(year) {
        if (year && !this.availableYears.includes(year)) {
          this.backToYearSelection();
        }
      },
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
  // Email for event with index 5
  emails: {
    5: {
      user: "christian.aletti",
      domain: "legambientelombardia.it",
    },
  },

  // Default email to Insubria
  defaultEmail: {
    user: "insubria.wildlife",
    domain: "gmail.com",
  },

  subjects: {
    it: {},
    en: {},
  },
  labels: {
    it: {
      default: "scrivendo alla email",
    },
    en: {
      default: "writing to the email",
    },
  },
};

// Process the description changing the EMAIL marker with a link
const getDescription = (index) => {
  // Getting the event's original description
  let desc = t("events." + index + ".description");

  // If the description is empty, return empty string
  if (!desc) {
    return "";
  }

  // Determining which email configuration to use
  const emailConfig = emailParams.emails[index] || emailParams.defaultEmail;

  // Adding the default index keys for every event
  emailParams.subjects.it[index] = `Richiesta iscrizione evento ${t(
    "events." + index + ".title"
  )}`;
  emailParams.subjects.en[index] = `Registration request for ${t(
    "events." + index + ".title"
  )} event`;

  // Preparing the email link
  const subject =
    emailParams.subjects[locale.value][index] ||
    emailParams.subjects[locale.value].default;

  const linkText =
    emailParams.labels[locale.value][index] ||
    emailParams.labels[locale.value].default;

  const emailLink = `mailto:${emailConfig.user}&#64;${
    emailConfig.domain
  }?subject=${encodeURIComponent(subject)}`;

  // Participation sentences in italian and english
  const itParticipationPhrase = "partecipare serve prenotarsi";
  const enParticipationPhrase = "participate you need to register,";

  // Free donation sentences
  const itDonationPhrase =
    "e si chiede un'offerta ad importo libero per contribuire alla copertura dei costi";
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

    // Determine what content remains after processing
    let remainingContent = "";

    if (hasDonationPhrase) {
      // If donation phrase exists, find where it ends and get everything after
      const donationStart = afterPhrase.indexOf(donationPhrase);
      const donationEnd = donationStart + donationPhrase.length;
      remainingContent = afterPhrase.substring(donationEnd);

      // Build final text with donation phrase
      const finalText =
        beforePhrase +
        newParticipationPhrase +
        ", " +
        donationPhrase +
        "." +
        remainingContent;

      return finalText;
    } else {
      // If no donation phrase, keep all remainig content after participation phrase
      const finalText = beforePhrase + newParticipationPhrase + afterPhrase;

      return finalText;
    }
  } else {
    return desc;
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

          <!-- Selezione Anno -->
          <div v-if="!selectedYear" class="year-selection">
            <p>{{ t("events.selectYearParagraph") }}</p>
            <div class="years-grid">
              <div
                v-for="year in availableYears"
                :key="year"
                class="year-card"
                @click="selectYear(year)"
              >
                <h2>{{ year }}</h2>
              </div>
            </div>
          </div>

          <!-- Lista Eventi -->
          <div v-else class="events-section">
            <h2 class="year-title">
              {{ t("events.eventsOf") }} {{ selectedYear }}
            </h2>

            <!-- Back button container -->
            <button @click="backToYearSelection" class="back-button d-flex">
              <img
                src="../assets/img/events/icons/back-button-white.svg"
                alt="Back arrow"
                class="back-icon"
              />
              <img
                src="../assets/img/events/icons/back-button-black.svg"
                alt="Back arrow"
                class="back-icon-hover"
              />
              {{ t("events.backToYears.text") }}
            </button>
            <!-- Back button container -->

            <div class="big-events-container d-flex">
              <div
                v-for="(event, index) in filteredEvents"
                :key="index"
                class="events-container"
              >
                <div class="event-card">
                  <h2 class="capitalize">{{ event.title }}</h2>
                  <p>{{ event.date }}</p>
                  <figure
                    @click="
                      toggleZoom(store.events.findIndex((e) => e === event))
                    "
                  >
                    <img
                      :src="event.poster"
                      :alt="
                        t(
                          'events.' +
                            store.events.findIndex((e) => e === event) +
                            '.alt'
                        )
                      "
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- Zoomed poster container -->
  <Transition name="fade-scale">
    <div v-if="showZoom" class="zoomed-container">
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
            <div class="details-info">
              <div class="pin-container">
                <img
                  src="../assets/img/events/icons/pin-location-icon.svg"
                  alt=""
                />
                <p v-html="$sanitize(store.events[currentIndex].location)"></p>
              </div>
              <div class="pin-container">
                <img src="../assets/img/events/icons/euro-icon.svg" alt="" />
                <p v-html="$sanitize(store.events[currentIndex].price)"></p>
              </div>
              <div class="pin-container">
                <img
                  src="../assets/img/events/icons/calendar-icon.svg"
                  alt=""
                />
                <p v-html="$sanitize(store.events[currentIndex].calendar)"></p>
              </div>
              <div class="pin-container">
                <img src="../assets/img/events/icons/ticket-icon.svg" alt="" />
                <p v-html="$sanitize(store.events[currentIndex].ticket)"></p>
              </div>
            </div>
          </figure>
        </div>
        <div class="description-column">
          <div class="event-description">
            <p v-html="$sanitize(getDescription(currentIndex))"></p>
            <div
              class="speakers-container"
              v-if="
                store.events[currentIndex].speakers &&
                store.events[currentIndex].speakers.length > 0
              "
            >
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
            </div>
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
// Stili esistenti
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

// Nuovi stili per selezione anni
.year-selection {
  text-align: center;
  padding: 0 40px 40px 40px;

  p {
    margin-bottom: 50px;
    font-size: 20px;
  }
}

.years-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.year-card {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 107, 58, 0.5);
  // border: 2px solid rgba(255, 255, 255, 0.753);
  border-radius: 15px;
  padding: 60px 30px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background: rgba(255, 107, 58, 0.1);
    border-color: #ff6b3a;
    transform: scale(1.05);
  }

  h2 {
    font-size: 48px;
    color: rgba(255, 255, 255, 0.753);
  }
}

.back-button {
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid #ff6b3a;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 30px;
  transition: all 0.5s ease;
  align-items: center;
  gap: 10px;
  position: relative;

  // Icona normale (visibile di default)
  .back-icon {
    width: 20px;
    height: 20px;
    transition: opacity 0.5s ease;
    opacity: 1;
  }

  // Icona hover (nascosta di default)
  .back-icon-hover {
    width: 20px;
    height: 20px;
    position: absolute;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  &:hover {
    color: black;
    background: #ff6b3a;
    transform: scale(1.03);

    // Al hover: nascondi icona normale
    .back-icon {
      opacity: 0;
    }

    // Al hover: mostra icona nera
    .back-icon-hover {
      opacity: 1;
    }
  }
}

.year-title {
  font-size: 31px;
  margin-bottom: 30px;
  color: #ff6b3a;
}

.events-section {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Stili esistenti per eventi
.events-container {
  width: 50%;
  margin-top: 40px;
}

.big-events-container {
  flex-wrap: wrap;
}

.image-column {
  width: 50%;
  height: 100%;
  display: flex;
  max-height: 100%;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  figure {
    margin-top: 9%;
  }
}

.description-column {
  width: 50%;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
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
    border-radius: 10px;
    transform: scale(1.02);
    cursor: url(../assets/img/cursor/binoculars-icon.svg), zoom-in;
  }
}

.zoomed-container img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.pin-container {
  width: 90%;
  display: flex;
  justify-content: center;
  padding-top: 10px;

  img {
    width: 5%;
    margin-right: 10px;
  }

  p {
    width: 65%;
    margin-left: 0;
    font-size: 17px;
    padding-top: 1%;
  }
}

.zoomed-container .zoom-close-btn {
  position: absolute;
  top: 20px;
  left: 30px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;

  &:hover {
    transform: scale(1.2);
  }
}

.zoomed-event-container {
  width: 85%;
  display: flex;
  height: 85vh;
  margin: 0 auto;

  .image-column img {
    border-radius: 10px;
  }
}

.event-description {
  width: 100%;
  padding-top: 1px;
  padding-left: 40px;
  padding-right: 40px;
  overflow-y: auto;
  height: 100%;
  max-height: 100%;

  p {
    font-size: 18px;
  }
}

.image-column figure:has(img[alt*="eventi di Dicembre"]),
.image-column figure:has(img[alt*="the December events"]) {
  margin-top: 36%;
}

.zoomed-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
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
    border: 2px solid #ff6b3a;
  }
}

.speakers-container {
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

// Media queries
@media (max-width: 768px) {
  .years-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .year-card {
    padding: 40px 20px;

    h2 {
      font-size: 36px;
    }
  }
}

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
    overflow-y: unset;
  }

  .zoomed-event-container {
    width: 85%;
    display: block;
    padding-top: 10px;

    .description-column {
      width: 100%;
    }

    .event-description {
      width: 100%;
      margin-top: 20px;
      padding-left: 0;
      padding-right: 0;
      padding-top: 20px;
      padding-bottom: 70px;
    }

    &:has(img[alt*="eventi di Dicembre"]),
    &:has(img[alt*="the December events"]) {
      .event-description {
        margin-top: 320px;
      }
    }

    .image-column figure:has(img[alt*="eventi di Dicembre"]),
    .image-column figure:has(img[alt*="the December events"]) {
      margin-top: 95%;
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

  .pin-container img {
    width: 5%;
  }

  .pin-container p {
    text-align: left;
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
</style>
