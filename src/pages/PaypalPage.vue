<script>
// import AppJs from "../app";

// export default {
//   name: "PaypalPage",

//   data() {
//     return {
//       AppJs,
//     };
//   },
// };
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
  <div id="paypal-button-container" class="paypal-button-container"></div>
  <!-- Containers for Card Fields hosted by PayPal -->
  <div id="card-form" class="card_container">
    <div id="card-name-field-container"></div>
    <div id="card-number-field-container"></div>
    <div id="card-expiry-field-container"></div>
    <div id="card-cvv-field-container"></div>
    <!-- To be replaced with your own Billing Address Fields -->
    <div>
      <label for="card-billing-address-line-1">Billing Address</label>
      <input
        type="text"
        id="card-billing-address-line-1"
        name="card-billing-address-line-1"
        autocomplete="off"
        placeholder="Address line 1"
      />
    </div>
    <div>
      <input
        type="text"
        id="card-billing-address-line-2"
        name="card-billing-address-line-2"
        autocomplete="off"
        placeholder="Address line 2"
      />
    </div>
    <div>
      <input
        type="text"
        id="card-billing-address-admin-area-line-1"
        name="card-billing-address-admin-area-line-1"
        autocomplete="off"
        placeholder="Admin area line 1"
      />
    </div>
    <div>
      <input
        type="text"
        id="card-billing-address-admin-area-line-2"
        name="card-billing-address-admin-area-line-2"
        autocomplete="off"
        placeholder="Admin area line 2"
      />
    </div>
    <div>
      <input
        type="text"
        id="card-billing-address-country-code"
        name="card-billing-address-country-code"
        autocomplete="off"
        placeholder="Country code"
      />
    </div>
    <div>
      <input
        type="text"
        id="card-billing-address-postal-code"
        name="card-billing-address-postal-code"
        autocomplete="off"
        placeholder="Postal/zip code"
      />
    </div>
    <br /><br />
    <button id="card-field-submit-button" type="button">
      Pay now with Card
    </button>
  </div>
  <p id="result-message"></p>
  <!-- <script src="https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=%PAYPAL_CLIENT_ID%"></script>
  <script src="app.js"></script> -->
</template>

<style scoped lang="scss"></style>
