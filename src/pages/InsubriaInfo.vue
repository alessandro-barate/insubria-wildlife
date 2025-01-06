<script>
import { store } from "../store.js";
export default {
  name: "InsubriaInfo",

  data() {
    return {
      store,
      isMobile: false,
      currentIndex: null,
    };
  },

  methods: {
    showParagraph(index) {
      if (!this.isMobile) this.currentIndex = index;
    },

    hideParagraph() {
      if (!this.isMobile) this.currentIndex = null;
    },

    // Click on mobile layout
    toggleParagraph(index) {
      if (!this.isMobile) return;
      this.currentIndex = this.currentIndex === index ? null : index;
    },

    checkIfMobile() {
      this.isMobile = window.innerWidth < 730;
    },
  },

  mounted() {
    this.checkIfMobile();
    window.addEventListener("resize", this.checkIfMobile);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkIfMobile);
  },
};
</script>

<script setup>
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

<template>
  <div class="container">
    <div class="row">
      <!-- History description -->
      <section class="col upper-bg">
        <div class="history-old overlay">
          <h1 class="uppercase">insubria</h1>
          <!-- History old -->
          <div class="insubria-description d-flex">
            <div class="description">
              <h2>{{ t("insubria.history.firstTitle") }}</h2>
              <TranslatedTextParagraph
                text-key="insubria.history.firstParagraph"
              />
              <ul id="insubria-list">
                <li>
                  <h4>
                    {{ t("insubria.history.isolino.name")
                    }}<TranslatedTextSpan
                      text-key="insubria.history.isolino.date"
                    />
                  </h4>
                  <p>{{ t("insubria.history.isolino.explanation") }}</p>
                </li>
                <li>
                  <h4>
                    {{ t("insubria.history.canegrate.name")
                    }}<TranslatedTextSpan
                      text-key="insubria.history.canegrate.date"
                    />
                  </h4>
                </li>
                <li>
                  <h4>
                    {{ t("insubria.history.golasecca.name")
                    }}<TranslatedTextSpan
                      text-key="insubria.history.golasecca.date"
                    />
                  </h4>
                </li>
              </ul>
            </div>

            <!-- Insubria territory container -->
            <div class="img-container d-flex">
              <div class="img-container-2">
                <figure>
                  <img
                    src="../assets/img/insubria/maps/insubria-immagini.png"
                    loading="lazy"
                    alt="Territorio dell'Insubria"
                  />
                </figure>
              </div>
            </div>
            <!-- END Insubria territory container -->
          </div>
          <!-- END history old -->

          <!-- History today -->
          <div class="history-nowaday">
            <div class="insubria-description">
              <h2>{{ t("insubria.history.secondTitle") }}</h2>
              <TranslatedTextParagraph
                text-key="insubria.history.secondParagraph"
              />
            </div>
          </div>
          <!-- END history today -->
        </div>
      </section>
      <!-- END history description -->

      <!-- Why Insubria description -->
      <section class="col middle-bg">
        <div class="why-insubria overlay">
          <h2>Perchè l'Insubria?</h2>
          <div class="why-description">
            <p>
              Abbiamo scelto di focalizzarci su questo territorio proprio perché
              ne riconosciamo il valore naturale e anche le criticità
              dell'incontro tra i due mondi, ovvero quello naturale e quello
              urbanizzato e industrializzato.
              <br />
              <br />
              Crediamo profondamente che una corretta valorizzazione e gestione
              del territorio possa dare vita ad una proficua coesistenza tra
              uomo e natura, e portare di conseguenza anche la comunità ad
              apprezzare le bellezze del proprio territorio.
            </p>
          </div>
        </div>
      </section>
      <!-- END why Insubria description -->

      <!-- Logo explanation -->
      <section class="col lower-bg">
        <div class="logo-container overlay">
          <h2>Il nostro Logo</h2>

          <!-- Logo-real image section -->
          <div class="images-container d-flex">
            <div class="logo-img">
              <img
                src="../assets/img/logo/double-circle.png"
                loading="lazy"
                alt="Insubria logo"
              />
            </div>
            <div class="real-image d-flex">
              <img
                src="../assets/img/insubria/fiorrancino.png"
                loading="lazy"
                alt="Fiorrancino in primo piano"
              />
            </div>
          </div>
          <!-- END logo-real image section -->

          <!-- Bird description -->
          <p class="bird-description">
            Il nostro logo è un <strong>Fiorrancino</strong> -
            <span>Regulus ignicapilla</span> - e qui vi spieghiamo perchè
            l'abbiamo scelto:
          </p>
          <!-- END bird description -->

          <!-- List container -->
          <div class="list-container d-flex">
            <!-- List -->
            <div class="left-section">
              <ul class="characteristics-list">
                <li
                  v-for="(characteristic, index) in store.characteristics"
                  :key="index"
                  @mouseenter="showParagraph(index)"
                  @mouseleave="hideParagraph"
                  @click="isMobile && toggleParagraph(index)"
                >
                  <!-- Description small with chevron -->
                  <div class="characteristic characteristic-2">
                    <h4 class="description-index">
                      {{ characteristic.word }}
                      <div class="chevron-right">
                        <img
                          src="../assets/img/insubria/list-elements/chevron-down.svg"
                          loading="lazy"
                          alt="Chevron destro"
                        />
                      </div>
                    </h4>
                  </div>
                  <!-- END description small with chevron -->

                  <!-- Description big with chevron -->
                  <div class="characteristic characteristic-3">
                    <h4 class="description-title">
                      {{ characteristic.intro }}
                      <div class="chevron-right">
                        <img
                          src="../assets/img/insubria/list-elements/chevron-right.svg"
                          loading="lazy"
                          alt="Chevron destro"
                        />
                      </div>
                    </h4>
                  </div>
                  <!-- END description big with chevron -->
                </li>
              </ul>
            </div>
            <!-- END list -->

            <!-- Description section -->
            <div class="right-section">
              <div
                v-for="(characteristic, index) in store.characteristics"
                :key="index"
                class="paragraph-container"
              >
                <div
                  v-show="currentIndex === index"
                  class="paragraph-card overlay"
                >
                  <div class="scrollbar-container">
                    <div class="close-button">
                      <button @click="toggleParagraph(index)">✕</button>
                    </div>
                    <h2>
                      {{ characteristic.intro }}
                    </h2>
                    <p class="paragraph-description">
                      {{ characteristic.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- END description section -->
          </div>
          <!-- END list container -->

          <!-- Bottom paragraph section -->
          <div class="bottom-paragraph">
            <p>
              Come questo piccolo uccello che esplora instancabilmente il suo
              ambiente, noi ci impegniamo a scoprire e condividere i tesori
              nascosti del nostro territorio.
            </p>
          </div>
          <!-- END bottom paragraph section -->
        </div>
      </section>
      <!-- END logo explanation -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  color: rgba(255, 255, 255, 0.753);

  span {
    font-size: 20px;
  }
}

.col {
  margin-bottom: 10px;
  padding: 50px 30px 50px 30px;
}

h1 {
  text-align: center;
}

h2 {
  font-size: 28px;
  padding-bottom: 10px;
}

h4 {
  font-size: 20px;
}

.history-old {
  width: 80%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  img:hover {
    transform: scale(1.02);
  }
}

.insubria-description {
  width: 90%;

  .description {
    width: 200%;
  }

  #insubria-list li {
    width: 80%;
    padding-top: 15px;
    list-style-type: circle;

    &::marker {
      color: rgba(255, 255, 255, 0.753);
    }
  }

  span {
    font-weight: 400;
  }
}

