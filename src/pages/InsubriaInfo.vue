<script>
import { store } from "../store.js";
export default {
  name: "Insubria",

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

<template>
  <div class="container">
    <div class="row">
      <!-- History description -->
      <div class="col upper-bg">
        <div class="history-old overlay">
          <h1>INSUBRIA</h1>
          <div class="insubria-description d-flex">
            <div class="description">
              <h2>Un pò di Storia</h2>
              <p>
                Gli antichi romani chiamavano Insubri il popolo che abitava
                alcune aree settentrionali dell'odierna Italia.
                <br />
                <br />Sono stati trovati reperti archeologici risalenti a 9000
                anni fa che ci raccontano di uomini vissuti nei territori
                compresi tra il Serio e il Sesia, a nord delle vallate del Toce,
                dei cantoni svizzeri Ticino e Grigioni, e a sud del Po.
                Successivamente si sono poi distinte tre diverse culture:
              </p>
              <ul id="insubria-list">
                <li>
                  <h4>dell'Isolino<span>, attorno al 5060 a.C.</span></h4>
                  <p>
                    chiamata così perché gli abitanti costruirono un villaggio
                    di palafitte sull'Isolino Virginia del lago di Varese, lago
                    ritenuto essere il più antico dell'arco alpino
                  </p>
                </li>
                <li>
                  <h4>
                    di Canegrate<span>, a partire dal XIII secolo a.C</span>
                  </h4>
                </li>
                <li>
                  <h4>
                    di Golasecca<span>, a partire dal IX secolo a.C.</span>
                  </h4>
                </li>
              </ul>
            </div>
            <div class="img-container d-flex">
              <div class="img-container-2">
                <img src="/insubria/maps/insubria-immagini.png" alt="" />
              </div>
            </div>
          </div>
          <div class="history-nowaday">
            <div class="insubria-description">
              <h2>L'Insubria oggi</h2>
              <p>
                La regione insubrica, pur non essendo ben definita, ricalca le
                orme della presenza degli antichi Insubri, e le popolazioni
                odierne ne condividono alcuni aspetti culturali e dialettali.
                <br />
                <br />
                Rimane caratterizzata da una ricchissima biodiversità, tra le
                più alte della regione Lombardia, ma anche una altissima
                urbanizzazione, grazie proprio alle numerose risorse che vi sono
                presenti.
                <br />
                <br />
                Grazie alla complessa storia geologica e alla varietà
                geomorfologica del territorio, possiamo distinguere,
                specialmente nelle Prealpi Varesine e Comasche, differenti
                habitat forestali e molti altri legati alle aree umide. Anche la
                regione biogeografica continentale racchiude diversi habitat
                peculiari ricchi di specie vegetali e animali.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- END history description -->

      <!-- Why Insubria description -->
      <div class="col middle-bg">
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
      </div>
      <!-- END why Insubria description -->

      <!-- Logo explanation -->
      <div class="col lower-bg">
        <div class="logo-container overlay">
          <h2>Il nostro Logo</h2>
          <div class="images-container d-flex">
            <div class="logo-img">
              <img src="/logo/double-circle.png" alt="" />
            </div>
            <div class="real-image d-flex">
              <img src="/insubria/fiorrancino.png" alt="" />
            </div>
          </div>
          <p class="bird-description">
            Il nostro logo è un <strong>Fiorrancino</strong> -
            <span>Regulus ignicapilla</span> - e qui vi spieghiamo perchè
            l'abbiamo scelto:
          </p>
          <div class="list-container d-flex">
            <!-- List section -->
            <div class="left-section">
              <ul class="characteristics-list">
                <li
                  v-for="(characteristic, index) in store.characteristics"
                  :key="index"
                  @mouseenter="showParagraph(index)"
                  @mouseleave="hideParagraph"
                  @click="isMobile && toggleParagraph(index)"
                  class="characteristic"
                >
                  <h4 class="description-index">{{ index + 1 }}</h4>
                  <h4 class="description-title">
                    {{ characteristic.intro }}
                    <div class="chevron-right">
                      <img
                        src="/insubria/list-elements/chevron-right.svg"
                        alt=""
                      />
                    </div>
                  </h4>
                </li>
              </ul>
            </div>
            <!-- END list section -->

            <!-- Description section -->
            <div class="right-section">
              <div
                v-for="(characteristic, index) in store.characteristics"
                :key="index"
                class="paragraph-container"
              >
                <div
                  v-show="this.currentIndex === index"
                  class="paragraph-card overlay"
                >
                  <div class="close-button">
                    <button @click="toggleParagraph(index)">X</button>
                  </div>
                  <p class="paragraph-description">
                    {{ characteristic.description }}
                  </p>
                </div>
              </div>
            </div>
            <!-- END description section -->
          </div>
          <div class="bottom-paragraph">
            <p>
              Come questo piccolo uccello che esplora instancabilmente il suo
              ambiente, noi ci impegniamo a scoprire e condividere i tesori
              nascosti del nostro territorio.
            </p>
          </div>
        </div>
      </div>
      <!-- END logo explanation -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  color: rgba(255, 255, 255, 0.753);

  p,
  span {
    font-size: 20px;
  }
}

.col {
  margin-bottom: 10px;
  padding: 60px 30px 60px 30px;
}

h1 {
  font-size: 50px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
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
  padding-top: 50px;

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
  background-image: url(/homepage/carousel/fox-2.jpg);
}

.middle-bg {
  background-size: cover;
  background-position: center;
  background-image: url(/insubria/background/orange-bird.jpg);
}

.lower-bg {
  background-size: cover;
  background-position: center;
  background-image: url(/insubria/background/deer.png);
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
  padding: 20px 20px 10px 20px;
}
// END bottom list styles

/* Media queries */
/* Mobile layout */
@media (max-width: 729px) {
  .history-old,
  .why-insubria,
  .logo-container {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }

  .logo-container .logo-img img {
    width: 80%;
  }

  .logo-container .real-image img {
    width: 70%;
  }

  .list-container {
    display: block;
    width: 100%;

    .left-section {
      width: 100%;
    }
  }

  .characteristics-list {
    width: 20%;
  }

  .characteristic {
    width: 100%;
    margin-left: 0;

    .description-index {
      display: block;
      text-align: center;
    }
  }

  .characteristic::before,
  .characteristic::after {
    width: 120%;
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
    width: 160%;
    z-index: 10;
    height: 730px;
    position: absolute;
    transform: translate(-22%, -100%);
    background-color: rgba(0, 0, 0, 0.95);

    .close-button {
      display: block;
      padding-top: 15px;
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
/* END mobile layout */

/* Tablet layout */
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
/* END tablet layout */
/* Various media queries */
@media (max-width: 980px) {
  .insubria-description {
    display: block;
    padding-top: 0;

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
/* END various media queries */
</style>
