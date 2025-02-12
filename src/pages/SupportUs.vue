<script>
import { store } from "../store.js";
export default {
  name: "Supportaci",

  data() {
    return {
      windowWidth: window.innerWidth,
      ibanMobile: null,
      ibanDesktop: null,
    };
  },

  mounted() {
    // Inizializing the viewport state
    this.checkViewport();

    // Resize's event listener
    window.addEventListener("resize", this.handleResize);

    // Paypal button logic
    PayPal.Donation.Button({
      env: "production", // env: import.meta.env.VITE_ENV_SANDBOX,
      hosted_button_id: import.meta.env.VITE_HOSTED_BUTTON_ID,
      image: {
        src: "./src/assets/img/support/paypal/paypal-button.png",
        alt: "Donate with PayPal button",
        title: "PayPal - The safer, easier way to pay online!",
      },
      onComplete: function (params) {
        // Your onComplete handler
      },
    }).render("#donate-button");
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.checkViewport();
    },

    checkViewport() {
      if (this.windowWidth >= 1000) {
        store.desktopViewport = true;
        store.mobileViewport = false;
      } else {
        store.desktopViewport = false;
        store.mobileViewport = true;
      }

      if (this.windowWidth <= 768) {
        this.ibanDesktop = false;
        this.ibanMobile = true;
      } else {
        this.ibanDesktop = true;
        this.ibanMobile = false;
      }
    },

    showQrCode() {
      if (store.showDetails) return;
      store.showDetails = true;
    },

    hideQrCode() {
      store.showDetails = false;
    },
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
      <div class="col overlay">
        <section>
          <h1 class="uppercase">{{ t("nav.supportUs") }}</h1>

          <!-- Top paragraphs -->
          <div class="top-paragraphs">
            <h2>{{ t("supportUs.firstTitle") }}</h2>
            <p>{{ t("supportUs.list.listTitle") }}</p>
          </div>
          <!-- END top paragraphs -->

          <!-- Payment methods section -->
          <div class="payments-list">
            <ul>
              <li id="iban-method">
                <TranslatedTextSpan
                  text-key="supportUs.list.firstListElement"
                />
                <br />
                <div v-show="ibanDesktop" id="iban">
                  IT02S0623022808000047552608
                </div>
                <div class="id-button-container">
                  <button v-show="ibanMobile" id="iban-button">
                    {{ t("supportUs.list.secondListElement") }}
                  </button>
                </div>
              </li>
              <li id="paypal-method">
                <TranslatedTextSpan
                  text-key="supportUs.list.thirdListElement.name"
                />
                <div id="donate-button-container">
                  <span>{{ t("supportUs.list.thirdListElement.link") }}</span>
                  <div id="donate-button"></div>
                </div>
                <br />
              </li>
              <li id="satispay-method">
                <TranslatedTextSpan
                  text-key="supportUs.list.fourthListElement.name"
                />
                <br />
                <span>{{ t("supportUs.list.thirdListElement.link") }}</span>
                <span>
                  <a
                    v-if="store.mobileViewport"
                    href="https://www.satispay.com/app/pay/shops/8afb0c79-75f6-46b8-afd4-e8f91834c268"
                    target="_blank"
                  >
                    Satispay</a
                  >
                  <button
                    id="satispay-button"
                    v-show="store.desktopViewport"
                    @click="showQrCode()"
                  >
                    Satispay
                  </button>
                </span>
              </li>
            </ul>
            <p>
              {{ t("supportUs.paragraph") }}
            </p>
          </div>
          <!-- END payment methods section -->

          <!-- Bottom paragraphs -->
          <div class="bottom-paragraphs">
            <h2>{{ t("supportUs.secondTitle") }}</h2>
            <p>
              <TranslatedTextSpan text-key="supportUs.secondParagraph" />
              <!-- </p> -->
              <!-- <p class="link-paragraph">
              Compila il
              <a
                ><router-link :to="{ name: 'Contattaci' }" class="link"
                  >modulo di contatto</router-link
                ></a
              > -->
              <TranslatedTextSpan text-key="supportUs.thirdParagraph" />
            </p>
          </div>
          <!-- END bottom paragraphs -->
        </section>
      </div>
    </div>
  </div>

  <!-- IBAN zoomed -->
  <div v-show="store.showDetails" class="zoomed-container">
    <div v-if="store.showDetails" class="overlay-single-card">
      <div class="details-btn">
        <button @click="hideQrCode()">✕</button>
      </div>
      <div class="details-img">
        <p class="top-paragraph">Satispay</p>
      </div>
    </div>
  </div>
  <!-- IBAN zoomed -->

  <!-- Satispay QR code zoomed -->
  <div v-show="store.showDetails" class="zoomed-container">
    <div v-if="store.showDetails" class="overlay-single-card">
      <div class="details-btn">
        <button @click="hideQrCode()">✕</button>
      </div>
      <div class="details-img">
        <p class="top-paragraph">Satispay</p>
        <img
          src="../assets/img/support/satispay/satispay-qr-code.webp"
          alt="Satispay QR code"
          loading="lazy"
        />
        <p class="bottom-paragraph">Inquadra il QR Code dall'app per donare!</p>
      </div>
    </div>
  </div>
  <!-- END Satispay QR code zoomed -->
</template>

<style scoped lang="scss">
.container {
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(../assets/img/support/background/squirrel.webp);
}

.row {
  padding-top: 50px;
  padding-bottom: 50px;
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

p {
  padding-top: 30px;
}

.payments-list {
  padding-top: 15px;

  ul {
    width: 50%;
    padding-top: 12px;
    text-align: start;

    li {
      font-size: 18px;
      padding-top: 6px;
      padding-bottom: 15px;
      list-style-type: disc;
    }
  }
}

#paypal-method {
  margin-bottom: -15px;
  padding-bottom: 0;
}

#satispay-button,
#iban-button {
  border: none;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  border-radius: 20px;
  padding: 5px 30px 5px 30px;
  background-color: #ff6b3a;

  &:hover {
    transform: scale(1.05);
  }
}

