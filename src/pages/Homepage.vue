<script>
import { store } from "../store.js";
export default {
  name: "Homepage",

  data() {
    return {
      store,
      currentIndex: 0,
    };
  },

  methods: {
    nextCard() {
      this.currentIndex = (this.currentIndex + 1) % this.store.visions.length;
    },

    prevCard() {
      this.currentIndex =
        (this.currentIndex - 1 + this.store.visions.length) %
        this.store.visions.length;
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
              Insubria Wildlife APS è la voce giovane e dinamica della
              divulgazione scientifica sulla fauna selvatica e gli ambienti
              insubrici. Attraverso i nostri social portiamo la biodiversità
              insubrica sotto i riflettori, rendendola accessibile e
              interessante per tutti. Il nostro obiettivo è ispirare curiosità e
              consapevolezza, mostrando come la tutela delle risorse naturali
              possa arricchire la vita di ciascuno e come il nostro territorio
              ne sia ricchissimo. Con eventi in programma e collaborazioni con
              esperti del settore, ci impegniamo a diventare un punto di
              riferimento per chi desidera scoprire, proteggere e vivere appieno
              il patrimonio naturale che ci circonda. Vogliamo creare un luogo
              di incontro per appassionati, addetti ai lavori e curiosi,
              stimolando dibattiti e scambi tra persone con diverso background,
              offrendo opportunità di crescita e formazione in un ambiente
              giovane, innovativo, internazionale. Unisciti a noi in questa
              avventura di scoperta e azione!
            </p>
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
        <div class="vision">
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
                      <img src="../assets/img/fox-2.jpg" alt="" />
                    </div>
                    <p>{{ vision.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Carousel buttons -->
              <div class="carousel-buttons">
                <button @click="prevCard">Previous</button>
                <button @click="nextCard">Next</button>
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
  padding-top: 30px;
  padding-bottom: 30px;
  background-image: url(../assets/img/swan.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.vision {
  padding-bottom: 30px;

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
    text-align: center;
  }

  .carousel-buttons {
    padding-top: 5px;
    text-align: center;
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
  }

  .mission {
    width: 100%;
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
