<script>
import { store } from "../store.js";
export default {
  name: "Homepage",

  data() {
    return {
      store,
      currentIndex: 0,
      intervalTimer: false,
    };
  },

  // created() {
  //   this.carouselAutoplay();
  // },

  methods: {
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.store.visions.length;
    },

    prevCard() {
      this.currentIndex =
        (this.currentIndex - 1 + this.store.visions.length) %
        this.store.visions.length;
    },

    carouselAutoplay() {
      // const card = document.getElementById("card-box");
      // card.classList.add("transition");
      setInterval(this.nextCard, 5000);
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
            Il mondo selvatico è più vicino di quanto pensi: unisciti a noi
            nella sua scoperta!
          </p>
        </section>
        <!-- END jumbo section -->

        <!-- Mission section -->
        <section class="mission">
          <article class="overlay margin-l-60">
            <h2 class="uppercase">mission</h2>
            <p>
              <span>Insubria Wildlife APS</span> è la voce giovane, dinamica e
              internazionale della divulgazione scientifica sulla
              <span>fauna selvatica</span> e gli
              <span>ambienti insubrici</span>. Vogliamo portare il valore della
              biodiversità sotto i riflettori, rendendolo accessibile e
              interessante per tutti, ispirando curiosità e consapevolezza.
              <span>La tutela</span> delle risorse naturali può arricchire la
              vita di ciascuno e il nostro territorio ne è ricchissimo: sta a
              noi proteggerlo. <br /><br />
              Tramite i social, gli eventi e collaborazioni con esperti,
              vogliamo creare un luogo di incontro per appassionati, “addetti ai
              lavori” e curiosi, stimolando dibattiti e scambi tra persone con
              diverso background.
            </p>
            <br />
            <br />

            <p id="join">
              <a id="join-2"
                ><router-link :to="{ name: 'Supportaci' }" class="link"
                  ><span>Unendoti a noi</span></router-link
                >
              </a>
              potrai conoscere realtà diverse e far parte di una comunità con
              cui condividere gli stessi obiettivi.
            </p>

            <!-- Events link section -->
            <!-- <aside class="events-container">
              <div class="events">
                <p class="events-update">
                  Vuoi restare sempre aggiornato sui nostri eventi?
                </p>
                <a href="">
                  <router-link :to="{ name: 'Eventi' }" class="link">
                    <button class="help-btn">Clicca qui!</button></router-link
                  >
                </a>
              </div>
            </aside> -->
            <!-- END events link section -->
          </article>
        </section>
        <!-- END mission section -->

        <!-- Video section -->
        <section class="video-container">
          <div class="video-background">
            <video
              src="../assets/video/background-video.mp4"
              loading="lazy"
              autoplay
              muted
              loop
            ></video>
          </div>
        </section>
        <!-- END video section -->

        <!-- Vision section -->
        <section class="vision d-flex">
          <!-- Animal help section -->
          <aside class="animal-help-container">
            <div class="animal-help">
              <h2>Hai trovato un esemplare di animale ma non sai cosa fare?</h2>
              <a href="">
                <router-link :to="{ name: 'SosAnimali' }" class="link">
                  <button>Ti aiutiamo noi!</button></router-link
                >
              </a>
            </div>
          </aside>
          <!-- END animal help section -->

          <!-- Vision description -->
          <article class="vision-card d-flex">
            <div class="overlay margin-r-60">
              <h2 class="uppercase">vision</h2>
              <p>
                Immaginiamo un'Insubria dove la fauna selvatica e gli ambienti
                coesistono in sinergia con la comunità locale, dove ognuno può
                avere un ruolo attivo. La nostra visione si estende oltre
                l'orizzonte, mirando a:
              </p>

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
                          <div class="carousel-button-left d-flex">
                            <button @click="prevCard" id="prev-btn"><</button>
                          </div>
                          <figure>
                            <img :src="vision.image" />
                          </figure>
                          <div class="carousel-button-right d-flex">
                            <button @click="nextCard" id="next-btn">></button>
                          </div>
                        </div>
                        <!-- END carousel buttons -->
                      </div>
                      <!-- END carousel -->

                      <!-- Bottom paragraph -->
                      <div class="bottom-paragraph-container">
                        <p>{{ vision.description }}</p>
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
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

h1 {
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
  background-image: url(../assets/img/homepage/background/bird-jumbo-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 20%;
  padding-bottom: 200px;

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

  span {
    font-weight: bold;
  }

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
  background-image: url(../assets/img/homepage/background/deer-night-desktop.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100% 30%;
}

.vision {
  padding-bottom: 30px;
  background-image: url(../assets/img/homepage/background/eagle-desktop.jpg);
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

    img {
      width: 24vh;
      height: 24vh;
      border-radius: 100px;
      object-fit: cover;
    }
  }

  figure {
    margin-left: 5%;
    margin-right: 5%;
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
  }
}

/* Media queries */
/* Mobile layout */
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
    background-image: url(../assets/img/homepage/background/bird-jumbo-reverse-mobile.jpg);
    background-position: 20% 0px;

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
    background-image: url(../assets/img/homepage/background/bird-coloured-mobile.jpg);
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

    img {
      width: 10em;
      height: 10em;
    }
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

    img {
      width: 12em;
      height: 12em;
    }
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