.img-container {
  align-items: center;

  img {
    width: 170%;
    margin-left: -90px;
  }
}

.why-insubria {
  width: 60%;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }

  .why-description {
    padding: 10px 20px 10px 20px;
  }
}

.logo-container {
  width: 80%;
  text-align: center;

  span {
    font-style: italic;
  }

  .images-container {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .logo-img {
    width: 50%;
    text-align: end;
    padding-right: 30px;

    img {
      width: 50%;
    }
  }

  .real-image {
    width: 50%;
    align-items: center;
    text-align: start;

    img {
      width: 45%;
      margin-left: 20px;
      border-radius: 50%;
    }
  }

  .bird-description {
    padding: 20px 20px 40px 20px;
  }
}

.upper-bg {
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/insubria/background/fox-2.jpg);
}

.middle-bg {
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/insubria/background/orange-bird.jpg);
}

.lower-bg {
  background-size: cover;
  background-position: center;
  background-image: url(../assets/img/insubria/background/deer.jpg);
}

// Bottom list styles
.list-container {
  width: 100%;

  .left-section,
  .right-section {
    width: 50%;
  }

  .right-section {
    position: relative;
  }
}

.characteristics-list {
  width: 100%;
  position: relative;
}

.characteristic {
  width: 80%;
  display: flex;
  cursor: pointer;
  padding-top: 2px;
  margin-left: 100px;
  margin-bottom: 30px;
  align-items: center;
  padding-bottom: 2px;
  position: relative;
  border-radius: 5px;
  color: rgb(255, 255, 255);

  h4 {
    z-index: 3;
    width: 80%;
    margin-left: 15px;
    text-align: start;
    border-radius: 5px;
    padding: 7px 25px 7px 25px;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(0, 0, 0, 0.9);
  }
}

.description-index {
  display: none;
}

.description-title {
  display: flex;
  align-items: center;

  .chevron-right {
    width: 10%;
    text-align: end;
    padding-top: 3px;
    margin-right: 0;

    img {
      width: 30%;
    }
  }
}

.paragraph-container {
  z-index: 6;
  width: 90%;

  .paragraph-description {
    height: 100%;
    padding: 30px;
    text-align: start;
  }
}

