<script>
import { store } from "../store.js";
export default {
  name: "Team",

  data() {
    return {
      store,
      currentIndex: 0,
      showDetails: false,
      intervalTimer: false,
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
  },
};
</script>

<template>
  <div :class="{ 'no-interaction': showDetails }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="team-container">
            <div class="overlay description-section">
              <h1>IL NOSTRO TEAM</h1>
              <h2>Ecco le fondatrici di Insubria Wildlife!</h2>
              <p class="team-description">
                <br />
                <br />
                Siamo Elena, Giulia, Maura, Alessia e Ilaria (da sinistra a
                destra) e ci siamo conosciute anni fa in un centro di cura e
                riabilitazione per animali selvatici, dove abbiamo lavorato,
                fatto tirocini e volontariato per molti anni.
                <br />
                <br />La vita ci ha portate su strade diverse - cambiando
                lavori, città o nazioni - ma siamo rimaste sempre unite. Ogni
                volta che possiamo, ci ritroviamo per fare attività in natura:
                birdwatching, passeggiate nei boschi, ascoltare i bramiti dei
                cervi, viaggiare e scoprire nuovi luoghi.
                <br />
                <br />Il sogno di vedere valorizzato il nostro territorio dal
                punto di vista naturalistico, e quello di vedere la comunità più
                coinvolta ci ha portate a fare questo grande passo: aprire la
                nostra associazione.
                <br />
                <br />
                Speriamo di portarti con noi in quest'avventura e di poter
                avverare tanti piccoli sogni assieme!
              </p>
            </div>
          </div>
          <div class="grid-section">
            <div class="overlay">
              <div class="cards-container d-flex">
                <div
                  v-for="(member, index) in store.members"
                  :key="index"
                  class="col-33"
                >
                  <div class="member-img">
                    <img :src="member.image" alt="" />
                  </div>
                  <h2>{{ member.name }}</h2>
                  <h3>{{ member.title }}</h3>
                  <div class="info-btn">
                    <button @click="this.showMemberDetails(index)">
                      Scopri di più
                    </button>
                  </div>
                </div>
              </div>
              <div v-if="this.showDetails" class="overlay-single-card">
                <div class="details-btn d-flex">
                  <button @click="hideMemberDetails(index)">X</button>
                </div>
                <div class="details-img">
                  <img :src="store.members[currentIndex].image" alt="" />
                </div>
                <div class="details-description">
                  <p>{{ store.members[currentIndex].description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-interaction {
  pointer-events: none;
}

.no-interaction .overlay-single-card {
  pointer-events: auto;
}

.team-container,
.grid-section {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  text-align: center;
  background-color: red;
}

.team-container .overlay {
  width: 80%;
}

.description-section:hover {
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
  transform: scale(1.01);
}

.description-section h1 {
  font-size: 50px;
  padding-top: 30px;
  padding-bottom: 60px;
}

.description-section h2 {
  width: 90%;
  font-size: 24px;
}

.description-section p {
  width: 85%;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 20px;
}

.grid-section {
  background-color: aqua;
}

.grid-section .overlay {
  padding-top: 40px;
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
  overflow: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  background-color: rgba(0, 0, 0, 1);

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
    width: 30%;
    margin-bottom: 20px;
    border-radius: 145px;
    object-fit: cover;
  }
}

.details-description p {
  width: 70%;
  font-size: 18px;
  line-height: 25px;
  padding-bottom: 20px;
}

.col-33 {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  width: calc(100% / 3 - 50px);

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
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

.member-img {
  width: 100%;
  padding-bottom: 15px;

  img {
    width: 45%;
    border: 3px solid #ff6b3a;
    object-fit: cover;
    border-radius: 110px;
  }
}

/* Media queries */
/* Tablet layout */
@media only screen and (min-width: 560px) and (max-width: 800px) {
  .col-33 {
    width: calc(100% / 2.2 - 10px);

    .member-img img {
      width: 50%;
    }
  }

  .description-section h1 {
    font-size: 40px;
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

  .grid-section .overlay {
    padding-top: 30px;
  }

  .overlay-single-card {
    max-height: 670px;
    transform: translate(-50%, -41%);
    overflow: auto;

    .details-img img {
      width: 50%;
    }
  }
}
/* END Tablet layout */

/* Mobile layout */
@media (max-width: 559px) {
  .col-33 {
    width: 85%;
  }

  .description-section h1 {
    font-size: 35px;
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
  }

  .overlay-single-card {
    max-height: 700px;
    transform: translate(-50%, -42%);
    overflow: scroll;

    .details-img img {
      width: 60%;
    }
  }
}
</style>
