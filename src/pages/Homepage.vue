<script setup>
import { store } from "../store.js";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

// Defaulf language to Italian if no other language is selected
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
</script>

<script>
export default {
  name: "Homepage",

  data() {
    return {
      store,
      currentIndex: 0,
      intervalTimer: false,
      isTransitioning: false,
    };
  },

  methods: {
    nextCard() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.store.visions.length;

        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }, 50);
    },

    prevCard() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;

      setTimeout(() => {
        this.currentIndex =
          (this.currentIndex - 1 + this.store.visions.length) %
          this.store.visions.length;

        setTimeout(() => {
          this.isTransitioning = false;
        }, 500);
      }, 50);
    },
  },
};
</script>

<template>
  <div class="container" @scroll="windowScroll">
    <div class="row">
      <div class="col">
        <!-- Jumbo section -->
        <section class="jumbo">
          <h1 class="padding-l-60">Insubria <span>Wild</span>Life</h1>
          <p class="padding-l-60">
            {{ t("homepage.jumbo") }}
          </p>
        </section>
        <!-- END jumbo section -->

        <!-- Mission section -->
        <section class="mission">
          <article class="overlay margin-l-60">
            <h2 class="uppercase">mission</h2>
            <TranslatedTextParagraph text-key="homepage.mission.paragraph" />
            <br />
            <br />

            <p id="join">
              <a id="join-2" :aria-label="t('nav.aria-labels.supportUs')"
                ><router-link :to="{ name: 'Supportaci' }" class="link"
                  ><TranslatedTextSpan text-key="homepage.mission.joining"
                /></router-link>
              </a>
              <TranslatedTextSpan text-key="homepage.mission.description" />
            </p>

            <!-- Events link section -->
            <aside class="events-container">
              <div class="events">
                <p class="events-update">
                  {{ t("homepage.mission.eventsLink") }}
                </p>
                <a :aria-label="t('nav.aria-labels.events')">
                  <router-link :to="{ name: 'Eventi' }" class="link">
                    <button
                      class="help-btn"
                      :aria-label="t('homepage.mission.eventsLink')"
                    >
                      {{ t("homepage.mission.button") }}
                    </button></router-link
                  >
                </a>
              </div>
            </aside>
            <!-- END events link section -->
          </article>
        </section>
        <!-- END mission section -->

        <!-- Video section -->
        <section class="video-container">
          <div class="video-background">
            <video loading="lazy" autoplay muted loop kind="">
              <source
                src="../assets/video/background-video.webm"
                type="video/webm"
              />
              <source
                src="../assets/video/background-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        <!-- END video section -->

        <!-- Vision section -->
        <section class="vision d-flex">
          <!-- Animal help section -->
          <aside class="animal-help-container">
            <div class="animal-help">
              <h2>{{ t("homepage.vision.help.title") }}</h2>
              <a :aria-label="t('nav.aria-labels.sosAnimal')">
                <router-link :to="{ name: 'SosAnimali' }" class="link">
                  <button
                    :aria-label="t('homepage.vision.help.buttonAriaLabel')"
                  >
                    <TranslatedTextSpan
                      text-key="homepage.vision.help.button"
                    /></button
                ></router-link>
              </a>
            </div>
          </aside>
          <!-- END animal help section -->

          <!-- Vision description -->
          <article class="vision-card d-flex">
            <div class="overlay margin-r-60">
              <h2 class="uppercase">vision</h2>
              <p>{{ t("homepage.vision.paragraph") }}</p>

              <!-- Carousel container -->
              <div class="carousel-wrapper">
                <div
                  v-for="(vision, index) in store.visions"
                  :key="index"
                  v-show="index === currentIndex"
                  class="card"
                >
                  <div class="card-box">
                    <div class="card-body">
                      <!-- Carousel -->
                      <div class="carousel-img-container">
                        <!-- Carousel buttons -->
                        <div class="buttons-container d-flex">
                          <!-- Carousel prev button -->
                          <div class="carousel-button-left d-flex">
                            <button
                              @click="prevCard"
                              id="prev-btn"
                              :disabled="isTransitioning"
                              :aria-label="t('homepage.vision.prevCardButton')"
                            >
                              <
                            </button>
                          </div>
                          <!-- END carousel prev button -->

                          <!-- Carousel image -->
                          <figure class="image-container">
                            <transition name="fade" mode="out-in">
                              <img
                                :key="currentIndex"
                                :src="store.visions[currentIndex].image"
                                :alt="store.visions[currentIndex].alt"
                                loading="lazy"
                              />
                            </transition>
                          </figure>
                          <!-- END carousel image -->

                          <!-- Carousel next button -->
                          <div class="carousel-button-right d-flex">
                            <button
                              @click="nextCard"
                              id="next-btn"
                              :disabled="isTransitioning"
                              :aria-label="t('homepage.vision.nextCardButton')"
                            >
                              >
                            </button>
                          </div>
                          <!-- END carousel next button -->
                        </div>
                        <!-- END carousel buttons -->
                      </div>
                      <!-- END carousel -->

                      <!-- Bottom paragraph -->
                      <div class="bottom-paragraph-container">
                        <Transition name="fade" mode="out-in">
                          <p :key="currentIndex">
                            {{ store.visions[currentIndex].description }}
                          </p>
                        </Transition>
                      </div>
                      <!-- END bottom paragraph -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- END carousel container -->
            </div>
          </article>
          <!-- END vision description -->
        </section>
        <!-- END vision section -->
      </div>
    </div>
    <!-- Cookies panel -->
    <div class="zoomed-container">
      <div class="cookie-banner overlay">
        <!-- Cookie banner title -->
        <div class="cookie-banner-title">
          <h3>I cookie migliori sono quelli che restano tra noi</h3>
        </div>
        <!-- END cookie banner title -->

        <!-- Cookie banner description -->
        <div class="cookie-banner-description">
          <p>
            Come la flora e la fauna che resta nel loro habitat, i cookie che
            usiamo restano tra di noi: non collezioniamo nè cediamo a terzi
            alcun vostro dato. Usiamo solo un cookie strettamente necessario al
            funzionamento del sito, nello specifico per permettere la
            navigazione nella lingua da te selezionata. Continuando a navigare
            ne accetti l'utilizzo.
          </p>
        </div>
        <!-- END cookie banner description -->

        <!-- Cookie banner button -->
        <div class="cookie-banner-button">
          <button>Ho capito</button>
        </div>
        <!-- END cookie banner button -->
      </div>
    </div>
    <!-- END cookies panel -->
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
}

