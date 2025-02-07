<script>
import { store } from "../store.js";
export default {
  name: "Supportaci",

  data() {
    return {};
  },

  mounted() {
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
              <li>
                <TranslatedTextSpan
                  text-key="supportUs.list.firstListElement"
                />
                <br />
                <span id="iban">IT02S0623022808000047552608</span>
              </li>
              <li>
                <TranslatedTextSpan
                  text-key="supportUs.list.secondListElement.name"
                />
                <div id="donate-button-container">
                  <span>{{ t("supportUs.list.secondListElement.link") }}</span>
                  <div id="donate-button"></div>
                </div>
                <br />
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

ul {
  width: 50%;
  padding-top: 12px;
  text-align: start;

  li {
    font-size: 18px;
    padding-top: 6px;
    list-style-type: disc;
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
  width: 100%;
  text-align: start;

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
}

@media (max-width: 375px) {
  h1 {
    font-size: 30px;
  }

  #iban {
    font-size: 12px;
  }
}
</style>
