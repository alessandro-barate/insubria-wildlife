<script>
import { store } from "../store.js";
export default {
  name: "SosAnimali",

  data() {
    return {
      store,
      currentIndex: 0,
      showZoom: false,
      showDetails: false,
    };
  },

  methods: {
    showMemberDetails(index) {
      if (this.showDetails) return;
      this.currentIndex = index;
      this.showDetails = true;
    },

    hideMemberDetails(index) {
      this.showDetails = false;
    },

    toggleZoom(event) {
      if (event && event.target.tagName === "img" && this.showZoom) {
        return;
      }

      this.showZoom = !this.showZoom;
      document.body.style.overflow = this.showZoom ? "hidden" : "";
    },
  },

  // mounted() {
  //   console.log("Sanitizzazione disponibile: ", !!this.$sanitize);
  // },
};
</script>

<template>
  <div :class="{ 'no-interaction': showDetails || showZoom }">
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- SOS animal container -->
          <section class="sos-container">
            <div class="overlay description-section">
              <h1 class="uppercase">sos animali</h1>
              <div class="sos">
                <h2 class="uppercase">soccorso fauna</h2>
              </div>
              <p class="sos-description">
                Hai trovato un esemplare di animale selvatico e non sai cosa
                fare?<br />
              </p>
              <p><strong>Niente paura, ti aiutiamo noi!</strong></p>
              <div class="flow-chart-img">
                <figure>
                  <img
                    src="../assets/img/sos-animal/flow-chart.png"
                    alt="Flusso delle azioni da svolgere in caso di ritrovamento"
                    @click="toggleZoom"
                  />
                </figure>
              </div>
              <div class="bottom-paragraphs">
                <p>
                  <strong><span class="uppercase">ricorda:</span></strong>
                  nessuna cura umana può essere migliore di quelle dei genitori!
                </p>
                <p>
                  <strong
                    >Prima di intervenire, assicurati che sia davvero
                    necessario.</strong
                  >
                </p>
                <p>
                  <strong><span class="uppercase">dubbi?</span></strong> Chiama
                  il
                  <a
                    href="https://elencocras.it/"
                    target="_blank"
                    class="uppercase"
                    >cras</a
                  >
                  di riferimento.
                </p>
              </div>
            </div>
          </section>
          <!-- END SOS animal container -->

          <!-- Grid container -->
          <section class="grid-section">
            <div class="overlay">
              <div class="cards-container d-flex">
                <!-- Single sos animal card -->
                <div
                  v-for="(sosCard, index) in store.sosCards"
                  :key="index"
                  class="col-33"
                >
                  <div class="card-img">
                    <figure>
                      <img :src="sosCard.image" alt="" />
                    </figure>
                  </div>
                  <h2>{{ sosCard.title }}</h2>
                  <div class="info-btn">
                    <button @click="this.showMemberDetails(index)">
                      Scopri di più
                    </button>
                  </div>
                </div>
                <!-- END single sos animal card -->
              </div>

              <!-- Single sos animal overview -->
              <div v-if="this.showDetails" class="overlay-single-card">
                <div class="scrollbar-container">
                  <div class="details-btn d-flex">
                    <button @click="hideMemberDetails(index)">✕</button>
                  </div>
                  <div class="details-img">
                    <img :src="store.sosCards[currentIndex].image" alt="" />
                  </div>
                  <div class="details-description">
                    <div
                      v-html="
                        $sanitize(store.sosCards[currentIndex].description)
                      "
                    ></div>
                  </div>
                </div>
              </div>
              <!-- END single sos animal overview -->
            </div>
          </section>
          <!-- END grid container -->
        </div>
      </div>
    </div>
  </div>

  <!-- Map zoomed container -->
  <div v-if="showZoom" class="zoomed-container">
    <div class="zoom-close-btn" @click.stop="toggleZoom">✕</div>
    <img
      :src="'src/assets/img/sos-animal/flow-chart.png'"
      alt="Flusso delle azioni da svolgere in caso di ritrovamento"
      @click.stop
    />
  </div>
  <!-- END map zoomed container -->
</template>

<style scoped lang="scss">
.no-interaction {
  pointer-events: none;

  .overlay-single-card,
  .flow-chart-img {
    pointer-events: auto;
  }
}

.sos-container,
.grid-section {
  width: 100%;
  position: relative;
  text-align: center;
}