.id-button-container {
  text-align: center;

  #iban-button {
    margin-top: 10px;
  }
}

a {
  color: #ff6a3a;

  &:hover {
    color: #ff0000;
  }
}

.bottom-paragraphs {
  padding-top: 50px;
  padding-bottom: 10px;

  .link-paragraph {
    margin-top: -28px;

    a {
      color: #ff6a3a;

      &:hover {
        color: #ff0000;
      }
    }
  }
}

#donate-button {
  width: 30%;
  margin: 5px 0 0 0;

  &:hover {
    transform: scale(1.05);
  }
}

// Media queries
@media (max-width: 500px) {
  h1 {
    font-size: 40px;
  }

  #iban {
    font-size: 15px;
  }
}

@media (max-width: 999px) {
  section {
    width: 90%;
  }

  ul {
    width: 80%;
  }

  #donate-button {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 375px) {
  h1 {
    font-size: 30px;
  }

  #iban {
    font-size: 12px;
  }
}

@media (min-width: 1000px) {
  .overlay-single-card {
    width: 50%;
    padding-top: 18px;
    padding-bottom: 50px;
    text-align: center;
    border-radius: 20px;
    background-color: black;

    .details-btn {
      text-align: start;
      margin-left: 4%;

      button {
        border: none;
        font-size: 25px;
        font-weight: bold;
        text-align: start;
        padding-bottom: 20px;
        color: rgba(255, 255, 255, 0.753);
        background-color: transparent;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .details-img {
      width: 50%;
      border-radius: 10px;
      background-color: #f74005;

      .top-paragraph {
        font-size: 25px;
        padding-top: 20px;
        padding-bottom: 15px;
      }

      .bottom-paragraph {
        font-size: 20px;
        padding: 10px 20px 15px 20px;
      }

      img {
        width: 50%;
      }
    }
  }
}
</style>