.characteristic:hover .paragraph-container {
  display: block;
  margin-right: 50px;
}

.characteristic::before,
.characteristic::after {
  content: "";
  position: absolute;
  border-radius: 5px;
  width: 97%;
  transition: all 0.8s;
}

.characteristic::before {
  left: 0%;
  z-index: 1;
  height: 130%;
  background: linear-gradient(to right, #ff6b3a, #242424);
}

.characteristic::after {
  left: -3%;
  z-index: 2;
  height: 120%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.164);
}

.characteristic:hover::before {
  transform: translateX(-2.5%);
}

.characteristic:hover::after {
  transform: translateX(5%);
}

.close-button {
  display: none;
}

.bottom-paragraph {
  width: 95%;
  padding: 20px 20px 10px 20px;
}
// END bottom list styles

/* Media queries */
@media (max-width: 1250px) {
  .characteristic {
    width: 90%;
    margin-left: 40px;
  }

  .description-title .chevron-right {
    width: 20%;

    img {
      width: 20%;
    }
  }
}

@media only screen and (min-width: 730px) and (max-width: 1000px) {
  .description-title .chevron-right {
    width: 20%;

    img {
      width: 40%;
    }
  }
}

@media (max-width: 980px) {
  .insubria-description {
    display: block;
    padding-top: 0;

    h2 {
      text-align: center;
    }

    .description {
      width: 100%;
    }
  }

  .img-container-2 {
    width: 100%;

    img {
      width: 90%;
      margin: 0 auto;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}

@media (max-width: 729px) {
  .history-old,
  .why-insubria,
  .logo-container {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
  }

  .images-container,
  .bird-description,
  .list-container,
  .bottom-paragraph {
    z-index: 1;
  }

  .logo-container .logo-img img {
    width: 80%;
  }

  .logo-container .real-image img {
    width: 66%;
  }

  .list-container {
    display: block;
    width: 100%;

    .left-section {
      width: 100%;
    }
  }

  .characteristics-list {
    width: 40%;
    margin-left: 24%;
  }

  .characteristic {
    width: 100%;
    margin-left: 0;
    text-align: center;

    .description-index {
      width: 125%;
      margin-left: 30px;
      padding-left: 15px;

      .chevron-right {
        margin-right: 0;

        img {
          width: 6%;
        }
      }
    }
  }

  .characteristic::before,
  .characteristic::after {
    width: 120%;
  }

  .characteristic-2 {
    margin-bottom: -5px;
  }

  .characteristic-3::before,
  .characteristic-3::after {
    display: none;
  }

  .characteristic::before {
    left: 4%;
  }

  .characteristic:hover::after {
    transform: translateX(10%);
  }

  .description-title {
    display: none;
  }

  .paragrapgh-container {
    width: 90%;
  }

  .paragraph-card {
    top: 10px;
    width: 170%;
    z-index: 10;
    height: 500px;
    position: absolute;
    transform: translate(-22%, -100%);
    background-color: rgba(0, 0, 0, 0.95);

    h2 {
      padding-left: 30px;
      padding-right: 30px;
    }

    .scrollbar-container {
      height: 450px;
    }

    .close-button {
      display: block;
      padding-top: 15px;
      padding-bottom: 20px;
    }

    button {
      border: none;
      font-size: 20px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.753);
      background-color: transparent;

      &:hover {
        transform: scale(1.2);
      }
    }

    p {
      margin-top: -15px;
    }
  }
}

@media only screen and (min-width: 730px) and (max-width: 800px) {
  .history-old,
  .why-insubria,
  .logo-container {
    width: 90%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .bird-description {
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (min-width: 730px) {
  .characteristic-3 {
    margin-bottom: -5px;
  }

  .characteristic-2::before,
  .characteristic-2::after {
    display: none;
  }

  .paragraph-card h2 {
    display: none;
  }

  .bottom-paragraph {
    padding-top: 40px;
  }
}

@media only screen and (min-width: 501px) and (max-width: 729px) {
  .characteristics-list {
    width: 45%;
    margin-left: 14%;
  }

  .characteristic::before,
  .characteristic::after {
    width: 110%;
  }

  .characteristic {
    width: 130%;

    .description-index {
      display: block;
      text-align: center;
      align-items: center;
      margin-left: 35px;

      .chevron-right img {
        width: 7%;
      }
    }
  }
}

@media (max-width: 500px) {
  .upper-bg {
    text-align: center;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 26px;
  }

  .container p,
  .container span {
    font-size: 19px;
  }

  .characteristics-list {
    width: 52%;
    margin-left: 11%;
  }

  .characteristic {
    width: 125%;

    .description-index {
      width: 100%;
      display: block;
      margin-left: 15px;
      text-align: center;
      padding-right: 15px;
      align-items: center;

      .chevron-right {
        margin-right: 0;

        img {
          width: 8%;
        }
      }
    }
  }
}
/* END media queries */
</style>
