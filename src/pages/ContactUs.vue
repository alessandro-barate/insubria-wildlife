<script>
import { FormKit } from "@formkit/vue";
import { store } from "../store.js";
import axios from "axios";
export default {
  name: "Contattaci",

  data() {
    return {
      store,
      currentIndex: null,
    };
  },
};
</script>

<script setup>
// Form logic
const sendMail = async (fields) => {
  // For debug
  // console.log("Tutte le variabili ENV:", import.meta.env);
  // console.log("URL utilizzato:", import.meta.env.VITE_ENDPOINT_URL);

  axios
    .post(import.meta.env.VITE_ENDPOINT_URL, fields)
    .then(function (response) {
      // Visualizzare lo stato "mail inviata" in un modo più carino
      alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
      // For debug
      // console.debug(error);
      // console.log("Si è verificato un errore");

      // Visualizzare lo stato "Errore..." in un modo più carino
      alert("Si è verificato un errore, riprovare tra qualche minuto");
    });
};

// Page translation logic
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
      <div class="col">
        <!-- Form section -->
        <section>
          <div class="form-container overlay">
            <div class="contact">
              <h1 class="uppercase">{{ t("nav.contactUs") }}</h1>
              <h2>
                {{ t("contactUs.firstTitle") }}
              </h2>
            </div>
            <FormKit
              type="form"
              @submit="sendMail"
              :submit-label="t('contactUs.submit')"
            >
              <FormKit
                type="text"
                name="name"
                id="name"
                :label="t('contactUs.name')"
                required
              />
              <FormKit
                type="text"
                name="surname"
                :label="t('contactUs.surname')"
                required
              />
              <FormKit
                type="email"
                name="mail"
                :label="t('contactUs.email')"
                required
              />
              <FormKit
                type="textarea"
                name="message"
                id=""
                rows="8"
                cols="50"
                :label="t('contactUs.message')"
                required
              />
            </FormKit>
          </div>
        </section>
        <!-- END form section -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col {
  padding-top: 50px;
  padding-bottom: 60px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/img/contact/background/flying-bird.png);
}

.contact {
  width: 60%;
  text-align: center;

  h2 {
    padding-bottom: 35px;
  }
}

.overlay {
  width: 80%;
}

.form-container {
  text-align: center;
  color: rgba(255, 255, 255, 0.753);

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
}

// Media queries
@media (max-width: 500px) {
  .contact {
    width: 90%;
    margin-left: 10px;
    margin-right: 10px;

    h1 {
      font-size: 40px;
    }
  }
}

@media (max-width: 609px) {
  .col {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
