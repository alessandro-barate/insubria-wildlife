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
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- Jumbo section -->
        <div class="jumbo">
          <h1 class="padding-l-60">Insubria <span>Wild</span>Life</h1>
          <p class="padding-l-60">
            Il mondo selvatico è più vicino di quanto pensi: unisciti a noi
            nella sua scoperta!
          </p>
        </div>
        <!-- END jumbo section -->

        <!-- Mission section -->
        <div class="mission">
          <div class="overlay margin-l-60">
            <h2>MISSION</h2>
            <p>
              <span>Insubria Wildlife APS</span> è la voce giovane, dinamica e
              internazionale della divulgazione scientifica sulla
              <span>fauna selvatica</span> e gli
              <span>ambienti insubrici</span>.Vogliamo portare il valore della
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
              <a href="" id="join-2"><span>Unendoti a noi</span></a> potrai
              conoscere realtà diverse e far parte di una comunità con cui
              condividere gli stessi obiettivi.
            </p>

            <!-- Help animal section -->
            <div class="animal-help">
              <div class="animal-help-container">
                <p>Vuoi restare sempre aggiornato sui nostri eventi?</p>
                <a href="">
                  <button class="help-btn">Clicca qui!</button>
                </a>
              </div>
            </div>
            <!-- END help animal section -->
          </div>
        </div>
        <!-- END mission section -->

        <!-- Video section -->
        <div class="video-container">
          <div class="video-background">
            <video
              src="../assets/video/background-video-2.mp4"
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
        <!-- END video section -->

        <!-- Vision section -->
        <div class="vision d-flex">
          <div class="events-container">
            <div class="events">
              <h2>Hai trovato un esemplare di animale ma non sai cosa fare?</h2>
              <a href="">
                <button>Ti aiutiamo noi!</button>
              </a>
            </div>
          </div>
          <div class="vision-card d-flex">
            <div class="overlay margin-r-60">
              <h2>VISION</h2>
              <p>
                Immaginiamo un'Insubria dove la fauna selvatica e gli ambienti
                coesistono in sinergia con la comunità locale, dove ognuno può
                avere un ruolo attivo. La nostra visione si estende oltre
                l'orizzonte, mirando a:
              </p>

              <!-- Carousel -->
              <div class="carousel-wrapper">
                <div
                  v-for="(vision, index) in store.visions"
                  :key="index"
                  v-show="index === currentIndex"
                  class="card"
                >
                  <div class="card-box">
                    <div class="card-body">
                      <div class="carousel-img-container">
                        <img :src="vision.image" />
                      </div>
                      <!-- Carousel buttons -->
                      <div class="buttons-container d-flex">
                        <div class="carousel-button-left d-flex">
                          <button @click="prevCard" id="prev-btn"><</button>
                        </div>
                        <p>{{ vision.description }}</p>
                        <div class="carousel-button-right d-flex">
                          <button @click="nextCard" id="next-btn">></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- END carousel buttons -->
              </div>
              <!-- END Carousel -->
            </div>
          </div>
        </div>
        <!-- END vision section -->
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-top: 100px;
  font-size: 95px;

  span {
    color: #ff6a3a;
  }
}

.jumbo {
  background-image: url(/homepage/background/bird-jumbo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
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
  width: 65%;

  span {
    font-weight: bold;
  }

  #join {
    text-align: center;
  }

  #join-2 {
    color: #ff6a3a;

    span {
      font-weight: bold;
    }

    &:hover {
      color: #ff2701;
    }
  }

  .animal-help {
    width: 55%;
    margin-top: 70px;
    font-weight: bold;
    text-align: center;

    p {
      font-size: 25px;
      line-height: 35px;
      padding-bottom: 20px;
    }

    button {
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
    width: 80%;
    text-align: center;
    font-size: 35px;
    padding-bottom: 15px;
  }

  p {
    width: 90%;
    font-size: 20px;
    line-height: 23px;
  }
}

.mission {
  margin-top: 10px;
  margin-right: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url(/homepage/background/deer-night.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.vision {
  padding-bottom: 30px;
  background-image: url(/homepage/background/eagle.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  .overlay {
    width: 150%;
  }

  .events {
    width: 100%;
    color: rgb(0, 0, 0);
    text-align: center;

    p {
      font-size: 30px;
      line-height: 33px;
      font-weight: bold;
      padding-bottom: 30px;
    }

    button {
      margin-top: 10px;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 25px 10px 25px;
      border: none;
      border-radius: 20px;
      background-color: #ff6b3ad8;

      &:hover {
        background-color: #ff6b3a;
        box-shadow: 0 -1px 10px #ff6b3ab2;
        transform: scale(1.05);
      }
    }
  }

  .carousel-img-container {
    text-align: center;
    padding-top: 60px;
    padding-bottom: 20px;

    img {
      width: 20vh;
      height: 20vh;
      border-radius: 100px;
      object-fit: cover;
    }
  }

  .card-body p {
    width: 50%;
    padding-bottom: 10px;
    text-align: center;
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
    color: white;
    transition-property: background-color, box-shadow;
    transition-duration: 0.5s;
    background-color: rgb(0, 0, 0);
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;

    &:hover {
      background-color: rgba(100, 56, 56, 0.425);
      box-shadow: 2px 2px 2px rgba(100, 56, 56, 0.2);
      transform: scale(1.2);
    }
  }
}

/* Media queries */
@media (max-width: 768px) {
  h1 {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }

  h2 {
    font-size: 30px;
    text-align: center;
    padding-bottom: 15px;
  }

  .jumbo {
    background-image: url(/homepage/background/bird-jumbo-reverse.jpg);

    p {
      width: 70%;
      padding-left: 0;
      text-align: center;
    }
  }

  .overlay {
    width: 80%;
    margin-left: 0;
    margin-right: 0;

    .animal-help {
      width: 50%;
    }
  }

  .mission {
    width: 100%;
    display: flex;
    position: static;
    justify-content: center;
    background-color: #0d0907;
    background-image: url(/homepage/background/bird-coloured.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    p,
    h2 {
      width: 80%;
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
    background-image: url(/homepage/background/fox.png);
    background-size: cover;
    background-position: center;

    .vision-card {
      justify-content: center;
    }

    .overlay {
      width: 80%;
    }

    p,
    h2 {
      width: 80%;
    }

    .events {
      width: 65%;
      color: black;
    }

    button {
      margin-bottom: 100px;
    }
  }

  .video-container {
    padding-top: 13px;
    padding-bottom: 0;
  }

  .carousel-button-left {
    display: block;
    line-height: 150px;
  }

  .carousel-button-right {
    display: block;
    line-height: 150px;
  }
}
</style>