h1 {
  color: black;
  padding-top: 100px;
  font-size: 95px;

  span {
    color: #ff6a3a;
  }
}

.events button,
.link button {
  border: none;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
  padding: 10px 30px 10px 30px;
  border-radius: 20px;
  background-color: #ff6b3ad8;

  &:hover {
    background-color: #ff6b3a;
    box-shadow: 0 -1px 10px #ff6b3ad8;
    transform: scale(1.05);
  }
}

.jumbo {
  padding-bottom: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 20%;
  background-image: url(../assets/img/homepage/background/bird-jumbo-desktop.webp);

  p {
    font-size: 19px;
    font-weight: bold;
    padding-top: 15px;
    color: black;
  }
}

.video-container {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  .video-background {
    width: 80%;
  }

  video {
    width: 100%;
    height: 100%;
  }
}

.overlay {
  width: 55%;

  #join {
    text-align: center;
  }

  #join-2 .link {
    color: #ff6a3a;

    span {
      font-weight: bold;
    }

    &:hover {
      color: #ff2701;
    }
  }

  .events-container,
  .animal-help-container {
    width: 55%;
    margin-top: 70px;
    font-weight: bold;
    text-align: center;

    p {
      font-size: 25px;
      line-height: 35px;
      padding-bottom: 20px;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
}

.mission,
.vision {
  padding-top: 30px;
  color: rgba(255, 255, 255, 0.753);

  h2 {
    width: 60%;
    text-align: center;
    font-size: 30px;
    padding-bottom: 15px;
  }

  p {
    width: 90%;
    line-height: 23px;
  }
}

.mission {
  margin-top: 10px;
  margin-right: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url(../assets/img/homepage/background/deer-night-desktop.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 30%;
}

.vision {
  padding-bottom: 30px;
  background-image: url(../assets/img/homepage/background/eagle-desktop.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  .overlay {
    width: 80%;
  }

  .animal-help {
    width: 100%;
    color: rgb(0, 0, 0);
    text-align: center;

    p {
      font-size: 30px;
      line-height: 33px;
      font-weight: bold;
      padding-bottom: 30px;
    }
  }

  .carousel-img-container {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 20px;
  }

  .image-container {
    position: relative;
    width: 24vh; /* Stessa larghezza delle tue immagini attuali */
    height: 24vh; /* Stessa altezza delle tue immagini attuali */
    margin-left: 5%;
    margin-right: 5%;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    object-fit: cover;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  figure {
    margin-left: 5%;
    margin-right: 5%;

    img {
      width: 24vh;
      height: 24vh;
      object-fit: cover;
      border-radius: 100px;
    }
  }

  .card-body p {
    padding-bottom: 10px;
    text-align: center;
  }

  .buttons-container {
    align-items: center;
  }

  .buttons-container p {
    margin-left: 15px;
    margin-right: 15px;
  }

  .carousel-button-left,
  .carousel-button-right {
    text-align: center;
  }

  .carousel-button-left {
    text-align: end;
    margin-right: 0;
    align-items: center;
  }

  .carousel-button-right {
    text-align: start;
    margin-left: 0;
    align-items: center;
  }

  #prev-btn,
  #next-btn {
    width: 27px;
    height: 27px;
    border: none;
    color: white;
    font-size: 17px;
    border-radius: 50%;
    transition-duration: 0.5s;
    background-color: rgb(0, 0, 0);
    transition-property: background-color, box-shadow;

    &:hover {
      background-color: rgba(100, 56, 56, 0.425);
      box-shadow: 2px 2px 2px rgba(100, 56, 56, 0.2);
      transform: scale(1.2);
    }

    &:disabled {
      opacity: 0.5;
    }
  }
}

.bottom-paragraph-container {
  position: relative;
  min-height: 80px;
  margin-top: 20px;
}

.bottom-paragraph-container p {
  width: 90%;
  text-align: center;
  padding-bottom: 10px;
}

.cookie-banner {
  width: 35%;
  padding: 20px;

  &.overlay {
    width: 35%;
    padding: 40px;
  }

  .cookie-banner-title,
  .cookie-banner-description {
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
  }

  p {
    font-size: 16px;
  }

  .cookie-banner-button {
    text-align: center;
    margin-top: 20px;

    button {
      border: none;
      color: #ff6a3a;
      font-size: 14px;
      font-weight: bold;
      background-color: transparent;

      &:hover {
        color: #ff2701;
        transform: scale(1.1);
      }
    }
  }
}

/* Media queries */
/* Mobile layout */
@media (max-width: 375px) {
}

@media (max-width: 936px) {
  h1 {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    font-size: 3.9em;
  }

  h2 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 15px;
  }

  .jumbo {
    padding-top: 100px;
    background-position: 45% 25%;
    background-image: url(../assets/img/homepage/background/bird-jumbo-reverse-mobile.webp);

    p {
      margin-top: 10px;
      font-size: 1.45em;
      width: 70%;
      padding-left: 0;
      text-align: center;
    }
  }

  .overlay {
    width: 80%;
    margin-left: 0;
    margin-right: 0;

    .events-container {
      width: 80%;
    }
  }

  .mission {
    width: 100%;
    display: flex;
    text-align: center;
    position: static;
    justify-content: center;
    background-color: #0d0907;
    background-image: url(../assets/img/homepage/background/bird-coloured-mobile.webp);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    p,
    h2 {
      width: 80%;
    }

    .events-update {
      width: 100%;
      line-height: 25px;
    }
  }

  .vision {
    width: 100%;
    display: block;
    position: static;
    margin-top: 10px;
    margin-right: 0;
    padding-top: 50px;
    background-color: #0d0907;
    background-image: url(../assets/img/homepage/background/fox.jpg);
    background-size: cover;
    background-position: center;

    .vision-card {
      text-align: center;
      justify-content: center;
    }

    .overlay {
      width: 80%;
    }

    p,
    h2 {
      width: 80%;
    }

    .animal-help {
      width: 80%;
      color: black;

      h2 {
        font-size: 1.7em;
      }
    }

    button {
      margin-bottom: 100px;
    }
  }

  .vision .carousel-img-container {
    padding-top: 30px;
  }

  .vision .image-container {
    width: 10em;
    height: 10em;
  }

  .video-container {
    padding-top: 13px;
    padding-bottom: 0;
  }

  .carousel-button-left {
    display: block;
    line-height: 210px;
  }

  .carousel-button-right {
    display: block;
    line-height: 210px;
  }
}
/* END mobile layout */

/* Tablet layout */
@media (min-width: 937px) {
  .vision .carousel-img-container {
    width: 100%;
  }

  .vision .image-container {
    width: 12em;
    height: 12em;
  }
}
/* END tablet layout */

/* Other layout */
@media (max-width: 500px) {
  .vision h2 {
    width: 100%;
    font-size: 2em;
  }
}
/* END other layout */
</style>
