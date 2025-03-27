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
      import.meta.env.VITE_ENDPOINT_URL_WINDOWS,
      sanitizedFields,
      config
    );

    if (response.data.status === "success") {
      node.reset();
      document.getElementById("successMessage").style.display = "block";
    } else {
      node.setErrors(
        ["There was an error in this form"],
        JSON.parse(response.data.message)
      );
    }
  } catch (error) {
    console.error("Errore:", error);
    console.error("Config:", error.config);
    if (error.response) {
      console.error("Response:", error.response.data);
      console.error("Status:", error.response.status);
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
  padding-bottom: 60px;
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
  width: 80%;
  margin: 0 auto;

  .formkit-label {
    color: rgba(255, 255, 255, 0.753);
    margin-bottom: 8px;
    text-align: center;
    display: block;
  }

  .formkit-input {
    width: 100%;
    padding: 10px;
    background-color: transparent;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: #4a90e2;
      box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
    }
  }

  .formkit-message {
    color: #ff6b6b;
    font-size: 0.85rem;
    margin-top: -12px;
    margin-bottom: 12px;
    text-align: center;
  }

  .formkit-submit {
    background-color: #4a90e2;
    color: rgba(255, 255, 255, 0.753);
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
      background-color: #3a7bc8;
    }
  }

  .formkit-actions {
    width: 13%;
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

@media (max-width: 375px) {
  .contact h1 {
    font-size: 30px;
  }
}
</style>
