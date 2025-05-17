<script>
import { FormKit } from "@formkit/vue";
import { store } from "../store.js";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "ContactForm",

  data() {
    return {
      store,
      currentIndex: null,
    };
  },
};
</script>

<script async setup>
import { sanitizeFormInput } from "../utils/sanitize.js";
import { useI18n } from "vue-i18n";

// Form validation rules
const formRules = {
  name: [["required"], ["length", 2, 50], ["matches", /^[A-Za-zÀ-ÿ\s']+$/]],
  surname: [["required"], ["length", 2, 50], ["matches", /^[A-Za-zÀ-ÿ\s']+$/]],
  mail: [["required"], ["email"], ["length", 5, 100]],
  message: [["required"], ["length", 10, 1000]],
};

// Function to send the email through the form
const sendMail = async (fields, node) => {
  // Calling uuid generation
  let myuuid = uuidv4();

  try {
    // GET request explicit configuration for the token call
    const responseToken = await axios.get(
      import.meta.env.VITE_ENDPOINT_GETTOKEN_URL,
      {
        params: {
          myuuid: myuuid,
        },
      }
    );

    // Token variable
    let formToken = "";

    if (responseToken.data.status === "success") {
      formToken = responseToken.data.token;
    } else {
    }

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": formToken,
      },
    };

    // Sanitize input using specific form sanitization
    const sanitizedFields = {
      name: sanitizeFormInput(fields.name.trim()),
      surname: sanitizeFormInput(fields.surname.trim()),
      mail: sanitizeFormInput(fields.mail.trim().toLowerCase()),
      message: sanitizeFormInput(fields.message.trim()),
      timestamp: Date.now(),
      myuuid: myuuid,
    };

    // POST request explicit configuration
    const response = await axios.post(
      import.meta.env.VITE_ENDPOINT_URL,
      sanitizedFields,
      config
    );

    if (response.data.status === "success") {
      node.reset();
      document.getElementById("successMessage").style.display = "block";
    } else {
      // Aggiungiamo log per vedere cosa stiamo ricevendo dal server
      console.log("Risposta completa dal server:", response.data);
      console.log("Messaggio di errore:", response.data.message);

      let errorMessages;

      try {
        // Try to analyze the message as a JSON
        errorMessages = JSON.parse(response.data.message);
        console.log("Errore analizzato:", errorMessages);
      } catch (parseError) {
        console.log("Impossibile analizzare come JSON:", parseError);
        // If not a valid JSON, creates a simply error object
        errorMessages = {
          form:
            response.data.message ||
            "Si è verificato un errore durante l'invio del modulo",
        };
        console.log("Errore formattato:", errorMessages);
      }

      node.setErrors(["There was an error in this form"], errorMessages);
    }
  } catch (error) {
    console.error("Errore:", error);
    console.error("Config:", error.config);
    if (error.response) {
      console.error("Response:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request made but no response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
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
              id="form"
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
                validation="required"
                autocomplete="off"
              />
              <FormKit
                type="text"
                name="surname"
                id="surname"
                :label="t('contactUs.surname')"
                :validation="formRules.surname"
                :validation-messages="{
                  matches: t('validation.onlyLetters'),
                  length: t('validation.length', { min: 2, max: 50 }),
                }"
                validation="required"
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
                validation="required"
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
                validation="required"
                autocomplete="off"
              />
            </FormKit>
            <div
              id="successMessage"
              class="successMessage"
              style="display: none"
            >
              <p>Email inviata con successo!</p>
            </div>
          </div>
        </section>
        <!-- END form section -->
      </div>
    </div>
  </div>

  <div id="donate-button-container">
    <div id="donate-button"></div>
  </div>
</template>

<style scoped lang="scss">
.col {
  position: relative;
  padding-bottom: 100px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../assets/img/contact/background/flying-bird.webp);
}

section {
  top: 50px;
  position: relative;
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

#successMessage {
  width: 100%;
}

:deep(.formkit-form) {
  margin: 0 auto;

  .formkit-wrapper {
    width: 50%;
    margin: 0 auto;
  }

  .formkit-outer {
    margin-bottom: 20px;
  }

  .formkit-label {
    color: rgba(255, 255, 255, 0.753);
    text-align: center;
    display: block;
  }

  .formkit-input {
    color: rgba(255, 255, 255, 0.753);
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    background-color: transparent;

    &:focus {
      outline: none;
      border-color: #ff6b3a;
      box-shadow: 0 0 5px #ff6b3a;
    }
  }

  .formkit-message {
    color: #ff6b6b;
    font-size: 0.85rem;
    margin-top: 10px;
    margin-bottom: 15px;
    text-align: center;
  }

  .formkit-wrapper button {
    color: black;
    border: none;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 3px 30px 7px 30px;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
    background-color: #ff6b3ad8;

    &:hover {
      transform: scale(1.05);
      background-color: #ff6b3a;
      box-shadow: 0 -1px 10px #ff6b3ac0;
    }
  }

  .formkit-submit {
    color: rgba(255, 255, 255, 0.753);
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
      background-color: #3a7bc8;
    }
  }

  .formkit-actions {
    width: 20%;
  }
}

// Media queries
@media (max-width: 500px) {
  .overlay {
    margin-bottom: 50px;
  }

  .contact {
    width: 90%;

    h1 {
      font-size: 40px;
    }
  }

  :deep(.formkit-form) {
    .formkit-wrapper {
      width: 90%;
    }

    #message,
    textarea {
      width: 90% !important;
      max-width: 100%;
      margin: 0 auto;
    }

    #message {
      margin-top: 10px;
    }

    .formkit-actions {
      width: 100% !important;
      margin: 0 auto;
      text-align: center;

      button {
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 609px) {
  .col {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media (max-width: 375px) {
  .contact h1 {
    font-size: 30px;
  }
}
</style>
