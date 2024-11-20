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
            <h2>Mission</h2>
            <p>
              <span>Insubria Wildlife APS è la voce giovane e dinamica della
              divulgazione scientifica</span> sulla fauna selvatica e gli ambienti
              insubrici; attraverso i nostri social portiamo la biodiversità
              insubrica sotto i riflettori, rendendola accessibile e
              interessante per tutti.
              <br />
              <br />
              <span>Il nostro obiettivo è ispirare curiosità e consapevolezza</span>,
              mostrando come la tutela delle risorse naturali possa arricchire
              la vita di ciascuno e come il nostro territorio ne sia
              ricchissimo. <span>Con eventi in programma e collaborazioni con esperti
              del settore</span>, ci impegniamo a diventare un punto di riferimento per
              chi desidera scoprire, proteggere e vivere appieno il patrimonio
              naturale che ci circonda.
              <br />
              <br />
              <span>Vogliamo creare un luogo di incontro</span> per appassionati, addetti ai
              lavori e curiosi, stimolando dibattiti e scambi tra persone con
              diverso background, <span>offrendo opportunità di crescita e formazione</span>
              in un ambiente giovane, innovativo, internazionale.
              <br />
              <br />
              <br>
              <p
                id="join">Unisciti a noi in questa avventura di scoperta e azione!</p
              >
            </p>

            <!-- Help animal section -->
            <div class="animal-help">
              <div class="animal-help-container">
                <p>Hai trovato un esemplare di animale ma non sai cosa fare?</p>
                <a href="">
                  <button class="help-btn">Ti aiutiamo noi!</button>
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
              <h2>Vuoi restare sempre aggiornato sui nostri eventi in programma?</h2>
              <a href="">
                <button>Clicca qui e scopri anche quelli passati</button>
              </a>
            </div>
          </div>
          <div class="overlay margin-right-60">
            <h2>Vision</h2>
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
                    <p>{{ vision.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Carousel buttons -->
              <div class="carousel-buttons">
                <button @click="prevCard" id="prev-btn"><</button>
                <!-- <button @click="">Stop/Play</button> -->
                <button @click="nextCard" id="next-btn">></button>
              </div>
              <!-- END carousel buttons -->
            </div>
            <!-- END Carousel -->
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
  background-image: url(../assets/img/bird-jumbo.jpg);
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
  padding-top: 20px;
  padding-bottom: 25px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  span {
    font-weight: bold;
  }

  #join {
    text-align: center;
    font-weight: bold;
  }

  .animal-help {
    width: 30%;
    margin-top: 40px;
    font-weight: bold;
    text-align: center;

    p {
      font-size: 15px;
      padding-bottom: 10px;
    }

    button {
      border: none;
      font-weight: bold;
      padding: 5px 15px 5px 15px;
      border-radius: 20px;
      background-color: #ff6b3ad8;

      &:hover {
        background-color: #ff6b3a;
        box-shadow: 0 -1px 10px #ff6b3ad8;
        transform: scale(1.03);
      }
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.01);
  }
}

.mission,
.vision {
  padding-top: 50px;
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
  background-image: url(../assets/img/swan.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.vision {
  padding-bottom: 30px;

  .events {
      width: 60%;
      padding-top: 100px;
      text-align: center;

      p {
        font-size: 30px;
        line-height: 33px;
        font-weight: bold;
        padding-bottom: 30px;
      }

      button {
      margin-top: 10px;
      font-size: 15px;
      font-weight: bold;
      padding: 10px 25px 10px 25px;
      border: none;
      border-radius: 20px;
      background-color: #ff6b3ad8;

      &:hover {
        background-color: #ff6b3a;
        box-shadow: 0 -1px 10px #ff6b3ab2;
        transform: scale(1.02);
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
    /* font-weight: bold; */
    padding-bottom: 10px;
    text-align: center;
  }

  .carousel-buttons {
    text-align: center;

    #prev-btn {
      margin-right: 5px;
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

  .jumbo p {
    width: 70%;
    padding-left: 0;
    text-align: center;
  }

  .overlay {
    width: 80%;

    .animal-help {
      width: 50%;
    }
  }

  .mission {
    width: 100%;
    display: block;
    position: static;
    margin-left: 0;
    background-color: #0d0907;
    background-image: url(../assets/img/red-deer.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    p,
    h2 {
      width: 80%;
    }
  }

  .vision {
    width: 100%;
    position: static;
    margin-top: 10px;
    margin-right: 0;
    background-color: #0d0907;
    background-image: url(../assets/img/fox.jpg);
    background-size: cover;
    background-position: center;

    p,
    h2 {
      width: 80%;
    }

    .events {
      color: black;
    }

    button {
      margin-bottom: 100px;
    }
  }

  .mission,
  .vision {
    display: block;
    padding-top: 50px;
    padding-bottom: 70px;
  }

  .video-container {
    padding-top: 13px;
  }
}
</style>
