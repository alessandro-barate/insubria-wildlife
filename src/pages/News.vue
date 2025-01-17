<script>
export default {
  name: "News",

  data() {
    return {};
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
      <div class="col">
        <h1 class="uppercase">{{ t("nav.news") }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  color: rgb(0, 136, 255);
}
</style>
