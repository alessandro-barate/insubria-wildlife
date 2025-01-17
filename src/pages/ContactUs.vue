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

console.log("Ambiente:", import.meta.env.MODE);
console.log("URL API:", import.meta.env.VITE_ENDPOINT_URL);
</script>

<script setup>
import { sanitizeFormInput } from "../utils/sanitize.js";
import { useI18n } from "vue-i18n";

// Form validation rules
const formRules = {
  name: [["required"], ["length", 2, 50], ["matches", /^[A-Za-zÀ-ÿ\s']+$/]],
  surname: [["required"], ["length", 2, 50], ["matches", /^[A-Za-zÀ-ÿ\s']+$/]],
  mail: [["required"], ["email"], ["length", 5, 100]],
  message: [["required"], ["length", 10, 1000]],
};

// Form logic
const sendMail = async (fields) => {
  // For debug
  // console.log("Tutte le variabili ENV:", import.meta.env);
  // console.log("URL utilizzato:", import.meta.env.VITE_ENDPOINT_URL);
  // console.log("Metodo richiesta: POST");
  // console.log("URL:", import.meta.env.VITE_ENDPOINT_URL);
  // console.log("Dati:", fields);

  // Configurazione esplicita della richiesta POST
  try {
    // Get CSRF token from meta tag
    const token = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": token,
      },
    };

    // Sanitize input using specific form sanitization
    const sanitizedFields = {
      name: sanitizeFormInput(fields.name.trim()),
      surname: sanitizeFormInput(fields.surname.trim()),
      mail: sanitizeFormInput(fields.mail.trim().toLowerCase()),
      message: sanitizeFormInput(fields.message.trim()),
    };

    const response = await axios.post(
      import.meta.env.VITE_ENDPOINT_URL,
      sanitizedFields,
      config
    );

    // console.log("Risposta:", response);

    if (response.data.status === "success") {
      alert("Email inviata con successo!");
    } else {
      alert(response.data.message || "Si è verificato un errore");
    }
  } catch (error) {
    console.error("Errore:", error);
    console.error("Config:", error.config);
    if (error.response) {
      console.error("Response:", error.response.data);
      console.error("Status:", error.response.status);
    }
    alert("Si è verificato un errore. Per favore riprova.");
  }
};

// Page translation logic
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
              method="POST"
              :submit-label="t('contactUs.submit')"
            >
              <FormKit
                type="text"
                name="name"
                id="name"
                :label="t('contactUs.name')"
                :validation="formRules.name"
                :validation-messages="{
                  matches: t('validation.onlyLetters'),
                  length: t('validation.length', { min: 2, max: 50 }),
                }"
                required
                autocomplete="off"
              />
              <FormKit
                type="text"
                name="surname"
                id="surname"
                :validation="formRules.surname"
                :validation-messages="{
                  matches: t('validation.onlyLetters'),
                  length: t('validation.length', { min: 2, max: 50 }),
                }"
                required
                autocomplete="off"
              />
              <FormKit
                type="email"
                name="mail"
                id="mail"
                :label="t('contactUs.email')"
                :validation="formRules.mail"
                :validation-messages="{
                  email: t('validation.email'),
                  length: t('validation.length', { min: 5, max: 100 }),
                }"
                required
                autocomplete="off"
              />
              <FormKit
                type="textarea"
                name="message"
                id="message"
                rows="8"
                cols="50"
                :label="t('contactUs.message')"
                :validation="formRules.message"
                :validation-messages="{
                  length: t('validation.length', { min: 10, max: 1000 }),
                }"
                required
                autocomplete="off"
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
  background-image: url(../assets/img/contact/background/flying-bird.webp);
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