.sos-container {
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 10px;
  background-image: url(../assets/img/sos-animal/background/eagle-2.jpg);
  background-size: cover;
  background-position: center;
}

.sos-container .overlay {
  width: 80%;
}

.description-section:hover {
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
  transform: scale(1.01);
}

.description-section h1 {
  font-size: 50px;
  padding-top: 30px;
  padding-bottom: 60px;
}

.description-section h2 {
  font-size: 32px;
  padding-bottom: 20px;
}

.description-section p {
  width: 85%;
  font-size: 20px;
  line-height: 25px;
  padding-bottom: 20px;
}

.flow-chart-img {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;

  img {
    width: 85%;
    cursor: url("../assets/img/cursor/binoculars-icon.svg"), zoom-in;
    transition: all 0.3s ease;
  }
}

.bottom-paragraphs {
  margin-top: 40px;

  a {
    color: #ff6a3a;

    &:hover {
      color: #ff0000;
    }
  }
}

.zoomed-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  img {
    width: auto;
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
  }

  .zoom-close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;

    &:hover {
      transform: scale(1.2);
    }
  }
}

.grid-section {
  background-image: url(../assets/img/sos-animal/background/blue-bird.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-section .overlay {
  width: 100%;
  padding: 50px 40px 0px 40px;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.overlay {
  width: 90%;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.8);
}

.overlay-single-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -42%);
  width: 80%;
  max-width: 1000px;
  max-height: 600px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  background-color: rgba(0, 0, 0, 1);

  .scrollbar-container {
    width: 100%;
    height: 500px;
  }

  .details-btn {
    text-align: start;

    button {
      border: none;
      font-size: 20px;
      font-weight: bold;
      padding-bottom: 20px;
      color: rgba(255, 255, 255, 0.753);
      background-color: transparent;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.details-img {
  width: 100%;

  img {
    width: 30vh;
    height: 30vh;
    margin-bottom: 20px;
    border-radius: 145px;
    object-fit: cover;
  }
}

.details-description div {
  width: 85%;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 20px;
}

.col-33 {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  width: calc(100% / 3 - 50px);

  &:hover {
    background-color: rgba(0, 0, 0, 0.95);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }

  .info-btn {
    width: 100%;
    padding-top: 10px;

    button {
      border: none;
      font-size: 15px;
      font-weight: bold;
      border-radius: 20px;
      padding: 8px 25px 8px 25px;

      &:hover {
        color: white;
        transform: scale(1.05);
        background-color: rgb(94, 94, 94);
      }
    }
  }
}

.cards-container {
  flex-wrap: wrap;

  h2 {
    padding-bottom: 10px;
  }

  h3 {
    padding-bottom: 7px;
  }

  p {
    width: 80%;
  }
}

.card-img {
  width: 100%;
  padding-bottom: 15px;

  img {
    width: 20vh;
    height: 20vh;
    border: 3px solid #ff6b3a;
    object-fit: cover;
    border-radius: 110px;
  }
}

/* Media queries */
/* Mobile layout */
@media (max-width: 559px) {
  .col-33 {
    width: 85%;
  }

  .description-section h2 {
    width: 75%;
    font-size: 25px;
  }

  .description-section p {
    width: 83%;
    font-size: 18px;
    line-height: 23px;
  }

  .cards-container {
    display: block;
    padding-bottom: 20px;
  }

  .overlay-single-card {
    max-height: 700px;
    transform: translate(-50%, -42%);

    .details-img img {
      width: 30vh;
      height: 30vh;
    }
  }
}
/* END mobile layout */

/* Tablet layout */
@media only screen and (min-width: 560px) and (max-width: 800px) {
  .col-33 {
    width: calc(100% / 2.2 - 10px);
  }

  .description-section h2 {
    width: 90%;
    font-size: 25px;
  }

  .description-section p {
    width: 85%;
    font-size: 18px;
    line-height: 23px;
    padding-bottom: 20px;
  }

  .grid-section {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .grid-section .overlay {
    padding-top: 30px;
  }

  .overlay-single-card {
    max-height: 670px;
    transform: translate(-50%, -41%);
    overflow: auto;
  }
}
/* END Tablet layout */

@media (max-width: 800px) {
  .grid-section {
    background-image: url(../assets/img/sos-animal/background/fox-3.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .overlay-single-card {
    top: 46%;
  }
}
/* END media queries */
</style>
